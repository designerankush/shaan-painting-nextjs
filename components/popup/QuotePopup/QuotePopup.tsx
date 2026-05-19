'use client';

import { useEffect, useState } from 'react';
import styles from './QuotePopup.module.css';
import { quoteFormContent } from '@/data/siteData';

type FormValue = string;

export default function QuotePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<Record<string, FormValue>>({});

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleChange = (
    name: string,
    value: string
  ) => {
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const submitPopup = () => {
    console.log('Quote form data:', formData);

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

  const { header, quickContact, fields, buttons, success } = quoteFormContent;

  const firstRowFields = fields.filter((field) => field.half);
  const normalFields = fields.filter((field) => !field.half);

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
              onClick={closePopup}
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
            {!isSuccess ? (
              <>
                <div className={styles.formRow}>
                  {firstRowFields.map((field) => (
                    <div className={styles.formGroup} key={field.name}>
                      <label className={styles.popLabel}>{field.label}</label>

                      <input
                        className={styles.popInput}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={formData[field.name] || ''}
                        onChange={(event) =>
                          handleChange(field.name, event.target.value)
                        }
                      />
                    </div>
                  ))}
                </div>

                {normalFields.map((field) => (
                  <div className={styles.formGroup} key={field.name}>
                    <label className={styles.popLabel}>{field.label}</label>

                    {field.type === 'select' ? (
                      <select
                        className={styles.popSelect}
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={(event) =>
                          handleChange(field.name, event.target.value)
                        }
                      >
                        <option value="">{field.placeholder}</option>

                        {field.options?.map((option) => (
                          <option value={option} key={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : field.type === 'textarea' ? (
                      <textarea
                        className={styles.popTextarea}
                        name={field.name}
                        placeholder={field.placeholder}
                        rows={field.rows || 3}
                        value={formData[field.name] || ''}
                        onChange={(event) =>
                          handleChange(field.name, event.target.value)
                        }
                      />
                    ) : (
                      <input
                        className={styles.popInput}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={formData[field.name] || ''}
                        onChange={(event) =>
                          handleChange(field.name, event.target.value)
                        }
                      />
                    )}
                  </div>
                ))}

                <button
                  type="button"
                  className={styles.popSubmit}
                  onClick={submitPopup}
                >
                  {buttons.submit}
                </button>

                <button
                  type="button"
                  className={styles.popLater}
                  onClick={closePopup}
                >
                  {buttons.later}
                </button>
              </>
            ) : (
              <div className={styles.popSuccess}>
                <h3>{success.title}</h3>
                <p>{success.text}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}