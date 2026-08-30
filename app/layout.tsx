import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://jackhumphreysdev.github.io'),
  title: 'Jack Humphreys — Software Engineer',
  description:
    'Backend and integration software engineer building dependable services with Python, JavaScript, SQL and Oracle Integration Cloud.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Jack Humphreys — Software Engineer',
    description: 'Dependable software for complex systems.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Jack Humphreys — Software Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jack Humphreys — Software Engineer',
    description: 'Dependable software for complex systems.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
