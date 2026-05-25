import styles from './Process.module.css';
import { processSteps } from '@/data/siteData';

function cx(...classes: Array<string | false | null | undefined>) {
  return classes
    .flatMap((item) => (item ? item.split(' ') : []))
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(' ');
}


export default function Process() {
  return (
    <section className={cx('proc-sec')} id="process">
      <div className='container'>
        <div style={{ textAlign: 'center' }}><p className={cx('eyebrow')} style={{ justifyContent: 'center' }}>How We Work</p>
        <h2 className={cx('sec-title reveal')}>Our 4-Step Process</h2></div>
        <div className={cx('proc-grid')}>
          <div className={cx('proc-line')}></div>
          {processSteps.map(([num, title, text], index) => <div className={cx('proc-item', 'reveal', index ? `rd${index}` : '')} key={title}><div className={cx('proc-circle')}><span className={cx('proc-n')}>{num}</span></div><h4>{title}</h4><p>{text}</p></div>)}
        </div>
      </div>
    </section>
  );
}
