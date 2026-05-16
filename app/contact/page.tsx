'use client';
import React from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';
import styles from './Contact.module.css';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! Our support team will get back to you shortly.');
  };

  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1>Customer Support</h1>
        <p>Have a question or suggestion? We're here to help you 24/7.</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.infoCol}>
          <div className={`${styles.infoCard} glass`}>
            <h3>Get in Touch</h3>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><Phone size={20} /></div>
                <div>
                  <label>Call Us</label>
                  <p>+1 (800) 555-Vanguard</p>
                  <span>Mon-Sun, 24/7 support</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><Mail size={20} /></div>
                <div>
                  <label>Email Us</label>
                  <p>support@vanguard.com</p>
                  <span>For problems or suggestions</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><MapPin size={20} /></div>
                <div>
                  <label>Visit Our Office</label>
                  <p>Mahaveer Complex, Jodhpur</p>
                  <span>Rajasthan, India 342001</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.infoCard} glass`}>
            <h3>Our Hours</h3>
            <div className={styles.hoursList}>
              <div className={styles.hourRow}><span>Monday - Friday</span><span>09:00 - 18:00</span></div>
              <div className={styles.hourRow}><span>Saturday</span><span>10:00 - 16:00</span></div>
              <div className={styles.hourRow}><span>Sunday</span><span>Closed (Email Support Only)</span></div>
            </div>
          </div>
        </div>

        <div className={styles.formCol}>
          <form className={`${styles.contactForm} glass`} onSubmit={handleSubmit}>
            <h3>Send us a Message</h3>
            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label>First Name</label>
                <input type="text" placeholder="John" required />
              </div>
              <div className={styles.inputGroup}>
                <label>Last Name</label>
                <input type="text" placeholder="Doe" required />
              </div>
              <div className={styles.inputGroupFull}>
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
              <div className={styles.inputGroupFull}>
                <label>Subject</label>
                <select required defaultValue="">
                  <option value="" disabled>Select a topic</option>
                  <option value="problem">Report a Problem</option>
                  <option value="suggestion">Suggestion</option>
                  <option value="order">Order Status</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className={styles.inputGroupFull}>
                <label>Your Message</label>
                <textarea rows={5} placeholder="How can we help you?" required></textarea>
              </div>
            </div>
            <Button variant="primary" type="submit" fullWidth>
              Send Message <Send size={18} />
            </Button>
          </form>
        </div>
      </div>

      <div className={styles.mapSection}>
        <h3>Find Us on Google Maps</h3>
        <div className={styles.mapWrapper}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4411.295028329668!2d73.01382347608616!3d26.278500087056475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c362b752789%3A0x32621551adc7ece3!2sMahaveer%20Complex!5e1!3m2!1sen!2sin!4v1778726299511!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: 'var(--radius-lg)' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
