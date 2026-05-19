'use client';

import { useMemo, useState } from 'react';
import styles from './ServicesPage.module.css';
import { servicesPageContent } from '@/data/siteData';

function normalizeText(value: string) {
  return value.toLowerCase().trim();
}

export default function AreasPage() {
  const [search, setSearch] = useState('');
  const [activeRegion, setActiveRegion] = useState<string>('');

  const { hero, search: searchContent, regions, cta } = servicesPageContent;

  const filteredRegions = useMemo(() => {
    const query = normalizeText(search);

    if (!query) {
      return regions.map((region) => ({
        ...region,
        filteredSuburbs: region.suburbs,
      }));
    }

    return regions
      .map((region) => {
        const regionMatch =
          normalizeText(region.title).includes(query) ||
          normalizeText(region.description).includes(query);

        const filteredSuburbs = regionMatch
          ? region.suburbs
          : region.suburbs.filter((suburb) =>
              normalizeText(suburb).includes(query)
            );

        return {
          ...region,
          filteredSuburbs,
        };
      })
      .filter((region) => region.filteredSuburbs.length > 0);
  }, [regions, search]);

  const visibleSuburbCount = filteredRegions.reduce(
    (total, region) => total + region.filteredSuburbs.length,
    0
  );

  const jumpToRegion = (id: string) => {
    setActiveRegion(id);

    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const openQuotePopup = () => {
    window.dispatchEvent(new CustomEvent('openQuotePopup'));
  };

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroBgGlow}></div>
        <div className={styles.heroGridLines}></div>

        <div className={styles.heroContent}>
          <div className={styles.heroEyebrow}>
            <span className={styles.heroEyebrowLine}></span>
            <span className={styles.heroEyebrowText}>{hero.eyebrow}</span>
          </div>

          <h1>
            {hero.title}
            <br />
            <em>{hero.highlight}</em>
          </h1>

          <p className={styles.heroDesc}>{hero.description}</p>

          <div className={styles.heroStats}>
            {hero.stats.map((stat) => (
              <div className={styles.hstat} key={stat.label}>
                <div className={styles.hstatN}>{stat.value}</div>
                <div className={styles.hstatL}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.searchStrip}>
        <div className={styles.searchStripInner}>
          <div className={styles.searchBox}>
            <input
              type="search"
              value={search}
              placeholder={searchContent.placeholder}
              onChange={(event) => setSearch(event.target.value)}
            />

            <span className={styles.searchIcon}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </span>
          </div>

          <div className={styles.searchResultsTxt}>
            {search ? (
              <>
                Showing <strong>{visibleSuburbCount}</strong>{' '}
                {visibleSuburbCount === 1 ? 'suburb' : 'suburbs'}
              </>
            ) : null}
          </div>

          <div className={styles.regionJumpPills}>
            {regions.map((region) => (
              <button
                type="button"
                className={`${styles.rjp} ${
                  activeRegion === region.id ? styles.active : ''
                }`}
                key={region.id}
                onClick={() => jumpToRegion(region.id)}
              >
                {region.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.areasMain}>
        <div className={styles.areasInner}>
          {filteredRegions.map((region) => (
            <article
              className={styles.regionCard}
              id={region.id}
              key={region.id}
            >
              <div className={styles.rcHeader}>
                <div className={styles.rcIcon}>{region.icon}</div>

                <div className={styles.rcInfo}>
                  <h2 className={styles.rcTitle}>{region.title}</h2>
                  <p className={styles.rcDesc}>{region.description}</p>
                </div>

                <div className={styles.rcMeta}>
                  <span className={styles.rcBadge}>
                    {region.suburbs.length} suburbs
                  </span>
                </div>
              </div>

              <div className={styles.rcBody}>
                <div className={styles.suburbGrid}>
                  {region.filteredSuburbs.map((suburb) => (
                    <div className={styles.suburbChip} key={suburb}>
                      <span className={styles.suburbDot}></span>
                      <span className={styles.suburbName}>{suburb}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}

          {filteredRegions.length === 0 && (
            <div className={styles.noResults}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <h3>No suburbs found</h3>
              <p>Try searching another suburb or nearby region.</p>
            </div>
          )}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaLeft}>
            <div className={styles.ctaTag}>{cta.tag}</div>
            <h2>{cta.title}</h2>
            <p>{cta.description}</p>
          </div>

          <div className={styles.ctaRight}>
            <a href={cta.phone.href} className={styles.ctaPhoneNum}>
              {cta.phone.label}
            </a>

            <div className={styles.ctaPhoneLabel}>Call us anytime</div>

            <div className={styles.ctaBtnGroup}>
              <button
                type="button"
                className={styles.ctaBtnPrimary}
                onClick={openQuotePopup}
              >
                {cta.quoteButton}
              </button>

              <a href={cta.secondaryButton.href} className={styles.ctaBtnSecondary}>
                {cta.secondaryButton.label}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}