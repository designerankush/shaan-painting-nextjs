import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const siteName = 'Shaan Painting DS Group Pty Ltd';
const title = 'Shaan Painting DS Group | Professional House Painters';
const description = 'Premium residential interior and exterior painting services by Shaan Painting DS Group Pty Ltd. Free on-site quotes, professional preparation, and flawless finishes.';

export const metadata: Metadata = {
  metadataBase: new URL('https://shaanpainting.com'),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    'Shaan Painting',
    'Shaan Painting DS Group',
    'house painters',
    'residential painting',
    'interior painting',
    'exterior painting',
    'weatherboard restoration',
    'free painting quote',
  ],
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: '/',
    siteName,
    title,
    description,
    images: [{ url: '/images/logo.png', width: 800, height: 800, alt: siteName }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0071c5',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
