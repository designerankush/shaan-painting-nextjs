'use client';

import styles from './Gallery.module.css';
import { galleryData } from '@/data/siteData';

function cx(...classes: Array<string | false | null | undefined>) {
  return classes
    .flatMap((item) => (item ? item.split(' ') : []))
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(' ');
}


export default function Gallery({ onOpen }: { onOpen: (src: string) => void }) {
  return (
    <section className={cx('gallery-sec')} id="gallery">
      <div className={cx('sec-inner')}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
          <div><p className={cx('eyebrow')}>Portfolio</p><h2 className={cx('sec-title reveal')}>Recent Projects</h2></div>
          <p style={{ color: 'var(--muted)', fontSize: '.82rem', maxWidth: 220, textAlign: 'right', lineHeight: 1.65 }} className={cx('reveal')}>Click any image to view full size.</p>
        </div>
        <div className={cx('mosaic reveal')} id="mosaic">
          {galleryData.map((item) => {
            const colN = item.cls.split(' ')[0].replace('c', '');
            const isR2 = item.cls.includes('r2');
            return (
              <div className={cx('mi')} key={item.label} style={{ gridColumn: `span ${colN}`, gridRow: isR2 ? 'span 2' : undefined }} onClick={() => onOpen(item.src)}>
                <img src={item.src} alt={item.label} loading="lazy" />
                <div className={cx('mi-ov')}><span className={cx('mi-lbl')}>{item.label}</span></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
