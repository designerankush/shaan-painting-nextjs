import styles from './BeforeAfter.module.css';
import { beforeAfter } from '@/data/siteData';

function cx(...classes: Array<string | false | null | undefined>) {
  return classes
    .flatMap((item) => (item ? item.split(' ') : []))
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(' ');
}


export default function BeforeAfter() {
  return (
    <section className={cx('ba-sec')} id="beforeafter">
      <div className={cx('sec-inner')}>
        <p className={cx('eyebrow')}>The Shaan Difference</p>
        <h2 className={cx('sec-title reveal')}>Before & After</h2>
        <div className={cx('ba-grid reveal')} id="baGrid">
          {beforeAfter.map((item) => <div className={cx('ba-card')} key={item.t}>
            <div className={cx('ba-labels')}><div className={cx('ba-lbl b')}>Before</div><div className={cx('ba-lbl a')}>After</div></div>
            <div className={cx('ba-imgs')}><img src={item.b} alt="Before" loading="lazy" /><img src={item.a} alt="After" loading="lazy" /></div>
            <div className={cx('ba-foot')}><span className={cx('ba-title')}>{item.t}</span><span className={cx('ba-done')}>✦ Completed</span></div>
          </div>)}
        </div>
      </div>
    </section>
  );
}
