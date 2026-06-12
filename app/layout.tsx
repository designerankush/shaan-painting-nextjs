import type { Metadata, Viewport } from 'next';
import { Inter, Barlow } from 'next/font/google';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import QuotePopupProvider from '@/components/common/QuotePopupProvider/QuotePopupProvider';
import MobileSticky from '@/components/common/MobileSticky/MobileSticky';
import GoogleTestimonials from '@/components/common/GoogleTestimonials/GoogleTestimonials';
import GoogleTagManager from '@/components/common/GoogleTagManager/GoogleTagManager';
import GoogleTagManagerNoScript from '@/components/common/GoogleTagManager/GoogleTagManagerNoScript';
import GoogleAnalytics from '@/components/common/GoogleAnalytics/GoogleAnalytics';
import './globals.css';

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
const title = 'House Painters Melbourne | Interior & Exterior Painting';
const description = 'Expert house painters in Melbourne offering interior and exterior painting services. Free quotes, fully insured, quality workmanship guaranteed.';

export const metadata: Metadata = {
  metadataBase: new URL('https://shaanpainting.com.au/'),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,

  verification: {
    google: 'ZvGlPCbatyn6XXf9HrvS597ydwjD7Cofww2jtmfe4M0',
  },

  keywords: [
    'house painters Melbourne',
    'painters Melbourne',
    'house painters Geelong',
    'painters Geelong',
    'house painters Ballarat',
    'painters Ballarat',
    'painters Gippsland',
    'painters Traralgon',
    'painters Morwell',
    'painters Warragul',
    'painters Pakenham',
    'interior painting Melbourne',
    'exterior painting Melbourne',
    'weatherboard painters',
    'residential painters',
    'commercial painters',
    'repaint specialists',
    'Dulux painters Melbourne',
    'free painting quote Melbourne',
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
      <head>
        <GoogleAnalytics />
        <GoogleTagManager />
      </head>
      <body>
        <GoogleTagManagerNoScript />
        <QuotePopupProvider>
          <Header /> 

          {children}

          <GoogleTestimonials />
          <Footer />
          <MobileSticky />
          
        </QuotePopupProvider>
      </body>
    </html>
  );
}
