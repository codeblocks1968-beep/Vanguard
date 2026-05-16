import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <h2 className={styles.logo}>Vanguard</h2>
          <p className={styles.description}>
            Your premium destination for modern and minimal lifestyle products. 
            Experience quality like never before.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialBtn}><Facebook size={20} /></a>
            <a href="#" className={styles.socialBtn}><Twitter size={20} /></a>
            <a href="#" className={styles.socialBtn}><Instagram size={20} /></a>
            <a href="#" className={styles.socialBtn}><Youtube size={20} /></a>
          </div>
        </div>

        <div className={styles.linkCol}>
          <h3>Shop</h3>
          <Link href="/products?category=new">New Arrivals</Link>
          <Link href="/products?category=trending">Trending</Link>
          <Link href="/products?category=clothing">Clothing</Link>
          <Link href="/products?category=accessories">Accessories</Link>
        </div>

        <div className={styles.linkCol}>
          <h3>Support</h3>
          <Link href="/contact">Contact Us</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/shipping">Shipping & Returns</Link>
          <Link href="/track">Track Order</Link>
        </div>

        <div className={styles.newsletterCol}>
          <h3>Stay in the loop</h3>
          <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <form className={styles.form}>
            <input type="email" placeholder="Enter your email" className={styles.input} />
            <button type="submit" className={styles.submitBtn}>Subscribe</button>
          </form>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Vanguard eCommerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
