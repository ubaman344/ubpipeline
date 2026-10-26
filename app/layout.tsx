import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? 'http://localhost:3000'),
  title: 'UB Pipeline — LinkedIn Growth for B2B Founders',
  description: 'UB Pipeline runs LinkedIn end to end for B2B founders: positioning, content, visuals, engagement, and conversations.',
  openGraph: {
    title: 'UB Pipeline — Your LinkedIn, fully handled.',
    description: 'LinkedIn growth for B2B founders: positioning, content, visuals, engagement, and conversations.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UB Pipeline — Your LinkedIn, fully handled.',
    description: 'LinkedIn growth for B2B founders: positioning, content, visuals, engagement, and conversations.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
