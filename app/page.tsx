import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import styles from './Home.module.css';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';

export default function Home() {
  // Pick varied items from the 100 products
  const trendingProducts = products.filter(p => p.isNew).slice(0, 4);
  const bestSellers = products.filter(p => p.rating >= 4.8).slice(4, 8);

  return (
    <>
      <section className={styles.hero}>
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000" 
          alt="Hero background" 
          className={styles.heroImage}
        />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroSubtitle}>New Collection 2026</span>
          <h1 className={styles.heroTitle}>Elevate Your <br />Lifestyle</h1>
          <p className={styles.heroDesc}>
            Discover our premium selection of minimalist, high-quality products designed for modern living.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/products">
              <Button variant="primary" style={{ padding: '1.25rem 2.5rem', fontSize: '1.125rem' }}>
                Shop Now <ArrowRight size={22} />
              </Button>
            </Link>
            <Link href="/products?category=electronics">
              <Button variant="secondary" style={{ padding: '1.25rem 2.5rem', fontSize: '1.125rem', color: 'white', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                Explore Tech
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Scroll</span>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Shop by Category</h2>
          </div>
          <div className={styles.categoriesGrid}>
            {[
              { title: 'Home', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800' },
              { title: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800' },
              { title: 'Sports', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800' },
              { title: 'Clothing', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800' }
            ].map((cat, i) => (
              <Link href={`/products?category=${cat.title.toLowerCase()}`} key={i} className={styles.categoryCard}>
                <img src={cat.image} alt={cat.title} className={styles.categoryImage} />
                <div className={styles.categoryOverlay}></div>
                <h3 className={styles.categoryTitle}>{cat.title}</h3>
                <span className={styles.categoryLink}>
                  View All <ChevronRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Sports & Fitness</h2>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Premium gear for your active lifestyle.</p>
            </div>
            <Link href="/products?category=sports">
              <Button variant="ghost">Shop All Sports <ArrowRight size={16} /></Button>
            </Link>
          </div>
          <div className={styles.productGrid}>
            {products.filter(p => p.category === 'Sports').slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} glass`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Trending Now</h2>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>The most wanted items this season.</p>
            </div>
            <Link href="/products?sort=trending">
              <Button variant="ghost">View All <ArrowRight size={16} /></Button>
            </Link>
          </div>
          <div className={styles.productGrid}>
            {trendingProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Best Sellers</h2>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Top rated products by our community.</p>
            </div>
            <Link href="/products?sort=bestsellers">
              <Button variant="ghost">View All <ArrowRight size={16} /></Button>
            </Link>
          </div>
          <div className={styles.productGrid}>
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

