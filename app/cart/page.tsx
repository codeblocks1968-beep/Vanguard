'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShoppingBag, Trash2, Plus, Minus, ArrowRight, CheckCircle2, 
  Truck, CreditCard, ChevronLeft, Mail, Loader2 
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import styles from './Cart.module.css';

type CheckoutStep = 'cart' | 'shipping' | 'payment' | 'review' | 'success';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState<CheckoutStep>('cart');
  const [isProcessing, setIsProcessing] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    if (step === 'cart') setStep('shipping');
    else if (step === 'shipping') setStep('payment');
    else if (step === 'payment') setStep('review');
  };

  const handleBackStep = () => {
    if (step === 'shipping') setStep('cart');
    else if (step === 'payment') setStep('shipping');
    else if (step === 'review') setStep('payment');
  };

  const handleCheckout = () => {
    setIsProcessing(true);
    // Mock payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
      clearCart();
      
      // Simulate sending email
      setTimeout(() => {
        setEmailSent(true);
      }, 3000);
    }, 2500);
  };

  if (step === 'success') {
    return (
      <div className={`container ${styles.successPage}`}>
        <div className={styles.successContent}>
          <div className={styles.successIcon}>
            <CheckCircle2 size={80} color="var(--success)" />
          </div>
          <h1>Payment Successful!</h1>
          <p>Your order #VG-{Math.floor(Math.random() * 90000) + 10000} has been placed.</p>
          
          <div className={`${styles.emailSimulation} ${emailSent ? styles.sent : ''}`}>
            {emailSent ? (
              <>
                <Mail size={24} />
                <span>Confirmation email sent to {formData.email}!</span>
              </>
            ) : (
              <>
                <Loader2 size={24} className={styles.spin} />
                <span>Sending confirmation email...</span>
              </>
            )
          }
          </div>

          <Link href="/products">
            <Button variant="primary">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0 && step === 'cart') {
    return (
      <div className={`container ${styles.emptyPage}`}>
        <div className={styles.emptyContent}>
          <ShoppingBag size={64} color="var(--text-secondary)" />
          <h1>Your cart is empty</h1>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link href="/products">
            <Button variant="primary">Browse Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.checkoutHeader}>
        <h1 className={styles.title}>
          {step === 'cart' && 'Shopping Cart'}
          {step === 'shipping' && 'Shipping Details'}
          {step === 'payment' && 'Payment Method'}
          {step === 'review' && 'Review Your Order'}
        </h1>
        
        <div className={styles.stepper}>
          {['cart', 'shipping', 'payment', 'review'].map((s, i) => (
            <React.Fragment key={s}>
              <div className={`${styles.step} ${step === s ? styles.activeStep : ''} ${i < ['cart', 'shipping', 'payment', 'review'].indexOf(step) ? styles.completedStep : ''}`}>
                {i + 1}
              </div>
              {i < 3 && <div className={styles.stepLine}></div>}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className={styles.layout}>
        <main className={styles.main}>
          {step === 'cart' && (
            <div className={styles.cartList}>
              {cart.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.itemImage}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className={styles.itemInfo}>
                    <div className={styles.itemHeader}>
                      <h3>{item.name}</h3>
                      <button onClick={() => removeFromCart(item.id)} className={styles.removeBtn}>
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <p className={styles.itemCategory}>{item.category}</p>
                    <div className={styles.itemFooter}>
                      <div className={styles.quantity}>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={16} /></button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={16} /></button>
                      </div>
                      <p className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {step === 'shipping' && (
            <div className={`${styles.formSection} glass`}>
              <h3><Truck size={20} /> Delivery Information</h3>
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label>Full Name</label>
                  <input name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John Doe" />
                </div>
                <div className={styles.inputGroup}>
                  <label>Email Address</label>
                  <input name="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" />
                </div>
                <div className={styles.inputGroupFull}>
                  <label>Shipping Address</label>
                  <input name="address" value={formData.address} onChange={handleInputChange} placeholder="123 Street Name" />
                </div>
                <div className={styles.inputGroup}>
                  <label>City</label>
                  <input name="city" value={formData.city} onChange={handleInputChange} placeholder="New York" />
                </div>
                <div className={styles.inputGroup}>
                  <label>ZIP / Postal Code</label>
                  <input name="zip" value={formData.zip} onChange={handleInputChange} placeholder="10001" />
                </div>
              </div>
              <div className={styles.formActions}>
                <Button variant="ghost" onClick={handleBackStep}><ChevronLeft size={18} /> Back to Cart</Button>
                <Button variant="primary" onClick={handleNextStep}>Continue to Payment <ArrowRight size={18} /></Button>
              </div>
            </div>
          )}

          {step === 'payment' && (
            <div className={`${styles.formSection} glass`}>
              <h3><CreditCard size={20} /> Secure Payment</h3>
              <div className={styles.formGrid}>
                <div className={styles.inputGroupFull}>
                  <label>Card Number</label>
                  <input name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} placeholder="0000 0000 0000 0000" />
                </div>
                <div className={styles.inputGroup}>
                  <label>Expiry Date</label>
                  <input name="expiry" value={formData.expiry} onChange={handleInputChange} placeholder="MM/YY" />
                </div>
                <div className={styles.inputGroup}>
                  <label>CVV</label>
                  <input name="cvv" value={formData.cvv} onChange={handleInputChange} placeholder="123" />
                </div>
              </div>
              <div className={styles.formActions}>
                <Button variant="ghost" onClick={handleBackStep}><ChevronLeft size={18} /> Shipping</Button>
                <Button variant="primary" onClick={handleNextStep}>Review Order <ArrowRight size={18} /></Button>
              </div>
            </div>
          )}

          {step === 'review' && (
            <div className={`${styles.reviewSection} glass`}>
              <h3>Order Review</h3>
              <div className={styles.reviewGrid}>
                <div className={styles.reviewBox}>
                  <h4>Shipping To</h4>
                  <p>{formData.fullName}</p>
                  <p>{formData.address}</p>
                  <p>{formData.city}, {formData.zip}</p>
                </div>
                <div className={styles.reviewBox}>
                  <h4>Payment Method</h4>
                  <p>Card ending in {formData.cardNumber.slice(-4) || '****'}</p>
                  <p>Exp: {formData.expiry}</p>
                </div>
              </div>
              <div className={styles.formActions}>
                <Button variant="ghost" onClick={handleBackStep}><ChevronLeft size={18} /> Edit Payment</Button>
                <Button variant="primary" onClick={handleCheckout} disabled={isProcessing}>
                  {isProcessing ? 'Processing...' : `Pay $${cartTotal.toFixed(2)} Now`}
                </Button>
              </div>
            </div>
          )}
        </main>

        <aside className={styles.summary}>
          <div className={`${styles.summaryCard} glass`}>
            <h2>Order Summary</h2>
            <div className={styles.summaryRows}>
              <div className={styles.summaryRow}><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
              <div className={styles.summaryRow}><span>Shipping</span><span>FREE</span></div>
              <div className={`${styles.summaryRow} ${styles.total}`}><span>Total</span><span>${cartTotal.toFixed(2)}</span></div>
            </div>
            {step === 'cart' && (
              <Button variant="primary" fullWidth onClick={handleNextStep}>
                Checkout Now <ArrowRight size={18} />
              </Button>
            )}
            <p className={styles.secureText}>🔒 Secure Checkout Powered by Vanguard</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
