'use client';

import styles from './QuotePopup.module.css';
import { quoteFormContent } from '@/data/siteData';
import QuoteForm from '@/components/common/QuoteForm/QuoteForm';

type QuotePopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function QuotePopup({ isOpen, onClose }: QuotePopupProps) {
  if (!isOpen) return null;

  const { header, quickContact, buttons } = quoteFormContent;

  return (
    <div className={styles.modal}>
      <div className={styles.modalDialog}>
        <div className={styles.modalContent}>
          <div className={styles.popHeader}>
            <div className={styles.popHeaderLeft}>
              <p>{header.eyebrow}</p>
              <h2>{header.title}</h2>
            </div>

            <button
              type="button"
              className={styles.popClose}
              onClick={onClose}
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className={styles.popQuick}>
            <a href={quickContact.phone.href} className={styles.popPhone}>
              {quickContact.phone.label}
            </a>

            <a href={quickContact.email.href} className={styles.popEmail}>
              {quickContact.email.label}
            </a>
          </div>

          <div className={styles.popBody}>
            <QuoteForm variant="popup" onSuccess={onClose} />

            <button
              type="button"
              className={styles.popLater}
              onClick={onClose}
            >
              {buttons.later}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}