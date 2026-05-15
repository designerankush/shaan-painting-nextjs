'use client';

import styles from './Lightbox.module.css';
import { useEffect } from 'react';

function cx(...classes: Array<string | false | null | undefined>) {
  return classes
    .flatMap((item) => (item ? item.split(' ') : []))
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(' ');
}


export default function Lightbox({ src, onClose }: { src: string | null; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return <div className={cx('lb', src ? 'on' : '')} id="lb" onClick={onClose}><button className={cx('lb-x')} type="button" onClick={onClose}>✕</button>{src && <img id="lbImg" src={src} alt="" />}</div>;
}
