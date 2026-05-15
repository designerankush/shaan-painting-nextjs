import styles from './About.module.css';
import { IMG } from '@/data/siteData';

function cx(...classes: Array<string | false | null | undefined>) {
  return classes
    .flatMap((item) => (item ? item.split(' ') : []))
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(' ');
}


export default function About() {
  return (
    <section className={cx('about')} id="about">
      <div className={cx('about-grid')}>
        <div className={cx('about-img')}><img src={IMG.img14} alt="Shaan Painting work" /><div className={cx('about-badge')}><big>DS</big><small>Group Pty Ltd</small></div></div>
        <div className={cx('about-copy')}>
          <p className={cx('eyebrow')}>About Shaan Painting</p>
          <h2 className={cx('sec-title reveal')}>Craftsmanship You Can See.<br /><span style={{ color: 'var(--blue)', fontStyle: 'italic' }}>Quality That Lasts.</span></h2>
          <p className={cx('body reveal rd1')}>Shaan Painting DS Group Pty Ltd brings professional-grade results to residential homes. We treat every property with care — thorough preparation, premium materials, and a finish that stands the test of time.</p>
          <div className={cx('checks reveal rd2')}>
            <div className={cx('chk')}>Licensed, insured & fully compliant</div>
            <div className={cx('chk')}>Premium Dulux & quality brand paints only</div>
            <div className={cx('chk')}>Meticulous surface preparation on every job</div>
            <div className={cx('chk')}>On-time delivery & spotless worksite guaranteed</div>
          </div>
          <a href="tel:0451644200" className={cx('btn-fill reveal rd3')} style={{ alignSelf: 'flex-start', display: 'inline-block' }}>Call 0451 644 200</a>
        </div>
      </div>
    </section>
  );
}
