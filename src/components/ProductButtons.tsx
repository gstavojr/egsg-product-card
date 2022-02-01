import React, { CSSProperties, useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';

// Estilos mediante modulos
import styles from '../styles/styles.module.css';

export interface iProps {
  className?: string;
  style?: CSSProperties;
}

// Mini componente de botones
export const ProductButtons = ({ className, style }: iProps) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  // si counter === maxCount desactivar el boton.
  const isMaxReached = useCallback(
    // verficar que el maxCount exista, si no existe es false -> !!maxCount
    // si existe procese a evaluar.
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        {' '}
        -{' '}
      </button>

      <div className={styles.countLabel}>{counter}</div>

      <button
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disable}`}
        onClick={() => increaseBy(1)}
      >
        {' '}
        +{' '}
      </button>
    </div>
  );
};
