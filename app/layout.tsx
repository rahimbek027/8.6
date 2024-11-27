import './globals.css';
export const metadata = {
  title: 'Random Users App',
  description: 'Next.js + Random Users API with TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">{children}</body>
    </html>
  );
}
