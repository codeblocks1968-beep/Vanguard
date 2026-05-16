'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart, Star, CheckCircle2, ImageOff } from 'lucide-react';
import { Product, useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import styles from './ProductCard.module.css';
import Button from './Button';

interface ProductCardProps {
  product: Product;
  view?: 'grid' | 'list';
}

export default function ProductCard({ product, view = 'grid' }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [added, setAdded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const inWishlist = isInWishlist(product.id);
  
  const discountedPrice = product.discount 
    ? product.price - (product.price * product.discount) / 100 
    : product.price;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div className={`${styles.card} ${view === 'list' ? styles.listView : ''}`}>
      <div className={styles.imageContainer}>
        <div className={styles.badges}>
          {product.isNew && <span className={`${styles.badge} ${styles.newBadge}`}>NEW</span>}
          {product.discount && <span className={`${styles.badge} ${styles.discountBadge}`}>-{product.discount}%</span>}
        </div>
        
        <div className={styles.actions}>
          <button 
            className={`${styles.actionBtn} ${inWishlist ? styles.activeWishlist : ''}`} 
            aria-label="Add to Wishlist"
            onClick={handleToggleWishlist}
          >
            <Heart size={18} fill={inWishlist ? "currentColor" : "none"} />
          </button>
        </div>

        <Link href={`/products/${product.id}`}>
          {!imageError ? (
            <img 
              src={product.image} 
              alt={product.name} 
              className={styles.image}
              loading="lazy"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className={styles.placeholder}>
              <ImageOff size={48} color="var(--text-secondary)" />
              <span>Image not available</span>
            </div>
          )}
        </Link>
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.category}>{product.category}</span>
          {product.brand && <span className={styles.brand}>{product.brand}</span>}
        </div>
        <Link href={`/products/${product.id}`}>
          <h3 className={styles.title}>{product.name}</h3>
        </Link>
        
        {view === 'list' && (
          <p className={styles.description}>{product.description}</p>
        )}

        <div className={styles.rating}>
          <div className={styles.stars}>
            <Star size={14} fill="currentColor" />
          </div>
          <span>{product.rating}</span>
          <span className={styles.reviews}>({product.reviews})</span>
        </div>

        <div className={styles.footer}>
          <div className={styles.priceContainer}>
            <span className={styles.price}>${discountedPrice.toFixed(2)}</span>
            {product.discount && (
              <span className={styles.oldPrice}>${product.price.toFixed(2)}</span>
            )}
          </div>
          
          <Button 
            variant={added ? "secondary" : "primary"} 
            onClick={handleAddToCart} 
            style={{ 
              padding: view === 'list' ? '0.75rem 1.5rem' : '0.625rem', 
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              borderRadius: 'var(--radius-full)'
            }}
          >
            {added ? <CheckCircle2 size={18} /> : (
              <>
                <ShoppingCart size={18} />
                {view === 'list' && <span style={{ marginLeft: '0.5rem' }}>Add to Cart</span>}
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
