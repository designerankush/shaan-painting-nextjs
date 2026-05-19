'use client';

import { useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import About from './components/About/About';
import BeforeAfter from './components/BeforeAfter/BeforeAfter';
import Contact from './components/Contact/Contact';
import Cursor from '@/components/common/Cursor/Cursor';
import Gallery from './components/Gallery/Gallery';
import Hero from './components/Hero/Hero';
import Lightbox from '@/components/common/Lightbox/Lightbox';
import Popup from '@/components/popup/QuotePopup/QuotePopup';
import Process from './components/Process/Process';
import Services from './components/Services/Services';
import Ticker from './components/Ticker/Ticker';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import WhyUs from './components/WhyUs/WhyUs';
import GoogleReviewStrip from './components/GoogleReviewStrip/GoogleReviewStrip';
import AreasWeService from './components/AreasWeService/AreasWeService';

function cx(...classes: Array<string | false | null | undefined>) {
  return classes
    .flatMap((item) => (item ? item.split(' ') : []))
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(' ');
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HousePainter',
  name: 'Shaan Painting DS Group Pty Ltd',
  image: '/images/logo.jpg',
  telephone: '+61451644200',
  email: 'Shaanpainting3978@gmail.com',
  priceRange: '$$',
  url: '/',
  description: 'Premium residential interior and exterior painting services with free on-site quotes.',
  areaServed: 'Australia',
  sameAs: []
};

export default function HomePage() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('vis');
      }),
      { threshold: 0.1 },
    );

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Cursor /> 
      <Hero />
      <GoogleReviewStrip />
      <Ticker />
      <About />
      <Services />
      <Gallery onOpen={setLightboxSrc} />
      <AreasWeService />
      <BeforeAfter />
      <Process />
      <WhyChooseUs />
      <WhyUs />
      <Contact />
      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </>
  );
}
