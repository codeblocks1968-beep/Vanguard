'use client';
import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { LayoutGrid, List, X } from 'lucide-react';
import styles from './Products.module.css';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';

function ProductsContent() {
  const searchParams = useSearchParams();
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(500);
  const [onlyDiscounts, setOnlyDiscounts] = useState(false);
  const [sortBy, setSortBy] = useState('Newest Arrivals');

  const searchQuery = searchParams.get('search')?.toLowerCase() || '';
  const categoryParam = searchParams.get('category');

  // Initialize filters from query params if present
  React.useEffect(() => {
    if (categoryParam) {
      const cat = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
      setSelectedCategories(prev => prev.includes(cat) ? prev : [cat]);
    }
  }, [categoryParam]);

  const categories = ["Home", "Electronics", "Accessories", "Clothing", "Appliances", "Sports", "Toys", "Blocks"];
  const brands = ["Luma", "Velo", "Aether", "Zenith", "Nova", "Artisan", "EcoWear", "FitTech", "Sonic", "Lumina", "Aura", "Shades", "KeyTech", "Orion", "Pulse", "Terra", "Glaze", "Swift", "Peak", "Haven", "Quest", "Vertex", "Flux", "Nexus"];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery) || 
                           product.description?.toLowerCase().includes(searchQuery);
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand || '');
      const matchesPrice = product.discountedPrice >= minPrice && product.discountedPrice <= maxPrice;
      const matchesDiscount = !onlyDiscounts || product.discount !== undefined;
      const matchesSize = selectedSizes.length === 0 || 
                         (product.sizes && selectedSizes.some(s => product.sizes?.includes(s)));

      return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesDiscount && matchesSize;
    }).sort((a, b) => {
      if (sortBy === 'Price: Low to High') return a.discountedPrice - b.discountedPrice;
      if (sortBy === 'Price: High to Low') return b.discountedPrice - a.discountedPrice;
      if (sortBy === 'Customer Rating') return b.rating - a.rating;
      if (sortBy === 'Best Sellers') return b.reviews - a.reviews;
      if (sortBy === 'Most Discounted') return (b.discount || 0) - (a.discount || 0);
      return 0;
    });
  }, [searchQuery, selectedCategories, selectedBrands, minPrice, maxPrice, onlyDiscounts, selectedSizes, sortBy]);

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedSizes([]);
    setMinPrice(0);
    setMaxPrice(500);
    setOnlyDiscounts(false);
  };

  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>
            {searchQuery ? `Search results for "${searchQuery}"` : 'All Products'}
          </h1>
          <p className={styles.subtitle}>
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>
        {(selectedCategories.length > 0 || selectedBrands.length > 0 || selectedSizes.length > 0 || minPrice > 0 || maxPrice < 500 || onlyDiscounts) && (
          <Button variant="ghost" onClick={clearFilters} className={styles.clearBtn}>
            Clear All <X size={16} />
          </Button>
        )}
      </div>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.filterGroup}>
            <h3>Category</h3>
            <div className={styles.filterList}>
              {categories.map((cat, i) => (
                <label key={i} className={styles.filterItem}>
                  <input type="checkbox" checked={selectedCategories.includes(cat)} onChange={() => toggleCategory(cat)} />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <h3>Price Range</h3>
            <div className={styles.priceInputs}>
              <div className={styles.priceInput}>
                <span>$</span>
                <input type="number" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} placeholder="Min" />
              </div>
              <div className={styles.priceInput}>
                <span>$</span>
                <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} placeholder="Max" />
              </div>
            </div>
          </div>

          <div className={styles.filterGroup}>
            <h3>Offers</h3>
            <label className={styles.filterItem}>
              <input type="checkbox" checked={onlyDiscounts} onChange={() => setOnlyDiscounts(!onlyDiscounts)} />
              <span>Only Discounted Items</span>
            </label>
          </div>

          <div className={styles.filterGroup}>
            <h3>Sizes (Clothing)</h3>
            <div className={styles.sizeGrid}>
              {sizes.map((size) => (
                <button 
                  key={size} 
                  className={`${styles.sizeBtn} ${selectedSizes.includes(size) ? styles.activeSize : ''}`}
                  onClick={() => toggleSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <h3>Brands</h3>
            <div className={styles.filterList}>
              {brands.slice(0, 8).map((brand, i) => (
                <label key={i} className={styles.filterItem}>
                  <input type="checkbox" checked={selectedBrands.includes(brand)} onChange={() => toggleBrand(brand)} />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        <main className={styles.main}>
          <div className={styles.toolbar}>
            <div className={styles.viewToggles}>
              <button className={`${styles.viewBtn} ${view === 'grid' ? styles.active : ''}`} onClick={() => setView('grid')}>
                <LayoutGrid size={20} />
              </button>
              <button className={`${styles.viewBtn} ${view === 'list' ? styles.active : ''}`} onClick={() => setView('list')}>
                <List size={20} />
              </button>
            </div>

            <select className={styles.sortSelect} value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option>Newest Arrivals</option>
              <option>Best Sellers</option>
              <option>Most Discounted</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Customer Rating</option>
            </select>
          </div>

          {filteredProducts.length > 0 ? (
            <div className={view === 'grid' ? styles.grid : styles.list}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} view={view} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <h2>No products found</h2>
              <p>Try adjusting your search or filters to find what you're looking for.</p>
              <Button variant="primary" onClick={clearFilters}>Clear All Filters</Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container">Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
