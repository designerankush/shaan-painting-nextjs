'use client';

import styles from './Hero.module.css';
import { useEffect, useState } from 'react';
import { heroSlides } from '@/data/siteData';

function cx(...classes: Array<string | false | null | undefined>) {
  return classes
    .flatMap((item) => (item ? item.split(' ') : []))
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(' ');
}

function scrollToSection(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
  event.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((value) => (value + 1) % heroSlides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className={cx('hero')} id="home">
      <div className={cx('hslides')} id="hslides" style={{ transform: `translateX(-${current * 100}%)` }}>
        {heroSlides.map((slide, index) => (
          <div className={cx('hslide', index === current ? 'active' : '')} key={slide.src}>
            <img src={slide.src} alt={slide.tag} loading={index === 0 ? 'eager' : 'lazy'} />
          </div>
        ))}
      </div>
      <div className={cx('hov1')}></div><div className={cx('hov2')}></div>
      <div className={cx('hcont')}>
        <div className={cx('htag')}><span className={cx('htag-line')}></span><span className={cx('htag-txt')}>Fully Insured Residential & Commercial Painters</span></div>
        <h1>Premium Painting Services Across 420<br /><em> Melbourne & Regional Victoria.</em></h1>
        <p className={cx('hsub')}>Interior • Exterior • Weatherboard • New Homes <br/> Professional Dulux Finishes With Long-Lasting Results</p>
        <div className={cx('hbtns')}>
          <a href="#contact" className={cx('btn-fill')} onClick={(e) => scrollToSection(e, '#contact')}>Get Free Quote</a>
          <a href="tel:0451644200" className={cx('btn-out')}>Call Shaan Today</a>
        </div>
      </div>
      <div className={cx('hdots')} id="hdots">{heroSlides.map((slide, index) => <button aria-label={slide.tag} className={cx('hdot', index === current ? 'active' : '')} key={slide.src} onClick={() => setCurrent(index)} />)}</div>
      <div className={cx('hctr')}><strong id="hCur">{String(current + 1).padStart(2, '0')}</strong> / <span id="hTot">{String(heroSlides.length).padStart(2, '0')}</span></div>
      <div className={cx('hstats')}>
        <div className={cx('hstat')}><div className={cx('hstat-n')}>500+</div><div className={cx('hstat-l')}>Projects Done</div></div>
        <div className={cx('hstat')}><div className={cx('hstat-n')}>10+</div><div className={cx('hstat-l')}>Years Exp.</div></div>
        <div className={cx('hstat')}><div className={cx('hstat-n')}>100%</div><div className={cx('hstat-l')}>Satisfaction</div></div>
        <div className={cx('hstat')}><div className={cx('hstat-n')}>Free</div><div className={cx('hstat-l')}>Quotes</div></div>
      </div>
    </section>
  );
}
