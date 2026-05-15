import styles from './Ticker.module.css';

function cx(...classes: Array<string | false | null | undefined>) {
  return classes
    .flatMap((item) => (item ? item.split(' ') : []))
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(' ');
}

const items = ['Exterior Painting', 'Interior Painting', 'Weatherboard Restoration', 'New Construction', 'Porch & Deck', 'Door & Trim Painting', 'Surface Preparation', 'Colour Consultation', 'Free On-Site Quotes'];

export default function Ticker() {
  return <div className={cx('ticker')}><div className={cx('ttrack')}>{[...items, ...items].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}</div></div>;
}
