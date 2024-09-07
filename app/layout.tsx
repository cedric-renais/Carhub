import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Carhub',
  description: 'Carhub, la location de voitures réinventée.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
