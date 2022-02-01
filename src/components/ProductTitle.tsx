import React, { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

// Estilos mediante modulos
import styles from '../styles/styles.module.css';

export interface iProps {
  className?: string;
  title?: string;
  style?: CSSProperties;
}

// Mini componente de una titulo
export const ProductTitle = ({ title, className, style }: iProps) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : product.title}
    </span>
  );
};
