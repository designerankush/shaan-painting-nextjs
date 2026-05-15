'use client';

import { useEffect, useState } from 'react';
import { headerContent } from '@/data/siteData';
import {PhoneIcon} from '@/components/common/Icons/icons';
import styles from './Header.module.css';

function cx(...classes: Array<string | false | null | undefined>) {
  return classes
    .flatMap((item) => (item ? item.split(' ') : []))
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(' ');
}

function scrollToSection(
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string
) {
  if (!href.startsWith('#')) return;

  event.preventDefault();

  const section = document.querySelector(href);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { logo, brand, navLinks, cta } = headerContent;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <header className={cx('nav', scrolled && 'scrolled')}>
        <a
          href={logo.href}
          className={cx('nlogo')}
          onClick={(event) => scrollToSection(event, logo.href)}
        >
          <img
            className={cx('nlogo-img')}
            src={logo.src}
            alt={logo.alt}
            width={300}
          />

          <div className={cx('nlogo-text')}>
            <strong>{brand.title}</strong>
            <span>{brand.subtitle}</span>
          </div>
        </a>

        <nav aria-label="Main navigation">
          <ul className={cx('nlinks')}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) => scrollToSection(event, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href={cta.href} className={cx('ncta')}>
          <PhoneIcon />
          <span>{cta.label}</span>
        </a>

        <button
          className={cx('hmbg', menuOpen && 'active')}
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <ul
        className={cx('mnav', menuOpen && 'open')}
        id="mobile-navigation"
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(event) => {
                scrollToSection(event, link.href);
                setMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          </li>
        ))}

        <li>
          <a href={cta.href} className={cx('m-cta')}>
            <PhoneIcon />
            {cta.label}
          </a>
        </li>
      </ul>
    </>
  );
}