'use client';

import styles from './Contact.module.css';
import { FormEvent, useState } from 'react';
import { HomeIcon, MailIcon, PhoneIcon } from '@/components/common/Icons/icons';
import QuoteForm from '@/components/common/QuoteForm/QuoteForm';

function cx(...classes: Array<string | false | null | undefined>) {
  return classes
    .flatMap((item) => (item ? item.split(' ') : []))
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(' ');
}


export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    const form = event.currentTarget;
    window.setTimeout(() => {
      setSubmitted(false);
      form.reset();
    }, 5000);
  };

  return (
    <section className={cx('contact-sec')} id="contact">
      <div className={cx('container')}>
        <div className={cx('contact-grid')}>
          <div className={cx('cinfo reveal')}>
            <p className={cx('eyebrow')} style={{ color: 'var(--blueM)' }}>Get In Touch</p>
            <h2 className={cx('sec-title wh')}>Request Your<br /><em style={{ color: 'var(--blueM)' }}>Free Quote.</em></h2>
            <p>Fill in the form and we'll get back within 24 hours with a detailed, no-obligation quote tailored to your project.</p>
            <div className={cx('cdetails')}>
              <a href="tel:0451644200" className={cx('cd-phone')}><div className={cx('cd-phone-icon')}><PhoneIcon size={24} /></div><div><div className={cx('cd-phone-label')}>Call Us Anytime</div><div className={cx('cd-phone-num')}>0451 644 200</div></div></a>
              <a href="mailto:contact@shaanpainting.com" className={cx('cd-row')}>
                <div className={cx('cd-icon')}>
                  <MailIcon size={20} /></div><div><div className={cx('cd-label')}>Email Us</div><div className={cx('cd-val')}>contact@shaanpainting.com</div>
                </div>
              </a>
              <div className={cx('cd-row')} style={{ cursor: 'default' }}><div className={cx('cd-icon')}><HomeIcon /></div><div><div className={cx('cd-label')}>Company</div><div className={cx('cd-val')}>Shaan Painting DS Group Pty Ltd</div></div></div>
            </div>
          </div>

          <div className={cx('cform-box reveal rd1')} id="quote-form">
            <h3 className={cx('cform-title')}>Free Quote Request</h3>
            
            <QuoteForm variant="contact" />

          </div>
        </div>
      </div>
    </section>
  );
}
