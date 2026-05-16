'use client';
import React from 'react';
import Link from 'next/link';
import { Heart, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';
import styles from './Wishlist.module.css';

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (product: any) => {
    addToCart(product);
    toggleWishlist(product);
  };

  if (wishlist.length === 0) {
    return (
      <div className={`container ${styles.emptyPage}`}>
        <div className={styles.emptyContent}>
          <div className={styles.iconBox}>
            <Heart size={64} color="var(--text-secondary)" />
          </div>
          <h1>Your wishlist is empty</h1>
          <p>Save your favorite items here to keep track of them.</p>
          <Link href="/products">
            <Button variant="primary">Start Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1>My Wishlist</h1>
        <p>You have {wishlist.length} items saved.</p>
      </div>

      <div className={styles.grid}>
        {wishlist.map((product) => (
          <div key={product.id} className={styles.itemWrapper}>
            <ProductCard product={product} />
            <div className={styles.itemActions}>
              <Button 
                variant="secondary" 
                fullWidth 
                onClick={() => handleMoveToCart(product)}
              >
                Move to Cart <ShoppingBag size={18} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
