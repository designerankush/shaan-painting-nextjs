import styles from './GoogleReviewStrip.module.css';
import { googleReviewStripContent } from '@/data/siteData';

function cx(...classes: Array<string | false | null | undefined>) {
  return classes
    .flatMap((item) => (item ? item.split(' ') : []))
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(' ');
}

export default function GoogleReviewStrip() {
  const { logoText, rating, label, badges } = googleReviewStripContent;

  return (
    <section className={cx('stars-strip')} aria-label="Google Reviews rating">
      <div className={cx('stars-inner')}>
        <div className={cx('stars-left')}>
          <div className={cx('glogo')}>
            <div className={cx('glogo-dot')}>
              <span></span>
            </div>
            <span className={cx('glogo-txt')}>{logoText}</span>
          </div>

          <div className={cx('stars-row')}>
            <div className={cx('star-icons')} aria-label={`${rating} star rating`}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>★</span>
              ))}
            </div>

            <span className={cx('s-rating')}>{rating}</span>
            <span className={cx('s-label')}>· {label}</span>
          </div>
        </div>

        <div className={cx('stars-badges')}>
          {badges.map((badge) => (
            <span className={cx('sbadge')} key={badge}>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}