export default function RawPrintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.__PRINT_MODE = true;

            // Disable CSS-transition-based animations globally by
            // making getComputedStyle always report 0s durations.
            // Recharts checks window.matchMedia for reduced motion:
            var origMatchMedia = window.matchMedia;
            window.matchMedia = function(q) {
              if (q === '(prefers-reduced-motion: reduce)') {
                return { matches: true, media: q, addEventListener: function(){}, removeEventListener: function(){}, addListener: function(){}, removeListener: function(){}, onchange: null, dispatchEvent: function(){ return false; } };
              }
              return origMatchMedia.call(window, q);
            };

            // Force all framer-motion inline styles to their final state.
            // MutationObserver catches style changes as they happen.
            var mo = new MutationObserver(function(mutations) {
              for (var i = 0; i < mutations.length; i++) {
                var m = mutations[i];
                if (m.type === 'attributes' && m.attributeName === 'style') {
                  var el = m.target;
                  if (el.style) {
                    if (el.style.opacity !== '' && el.style.opacity !== '1') el.style.opacity = '1';
                    if (el.style.transform && el.style.transform !== 'none') el.style.transform = 'none';
                  }
                }
                if (m.type === 'childList') {
                  for (var j = 0; j < m.addedNodes.length; j++) {
                    var n = m.addedNodes[j];
                    if (n.nodeType === 1 && n.style) {
                      if (n.style.opacity !== '' && n.style.opacity !== '1') n.style.opacity = '1';
                      if (n.style.transform && n.style.transform !== 'none') n.style.transform = 'none';
                    }
                  }
                }
              }
            });
            mo.observe(document.documentElement, { attributes: true, attributeFilter: ['style'], childList: true, subtree: true });

            // Periodic sweep: force opacity/transform on all elements for 5 seconds
            var sweepCount = 0;
            var sweepInterval = setInterval(function() {
              document.querySelectorAll('*').forEach(function(el) {
                if (el.style) {
                  if (el.style.opacity !== '' && el.style.opacity !== '1') el.style.opacity = '1';
                  if (el.style.transform && el.style.transform !== 'none') el.style.transform = 'none';
                }
              });
              if (++sweepCount >= 50) clearInterval(sweepInterval);
            }, 100);
          `,
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html, body {
              width: 1920px !important;
              background: #000208 !important;
            }
            #print-deck {
              display: flex;
              flex-direction: column;
            }
            .print-slide {
              width: 1920px;
              height: 1080px;
              overflow: hidden;
              position: relative;
              flex-shrink: 0;
            }
            *, *::before, *::after {
              animation: none !important;
              animation-duration: 0s !important;
              animation-delay: 0s !important;
              transition: none !important;
              transition-duration: 0s !important;
              transition-delay: 0s !important;
            }
          `,
        }}
      />
      {children}
    </>
  );
}
