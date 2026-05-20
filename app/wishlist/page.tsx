'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, ShoppingBag, ArrowRight, Trash2, Search, X } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';
import styles from './Wishlist.module.css';

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const handleMoveToCart = (product: any) => {
    addToCart(product);
    toggleWishlist(product);
  };

  const filteredWishlist = wishlist.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <div>
          <h1>My Wishlist</h1>
          <p>You have {wishlist.length} items saved.</p>
        </div>
        <div className={styles.searchWrapper}>
          <Search size={18} className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search favorites..." 
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className={styles.clearBtn} onClick={() => setSearchQuery('')}>
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {filteredWishlist.length > 0 ? (
        <div className={styles.grid}>
          {filteredWishlist.map((product) => (
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
      ) : (
        <div className={styles.noResults}>
          <Search size={48} color="var(--text-secondary)" />
          <h2>No matches found</h2>
          <p>We couldn't find any favorites matching "{searchQuery}".</p>
          <Button variant="ghost" onClick={() => setSearchQuery('')}>
            Clear Search
          </Button>
        </div>
      )}
    </div>
  );
}
