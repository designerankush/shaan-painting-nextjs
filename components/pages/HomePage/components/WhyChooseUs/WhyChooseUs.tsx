'use client';

import styles from './WhyChooseUs.module.css';
import { whyChooseUsContent } from '@/data/siteData';
import {PhoneIcon} from '@/components/common/Icons/icons';
import { useQuotePopup } from '@/components/common/QuotePopupProvider/QuotePopupProvider';

function cx(...classes: Array<string | false | null | undefined>) {
  return classes
    .flatMap((item) => (item ? item.split(' ') : []))
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(' ');
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
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

export default function WhyUs() {
  const { openQuotePopup } = useQuotePopup();

  return (
    <section className={cx('why-sec')} id="why-choose">
      <div className={cx('container')}>
        <div className={cx('why-header', 'reveal')}>
          <div className={cx('why-header-left')}>
            <p className={cx('eyebrow')}>{whyChooseUsContent.eyebrow}</p>

            <h2 className={cx('sec-title')}>
              {whyChooseUsContent.title}
              <br />
              <em>{whyChooseUsContent.highlight}</em>
            </h2>
          </div>

          <div className={cx('why-header-right')}>
            <p>{whyChooseUsContent.intro}</p>

            <a href={whyChooseUsContent.button.href} className={cx('btn-fill')}>
              {whyChooseUsContent.button.label}
            </a>
          </div>
        </div>

        <div className={cx('why-body')}>
          <div className={cx('why-img-wrap', 'reveal')}>
            <div className={cx('why-img-main')}>
              <img
                src={whyChooseUsContent.image.src}
                alt={whyChooseUsContent.image.alt}
              />

              <div className={cx('why-img-badge')}>
                <div className={cx('why-img-badge-row')}>
                  {whyChooseUsContent.stats.map((stat, index) => (
                    <div className={cx('wib-group')} key={stat.label}>
                      <div className={cx('wib-stat')}>
                        <div className={cx('wib-n')}>{stat.value}</div>
                        <div className={cx('wib-l')}>{stat.label}</div>
                      </div> 
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className={cx('why-list', 'reveal', 'rd1')}>
              {whyChooseUsContent.items.map((item) => (
                <div className={cx('wrow')} key={item.title}>
                  <div className={cx('wrow-icon')}>
                    <CheckIcon />
                  </div>

                  <div className={cx('wrow-text')}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={cx('why-cta-strip', 'reveal', 'rd2')}>
              <div>
                <strong>{whyChooseUsContent.ctaStrip.title}</strong>
                <p>{whyChooseUsContent.ctaStrip.text}</p>
              </div>

              <div className={cx('wcta-btns')}>
                <a
                  href={whyChooseUsContent.ctaStrip.call.href}
                  className={cx('wcta-call')}
                >
                  <PhoneIcon />
                  {whyChooseUsContent.ctaStrip.call.label}
                </a>

                <button
                  type="button"
                  className={cx('wcta-quote')}
                  onClick={openQuotePopup}
                >
                  <QuoteIcon />
                  {whyChooseUsContent.ctaStrip.quote.label}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}