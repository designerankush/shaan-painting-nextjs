import styles from './Services.module.css';
import { services } from '@/data/siteData';

function cx(...classes: Array<string | false | null | undefined>) {
  return classes
    .flatMap((item) => (item ? item.split(' ') : []))
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(' ');
}


export default function Services() {
  return (
    <section className={cx('svc-sec')} id="services">
      <div className={cx('container')}><p className={cx('eyebrow')} style={{ color: 'var(--blueM)' }}>What We Offer</p>
      <h2 className={cx('sec-title wh reveal')}>Our Services</h2></div>
      <div className={cx('container svc-grid')}>
        {services.map(([num, icon, title, text], index) => <div className={cx('svc', 'reveal', index % 3 === 1 ? 'rd1' : index % 3 === 2 ? 'rd2' : '')} key={title}><div className={cx('svc-n')}>{num}</div><div className={cx('svc-ico')}>{icon}</div><h3>{title}</h3><p>{text}</p>
          
        </div>)}
      </div>
    </section>
  );
}
