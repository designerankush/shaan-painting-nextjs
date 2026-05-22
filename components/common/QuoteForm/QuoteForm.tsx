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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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

  const submitForm = async () => {
    setErrorMessage('');

    if (!formData.firstName || !formData.email || !formData.phone) {
      setErrorMessage('Please fill your name, email, and phone number.');
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: `${formData.firstName || ''} ${formData.lastName || ''}`.trim(),
            email: formData.email || '',
            phone: formData.phone || '',
            service: formData.service || '',
            suburb: formData.suburb || '',
            address: formData.address || '',
            message: formData.projectDetails || '',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Something went wrong. Please try again.');
      }

      setIsSuccess(true);
      setFormData({});

      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 1005200);
      }
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={styles.successBox} id="success-message">
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
              required={field.required}
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
              required={field.required}
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

      {errorMessage && (
        <p style={{ color: '#b00020', marginBottom: '12px', fontSize: '14px' }}>
          {errorMessage}
        </p>
      )}

      <button type="submit" className={styles.submit} disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : buttons.submit}
      </button>
    </form>
  );
}