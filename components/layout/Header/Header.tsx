'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
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

function getHashFromHref(href: string) {
  if (href.includes('#')) {
    return href.split('#')[1];
  }

  return '';
}

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  const { logo, brand, navLinks, cta } = headerContent;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks
        .map((link) => getHashFromHref(link.href))
        .filter(Boolean);

      let currentHash = '';

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) return;

        const sectionTop = section.offsetTop - 130;

        if (window.scrollY >= sectionTop) {
          currentHash = sectionId;
        }
      });

      setActiveHash(currentHash);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('hashchange', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('hashchange', onScroll);
    };
  }, [navLinks]);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);

    if (!target) return;

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    window.history.replaceState(null, '', `/#${sectionId}`);
    setActiveHash(sectionId);
  };

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMenuOpen(false);

    if (href.startsWith('tel:') || href.startsWith('mailto:')) {
      return;
    }

    const hash = getHashFromHref(href);

    if (!hash) {
      return;
    }

    event.preventDefault();

    if (pathname === '/') {
      scrollToSection(hash);
      return;
    }

    router.push(`/#${hash}`);
  };

  useEffect(() => {
    if (pathname !== '/') return;

    const hash = window.location.hash.replace('#', '');

    if (!hash) return;

    setTimeout(() => {
      scrollToSection(hash);
    }, 250);
  }, [pathname]);

  const isActiveLink = (href: string) => {
    const hash = getHashFromHref(href);

    if (href === '/' && pathname === '/' && !activeHash) {
      return true;
    }

    if (href === pathname) {
      return true;
    }

    if (pathname === '/' && hash && activeHash === hash) {
      return true;
    }

    return false;
  };

  return (
    <>
      <header className={cx('nav', scrolled && 'scrolled')}>
        <a
          href={logo.href}
          className={cx('nlogo')}
          onClick={(event) => handleNavClick(event, logo.href)}
        >
          <img className={cx('nlogo-img')} src={logo.src} alt={logo.alt} />

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
                  className={cx(isActiveLink(link.href) && 'active')}
                  onClick={(event) => handleNavClick(event, link.href)}
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
          className={cx('hmbg', menuOpen && 'activeMenu')}
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
              className={cx(isActiveLink(link.href) && 'active')}
              onClick={(event) => handleNavClick(event, link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}

        <li>
          <a href={cta.href} className={cx('m-cta')}>
            <PhoneIcon className={cx('phoneIcon')} />
            <span>{cta.label}</span>
          </a>
        </li>
      </ul>
    </>
  );
}