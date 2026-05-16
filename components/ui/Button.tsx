import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
  fullWidth?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}: ButtonProps) {
  const rootClass = `${styles.btn} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''} ${className}`;
  
  return (
    <button className={rootClass} {...props}>
      {children}
    </button>
  );
}
