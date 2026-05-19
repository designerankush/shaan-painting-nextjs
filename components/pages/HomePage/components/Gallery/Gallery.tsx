'use client';

import { useEffect, useMemo, useState } from 'react';
import styles from './Gallery.module.css';
import { galleryData } from '@/data/siteData';

function cx(...classes: Array<string | false | null | undefined>) {
  return classes
    .flatMap((item) => (item ? item.split(' ') : []))
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(' ');
}

function getGalleryLimit() {
  if (typeof window === 'undefined') return 8;

  if (window.innerWidth <= 640) return 6;
  if (window.innerWidth <= 991) return 8;

  return 8;
}

export default function Gallery({ onOpen }: { onOpen: (src: string) => void }) {
  const [visibleCount, setVisibleCount] = useState(8);
  const [loadStep, setLoadStep] = useState(8);

  useEffect(() => {
    const updateLimit = () => {
      const limit = getGalleryLimit();

      setLoadStep(limit);
      setVisibleCount((current) => Math.max(current, limit));
    };

    updateLimit();

    window.addEventListener('resize', updateLimit);

    return () => {
      window.removeEventListener('resize', updateLimit);
    };
  }, []);

  const visibleItems = useMemo(() => {
    return galleryData.slice(0, visibleCount);
  }, [visibleCount]);

  const hasMore = visibleCount < galleryData.length;

  const handleLoadMore = () => {
    setVisibleCount((current) => Math.min(current + loadStep, galleryData.length));
  };

  return (
    <section className={cx('gallerySec')} id="gallery">
      <div className={cx('container')}>
        <div className={cx('galleryHeader')}>
          <div>
            <p className={cx('eyebrow')}>Portfolio</p>
            <h2 className={cx('secTitle', 'reveal')}>Recent Projects</h2>
          </div>

          <p className={cx('galleryHint', 'reveal')}>
            Click any image to view full size.
          </p>
        </div>

        <div className={cx('masonry', 'reveal')}>
          {visibleItems.map((item) => (
            <button
              type="button"
              className={cx('masonryItem')}
              key={`${item.label}-${item.src}`}
              onClick={() => onOpen(item.src)}
              aria-label={`Open ${item.label}`}
            >
              <img src={item.src} alt={item.label} loading="lazy" />

              <span className={cx('imageOverlay')}>
                <span className={cx('imageLabel')}>{item.label}</span>
              </span>
            </button>
          ))}
        </div>

        {hasMore && (
          <div className={cx('loadMoreWrap')}>
            <button
              type="button"
              className={cx('loadMoreBtn')}
              onClick={handleLoadMore}
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}