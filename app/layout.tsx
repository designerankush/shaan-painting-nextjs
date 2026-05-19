import type { Metadata, Viewport } from 'next';
import { Inter, Barlow } from 'next/font/google';
import MobileSticky from '@/components/common/MobileSticky/MobileSticky';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import GoogleTestimonials from '@/components/common/GoogleTestimonials/GoogleTestimonials';
import './globals.css';
import QuotePopup from '@/components/popup/QuotePopup/QuotePopup';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-barlow',
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
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <body>
        <Header />
        <QuotePopup />
        {children}
        <GoogleTestimonials />
        <Footer />
        <MobileSticky />
      </body>
    </html>
  );
}
