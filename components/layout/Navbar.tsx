'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ShoppingCart, Search, Moon, Sun, Menu, Heart, X, ArrowRight, TrendingUp 
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { products } from '@/data/products';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  const suggestions = products
    .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(0, 5);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const input = document.querySelector(`.${styles.searchInput}`) as HTMLInputElement;
        if (input) input.focus();
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setShowSuggestions(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowSuggestions(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} glass`}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}></div>
            Vanguard
          </Link>

          <div className={styles.searchContainer} ref={searchRef}>
            <form className={styles.searchBar} onSubmit={handleSearch}>
              <Search size={18} className={styles.searchIcon} />
              <input 
                type="text" 
                placeholder="Search premium products..." 
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
              />
              <div className={styles.searchHint}>
                <span>⌘</span>
                <span>K</span>
              </div>
              {searchQuery && (
                <button type="button" onClick={clearSearch} className={styles.clearBtn}>
                  <X size={16} />
                </button>
              )}
            </form>

            {showSuggestions && searchQuery.length > 1 && (
              <div className={`${styles.suggestions} glass`}>
                <div className={styles.suggestionHeader}>
                  <span><TrendingUp size={14} /> Suggestions</span>
                </div>
                {suggestions.length > 0 ? (
                  suggestions.map((p) => (
                    <Link 
                      key={p.id} 
                      href={`/products/${p.id}`}
                      className={styles.suggestionItem}
                      onClick={() => setShowSuggestions(false)}
                    >
                      <img src={p.image} alt="" className={styles.suggestionImg} />
                      <div className={styles.suggestionInfo}>
                        <span className={styles.suggestionName}>{p.name}</span>
                        <span className={styles.suggestionCat}>{p.category}</span>
                      </div>
                      <ArrowRight size={14} className={styles.suggestionArrow} />
                    </Link>
                  ))
                ) : (
                  <div className={styles.noResults}>No matches found</div>
                )}
                <button className={styles.viewAllBtn} onClick={() => handleSearch()}>
                  View all results
                </button>
              </div>
            )}
          </div>

          <div className={styles.actions}>
            <button className={styles.iconBtn} onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link href="/wishlist" className={styles.iconBtn}>
              <Heart size={20} />
              {wishlistCount > 0 && <span className={styles.badge}>{wishlistCount}</span>}
            </Link>
            <Link href="/cart" className={styles.iconBtn}>
              <ShoppingCart size={20} />
              {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
