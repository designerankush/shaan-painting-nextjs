import styles from './WhyUs.module.css';
import { whyChooseContent } from '@/data/siteData';

function cx(...classes: Array<string | false | null | undefined>) {
  return classes
    .flatMap((item) => (item ? item.split(' ') : []))
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(' ');
}

export default function WhyUs() {
  return (
    <section className={cx('why-section')} id="why">
      <div className={cx('why-img')}>
        <img
          src={whyChooseContent.image.src}
          alt={whyChooseContent.image.alt}
        />
      </div>

      <div className={cx('why-copy')}>
        <p className={cx('eyebrow')}>{whyChooseContent.eyebrow}</p>

        <h2 className={cx('sec-title reveal')}>
          {whyChooseContent.title}
          <br />
          <em>{whyChooseContent.highlight}</em>
        </h2>

        <div className={cx('wlist reveal rd1')}>
          {whyChooseContent.items.map((item) => (
            <div className={cx('wi')} key={item.title}>
              <em className={cx('wi-icon')}>{item.icon}</em>
              <div>
                <h4>{item.title}</h4> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}