'use client';

import { useState } from 'react';
import styles from './QuoteForm.module.css';
import { quoteFormContent } from '@/data/siteData';

type FormValue = string;

type QuoteFormProps = {
  variant?: 'popup' | 'contact';
  onSuccess?: () => void;
};

export default function QuoteForm({ variant = 'contact', onSuccess }: QuoteFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<Record<string, FormValue>>({});

  const { fields, buttons, success } = quoteFormContent;

  const firstRowFields = fields.filter((field) => field.half);
  const normalFields = fields.filter((field) => !field.half);

  const handleChange = (name: string, value: string) => {
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const submitForm = () => {
    console.log('Quote form data:', formData);

    setIsSuccess(true);

    if (onSuccess) {
      setTimeout(() => {
        onSuccess();
      }, 2200);
    }
  };

  if (isSuccess) {
    return (
      <div className={styles.successBox}>
        <h3>{success.title}</h3>
        <p>{success.text}</p>
      </div>
    );
  }

  return (
    <form
      className={`${styles.quoteForm} ${styles[variant]}`}
      onSubmit={(event) => {
        event.preventDefault();
        submitForm();
      }}
    >
      <div className={styles.formRow}>
        {firstRowFields.map((field) => (
          <div className={styles.formGroup} key={field.name}>
            <label className={styles.label}>{field.label}</label>

            <input
              className={styles.input}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              value={formData[field.name] || ''}
              onChange={(event) => handleChange(field.name, event.target.value)}
            />
          </div>
        ))}
      </div>

      {normalFields.map((field) => (
        <div className={styles.formGroup} key={field.name}>
          <label className={styles.label}>{field.label}</label>

          {field.type === 'select' ? (
            <select
              className={styles.select}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={(event) => handleChange(field.name, event.target.value)}
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
              className={styles.textarea}
              name={field.name}
              placeholder={field.placeholder}
              rows={field.rows || 3}
              value={formData[field.name] || ''}
              onChange={(event) => handleChange(field.name, event.target.value)}
            />
          ) : (
            <input
              className={styles.input}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              value={formData[field.name] || ''}
              onChange={(event) => handleChange(field.name, event.target.value)}
            />
          )}
        </div>
      ))}

      <button type="submit" className={styles.submit}>
        {buttons.submit}
      </button>
    </form>
  );
}