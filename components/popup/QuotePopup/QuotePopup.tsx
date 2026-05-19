'use client';

import { useEffect, useState } from 'react';
import styles from './QuotePopup.module.css';

export default function QuotePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const closePopup = () => {
     console.log('Popup close clicked');
    setIsOpen(false);
  };

  const submitPopup = () => {
    setIsSuccess(true);

    setTimeout(() => {
      setIsOpen(false);
    }, 2200);
  };

  useEffect(() => {
    const openPopup = () => {
      setIsSuccess(false);
      setIsOpen(true);
    };

    window.addEventListener('openQuotePopup', openPopup);

    return () => {
      window.removeEventListener('openQuotePopup', openPopup);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalDialog}>
        <div className={styles.modalContent}>
          <div className={styles.popHeader}>
            <div className={styles.popHeaderLeft}>
              <p>Free On-Site Visit — No Obligation</p>
              <h2>Request Your Free Quote</h2>
            </div>

            <button
              type="button"
              className={styles.popClose}
              onClick={closePopup}
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className={styles.popQuick}>
            <a href="tel:0451644200" className={styles.popPhone}>
              0451 644 200
            </a>

            <a href="mailto:Shaanpainting3978@gmail.com" className={styles.popEmail}>
              Shaanpainting3978@gmail.com
            </a>
          </div>

          <div className={styles.popBody}>
            {!isSuccess ? (
              <>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.popLabel}>First Name *</label>
                    <input className={styles.popInput} type="text" placeholder="John" />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.popLabel}>Last Name</label>
                    <input className={styles.popInput} type="text" placeholder="Smith" />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.popLabel}>Phone Number *</label>
                  <input className={styles.popInput} type="tel" placeholder="04XX XXX XXX" />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.popLabel}>Service Needed</label>
                  <select className={styles.popSelect}>
                    <option value="">Select a service…</option>
                    <option>Exterior Painting</option>
                    <option>Interior Painting</option>
                    <option>Weatherboard Restoration</option>
                    <option>Doors & Trim</option>
                    <option>New Construction</option>
                    <option>Porch / Deck</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Address</label>
                  <textarea className={styles.popTextarea} placeholder="Address" rows={4}></textarea>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.popLabel}>Project Details optional</label>
                  <textarea
                    className={styles.popTextarea}
                    placeholder="Briefly describe your property…"
                    rows={3}
                  />
                </div>

                <button type="button" className={styles.popSubmit} onClick={submitPopup}>
                  Send Quote Request →
                </button>

                <button type="button" className={styles.popLater} onClick={closePopup}>
                  Maybe Later — I&apos;ll explore the site first
                </button>
              </>
            ) : (
              <div className={styles.popSuccess}>
                <h3>Quote Request Sent!</h3>
                <p>
                  Thank you! We&apos;ll be in touch within 24 hours with your detailed,
                  no-obligation quote.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}