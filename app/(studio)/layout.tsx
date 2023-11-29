export const metadata = {
  title: "My portfolio's dashboard",
  description: "It is dashboard of OkOd's portfolio",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
