'use client';

import styles from './Contact.module.css';
import { FormEvent, useState } from 'react';
import { HomeIcon, MailIcon, PhoneIcon } from '@/components/common/Icons/icons';

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
        <div className={cx('container contact-grid')}>
          <div className={cx('cinfo reveal')}>
            <p className={cx('eyebrow')} style={{ color: 'var(--blueM)' }}>Get In Touch</p>
            <h2 className={cx('sec-title wh')}>Request Your<br /><em style={{ color: 'var(--blueM)' }}>Free Quote.</em></h2>
            <p>Fill in the form and we'll get back within 24 hours with a detailed, no-obligation quote tailored to your project.</p>
            <div className={cx('cdetails')}>
              <a href="tel:0451644200" className={cx('cd-phone')}><div className={cx('cd-phone-icon')}><PhoneIcon size={24} /></div><div><div className={cx('cd-phone-label')}>Call Us Anytime</div><div className={cx('cd-phone-num')}>0451 644 200</div></div></a>
              <a href="mailto:Shaanpainting3978@gmail.com" className={cx('cd-row')}><div className={cx('cd-icon')}><MailIcon size={20} /></div><div><div className={cx('cd-label')}>Email Us</div><div className={cx('cd-val')}>Shaanpainting3978@gmail.com</div></div></a>
              <div className={cx('cd-row')} style={{ cursor: 'default' }}><div className={cx('cd-icon')}><HomeIcon /></div><div><div className={cx('cd-label')}>Company</div><div className={cx('cd-val')}>Shaan Painting DS Group Pty Ltd</div></div></div>
            </div>
          </div>
          <div className={cx('cform-box reveal rd1')}>
            <h3 className={cx('cform-title')}>Free Quote Request</h3>
            <form onSubmit={submitContact}>
              <div className={cx('cf-row')}>
                <div className={cx('cf-group')}>
                  <label className={cx('cf-label')}>First Name *</label>
                  <input className={cx('cf-inp')} type="text" placeholder="John" required />
                </div>
                <div className={cx('cf-group')}>
                  <label className={cx('cf-label')}>Last Name</label>
                  <input className={cx('cf-inp')} type="text" placeholder="Smith" />
                </div>
              </div>
              <div className={cx('cf-group')}>
                <label className={cx('cf-label')}>Phone *</label>
                <input className={cx('cf-inp')} type="tel" placeholder="04XX XXX XXX" required />
              </div>
              <div className={cx('cf-group')}>
                <label className={cx('cf-label')}>Email</label>
                <input className={cx('cf-inp')} type="email" placeholder="you@email.com" />
              </div>
              <div className={cx('cf-group')}>
                <label className={cx('cf-label')}>Service Required</label>
                <select className={cx('cf-sel')} defaultValue="">
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
              <div className={cx('cf-group')}>
                <label className={cx('cf-label')}>Address</label>
                <textarea className={cx('cf-ta')} placeholder="Address" rows={4}></textarea>
              </div>              
              <div className={cx('cf-group')}>
                <label className={cx('cf-label')}>Project Details</label>
                <textarea className={cx('cf-ta')} placeholder="Describe your property and the work needed…" rows={4}></textarea>
              </div>
              <button type="submit" className={cx('cf-submit')} id="cfSubmit" disabled={submitted} style={{ background: submitted ? '#16a34a' : undefined }}>{submitted ? "✓ Request Received — We'll be in touch soon!" : 'Send Quote Request →'}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
