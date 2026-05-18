'use client';

import { useEffect, useMemo, useState } from 'react';
import styles from './GoogleTestimonials.module.css';
import { googleTestimonialsContent } from '@/data/siteData';

function cx(...classes: Array<string | false | null | undefined>) {
  return classes
    .flatMap((item) => (item ? item.split(' ') : []))
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(' ');
}

function Stars() {
  return (
    <>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>★</span>
      ))}
    </>
  );
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function QuoteArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function GoogleTestimonials() {
  const { eyebrow, title, highlight, badge, reviews, overall } =
    googleTestimonialsContent;

  const [activePage, setActivePage] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const updatePerView = () => {
      if (window.innerWidth <= 640) {
        setPerView(1);
      } else if (window.innerWidth <= 991) {
        setPerView(2);
      } else {
        setPerView(3);
      }
    };

    updatePerView();

    window.addEventListener('resize', updatePerView);

    return () => {
      window.removeEventListener('resize', updatePerView);
    };
  }, []);

  const totalPages = Math.ceil(reviews.length / perView);

  useEffect(() => {
    if (activePage > totalPages - 1) {
      setActivePage(0);
    }
  }, [activePage, totalPages]);

  const translateValue = useMemo(() => {
    return `translateX(-${activePage * 100}%)`;
  }, [activePage]);

  const goToPrev = () => {
    setActivePage((current) =>
      current === 0 ? totalPages - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActivePage((current) =>
      current === totalPages - 1 ? 0 : current + 1
    );
  };

  return (
    <section className={cx('testi-sec')} id="reviews">
      <div className={cx('container')}>
        <div className={cx('testi-header', 'reveal')}>
          <div className={cx('testi-header-left')}>
            <p className={cx('eyebrow')}>{eyebrow}</p>

            <h2 className={cx('sec-title')}>
              {title}
              <br />
              <em>{highlight}</em>
            </h2>
          </div>

          <div className={cx('testi-gbadge')}>
            <div className={cx('testi-glogo')}>
              <div className={cx('g-circle')}>G</div>
              <span className={cx('g-txt')}>{badge.source}</span>
            </div>

            <div className={cx('testi-gbadge-divider')}></div>

            <div>
              <div className={cx('testi-gbadge-stars')}>
                <Stars />
              </div>

              <div className={cx('testi-gbadge-score-row')}>
                <span className={cx('testi-gbadge-num')}>{badge.rating}</span>
                <span className={cx('testi-gbadge-of')}>{badge.outOf}</span>
              </div>

              <div className={cx('testi-gbadge-count')}>{badge.count}</div>
            </div>
          </div>
        </div>

        <div className={cx('testi-slider-wrap', 'reveal', 'rd1')}>
          <div className={cx('testi-viewport')}>
            <div
              className={cx('testi-track')}
              style={{
                transform: translateValue,
              }}
            >
              {reviews.map((review) => (
                <article
                  className={cx('tcard')}
                  key={`${review.name}-${review.date}`}
                  style={{
                    flexBasis: `${100 / perView}%`,
                    maxWidth: `${100 / perView}%`,
                  }}
                >
                  <div className={cx('tcard-inner')}>
                    <div className={cx('tcard-top')}>
                      <div className={cx('tcard-left')}>
                        <div className={cx('tcard-avatar', review.avatarClass)}>
                          {review.initial}
                        </div>

                        <div>
                          <div className={cx('tcard-name')}>{review.name}</div>
                          <div className={cx('tcard-date')}>{review.date}</div>
                        </div>
                      </div>

                      <div className={cx('tcard-gicon')}>G</div>
                    </div>

                    <div className={cx('tcard-stars')}>
                      <Stars />
                    </div>

                    <span className={cx('tcard-quote')}>&quot;</span>

                    <div className={cx('tcard-text')}>{review.text}</div>

                    <span className={cx('tcard-service')}>
                      {review.service}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className={cx('testi-bottom')}>
            <button
              type="button"
              className={cx('tnav-btn')}
              onClick={goToPrev}
              aria-label="Previous testimonial"
            >
              <ArrowLeftIcon />
            </button>

            <div className={cx('tnav-dots')}>
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={cx('tnav-dot', index === activePage && 'active')}
                  onClick={() => setActivePage(index)}
                  aria-label={`Go to testimonial page ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className={cx('tnav-btn')}
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        <div className={cx('testi-overall', 'reveal', 'rd2')}>
          <div className={cx('tov-left')}>
            <div className={cx('tov-label')}>{overall.label}</div>
            <div className={cx('tov-num')}>{overall.rating}</div>

            <div className={cx('tov-stars')}>
              <Stars />
            </div>
          </div>

          {overall.stats.map((stat) => (
            <div className={cx('tov-stat-wrap')} key={stat.label}>
              <div className={cx('tov-divider')}></div>

              <div className={cx('tov-stat')}>
                <div className={cx('tov-stat-n')}>{stat.value}</div>
                <div className={cx('tov-stat-l')}>{stat.label}</div>
              </div>
            </div>
          ))}

          <div className={cx('tov-divider')}></div>

          <a href={overall.cta.href} className={cx('tov-cta')}>
            {overall.cta.label}
            <QuoteArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}