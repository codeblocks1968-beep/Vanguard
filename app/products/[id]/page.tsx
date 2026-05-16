'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Star, Minus, Plus, ShoppingCart, CreditCard } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import styles from './ProductDetail.module.css';
import Button from '@/components/ui/Button';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  // Find product or use fallback
  const product = products.find(p => p.id === params.id) || products[0];

  const discountedPrice = product.discount 
    ? product.price - (product.price * product.discount) / 100 
    : product.price;

  const handleAddToCart = () => {
    addToCart(product, qty);
  };

  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.breadcrumb}>
        <Link href="/">Home</Link> / <Link href="/products">Products</Link> / <span>{product.name}</span>
      </div>

      <div className={styles.layout}>
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        <div className={styles.info}>
          <div>
            <span className={styles.brand}>{product.brand}</span>
            <h1 className={styles.title}>{product.name}</h1>
          </div>

          <div className={styles.rating}>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map(star => (
                <Star key={star} size={18} fill={star <= Math.round(product.rating) ? 'currentColor' : 'none'} />
              ))}
            </div>
            <span>{product.rating} Rating</span>
            <span>|</span>
            <span>{product.reviews} Reviews</span>
          </div>

          <div className={styles.priceBlock}>
            <div className={styles.prices}>
              <span className={styles.price}>${discountedPrice.toFixed(2)}</span>
              {product.discount && (
                <span className={styles.oldPrice}>${product.price.toFixed(2)}</span>
              )}
            </div>
            {product.discount && (
              <span className={styles.savingsBadge}>
                SAVE ${(product.price - discountedPrice).toFixed(2)} ({product.discount}%)
              </span>
            )}
          </div>

          <p className={styles.desc}>
            {product.description}
            <br /><br />
            Experience premium quality with this state-of-the-art product designed 
            for those who appreciate the finer things in life.
          </p>

          {product.sizes && (
            <div className={styles.sizeSection}>
              <h3>Select Size</h3>
              <div className={styles.sizeGrid}>
                {product.sizes.map((size: string) => (
                  <button 
                    key={size} 
                    className={`${styles.sizeBtn} ${selectedSize === size ? styles.activeSize : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className={styles.actions}>
            <div className={styles.actionRow}>
              <div className={styles.qtySelector}>
                <button className={styles.qtyBtn} onClick={() => setQty(Math.max(1, qty - 1))}><Minus size={16} /></button>
                <input type="number" className={styles.qtyInput} value={qty} readOnly />
                <button className={styles.qtyBtn} onClick={() => setQty(qty + 1)}><Plus size={16} /></button>
              </div>

              <Button variant="secondary" className={styles.cartBtn} onClick={handleAddToCart}>
                <ShoppingCart size={20} /> Add to Cart
              </Button>
            </div>
            
            <Button variant="primary" className={styles.cartBtn} style={{ height: '4rem' }}>
              <CreditCard size={20} /> Buy Now
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.specs}>
        <h2 className={styles.specsTitle}>Specifications</h2>
        <table className={styles.specsTable}>
          <tbody>
            <tr>
              <th>Brand</th>
              <td>{product.brand}</td>
            </tr>
            <tr>
              <th>Category</th>
              <td>{product.category}</td>
            </tr>
            <tr>
              <th>Availability</th>
              <td>In Stock</td>
            </tr>
            <tr>
              <th>Shipping</th>
              <td>Free Delivery within 2-3 business days</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
