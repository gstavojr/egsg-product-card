import React, { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

// Estilos mediante modulos
import noImg from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface iProps {
  className?: string;
  img?: string;
  style?: CSSProperties;
}

// Mini componente de una imagen
export const ProductImage = ({ img = '', className, style }: iProps) => {
  const { product } = useContext(ProductContext);

  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImg;
  }

  return (
    <img
      src={imgToShow}
      className={`${styles.productImg} ${className}`}
      alt="Product Imagen"
      style={style}
    />
  );
};
