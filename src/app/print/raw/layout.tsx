export default function RawPrintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
              animation-duration: 0s !important;
              animation-delay: 0s !important;
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
