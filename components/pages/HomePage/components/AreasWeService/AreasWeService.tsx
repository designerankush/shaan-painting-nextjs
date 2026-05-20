'use client';

import { useMemo, useState } from 'react';
import styles from './AreasWeService.module.css';
import { areasWeServiceContent } from '@/data/siteData'; 
import { useQuotePopup } from '@/components/common/QuotePopupProvider/QuotePopupProvider';

function cx(...classes: Array<string | false | null | undefined>) {
  return classes
    .flatMap((item) => (item ? item.split(' ') : []))
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(' ');
}

function normalize(value: string) {
  return value.toLowerCase().trim();
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg className={styles.areaBlockChevron} viewBox="0 0 24 24" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default function AreasWeService() {
  const { openQuotePopup } = useQuotePopup();
  const [search, setSearch] = useState('');
  const [openRegions, setOpenRegions] = useState<string[]>([]);

  const { eyebrow, title, description, searchPlaceholder, cta, footer, areas } =
    areasWeServiceContent;

  const filteredAreas = useMemo(() => {
    const query = normalize(search);

    if (!query) {
      return areas.map((area) => ({
        ...area,
        filteredSuburbs: area.suburbs,
      }));
    }

    return areas
      .map((area) => {
        const regionMatch = normalize(area.region).includes(query);

        const filteredSuburbs = regionMatch
          ? area.suburbs
          : area.suburbs.filter((suburb) => normalize(suburb).includes(query));

        return {
          ...area,
          filteredSuburbs,
        };
      })
      .filter((area) => area.filteredSuburbs.length > 0);
  }, [areas, search]);

  const toggleRegion = (region: string) => {
    setOpenRegions((current) =>
      current.includes(region)
        ? current.filter((item) => item !== region)
        : [...current, region]
    );
  };

  return (
    <section className={styles.areasSec} id="areas">
      <div className={styles.areasInner}>
        <div className={cx('areasTop', 'reveal')}>
          <div>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 className={cx('sec-title wh reveal')}>{title}</h2>
            <p>{description}</p>
          </div>

          <div className={styles.areasTopRight}>
            <div className={styles.areasSearchbox}>
              <SearchIcon />

              <input
                type="text"
                value={search}
                placeholder={searchPlaceholder}
                autoComplete="off"
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>

           <button
              type="button"
              className={styles.areasSbtn}
              onClick={openQuotePopup}
            >
              <QuoteIcon /> Free Quote
            </button>
          </div>
        </div>

        <div className={cx('areasGrid', 'reveal', 'rd1')}>
          {filteredAreas.map((area) => {
            const isOpen = openRegions.includes(area.region) || Boolean(search);

            return (
              <div
                className={cx('areaBlock', isOpen && 'open')}
                key={area.region}
              >
                <button
                  type="button"
                  className={styles.areaBlockHead}
                  onClick={() => toggleRegion(area.region)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.areaBlockName}>
                    <span className={styles.areaBlockIco}>{area.icon}</span>
                    {area.region}
                  </span>

                  <span className={styles.areaBlockBadge}>
                    {area.suburbs.length} suburbs
                  </span>

                  <ChevronIcon />
                </button>

                <div className={styles.areaSubs}>
                  {area.filteredSuburbs.map((suburb) => (
                    <div className={styles.areaSub} key={suburb}>
                      <div className={styles.areaSubDot}></div>
                      <span>{suburb}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {filteredAreas.length === 0 && (
          <div className={styles.noResults}>
            <h3>No suburb found</h3>
            <p>Try another suburb or call us to confirm your location.</p>
          </div>
        )}

        <div className={styles.areasFoot}>
          <p>
            <strong>{footer.text.split('?')[0]}?</strong>
            {footer.text.includes('?') ? footer.text.split('?')[1] : ''}
          </p>

          <a href={footer.phoneHref}>📞 {footer.phoneLabel}</a>
        </div>
      </div>
    </section>
  );
}