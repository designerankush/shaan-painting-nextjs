import styles from './Footer.module.css';
import { footerContent } from '@/data/siteData';

function cx(...classes: Array<string | false | null | undefined>) {
  return classes
    .flatMap((item) => (item ? item.split(' ') : []))
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(' ');
}

export default function Footer() {
  const { brand, columns, contact, bottom } = footerContent;

  return (
    <footer className={cx('footer')}>
      <div className={cx('container ft-grid')}>
        <div className={cx('f-column')}>
          <div className={cx('ft-brand')}>
            <img src={brand.logo} alt={brand.alt} />

            <div>
              <div className={cx('ft-bname')}>{brand.name}</div>
              <div className={cx('ft-bsub')}>{brand.subtitle}</div>
            </div>
          </div>

          <p className={cx('ft-desc')}>{brand.description}</p>
        </div>

        {columns.map((column) => (
          <div className={cx('ft-col')} key={column.title}>
            <h4>{column.title}</h4>

            <ul>
              {column.links.map((link) => (
                <li key={`${column.title}-${link.label}`}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className={cx('ft-col')}>
          <h4>{contact.title}</h4>

          <div className={cx('ft-contact')}>
            <a href={contact.phone.href} className={cx('footer-phone')}>
              {contact.phone.label}
            </a>

            <a href={contact.email.href} className={cx('footer-email')}>
              {contact.email.label}
            </a>
          </div>

               
          <div className={cx('social-links')}>
            <a href="https://instagram.com" target="_blank" rel="noopener" className={cx('insta-btn')}>Instagram</a>            
            <a href="https://linkedin.com" target="_blank" rel="noopener" className={cx('linkedin-btn')}>LinkedIn</a>            
            <a href="https://facebook.com" target="_blank" rel="noopener" className={cx('fb-btn')} >Facebook</a>
          </div>

          <div className={cx('ft-cta')}>
            <a href={contact.cta.href}>{contact.cta.label}</a>
          </div>
        </div>
      </div>

      <div className={cx('ft-btm container')}>
        <span>{bottom.copyright}</span>
        <span>{bottom.note}</span>
      </div>
    </footer>
  );
}