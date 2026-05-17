export default function ProjectPrintLayout({
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
              overflow: auto !important;
              height: auto !important;
              width: 100% !important;
            }
          `,
        }}
      />
      {children}
    </>
  );
}
