import React, { createContext, CSSProperties } from 'react';

import { useProduct } from '../hooks/useProduct';
import {
  iProductContextProps,
  iProduct,
  iOnChangeArgs,
  iInitialValues,
} from '../interfaces/product.interfaces';

import styles from '../styles/styles.module.css';
import { iProductCardHandles } from '../interfaces/product.interfaces';

// =======================================================================================
// Context
// =======================================================================================
export const ProductContext = createContext({} as iProductContextProps);
const { Provider } = ProductContext;

export interface iProps {
  product: iProduct;
  // children?: ReactElement | ReactElement[];
  children?: (arg: iProductCardHandles) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: iOnChangeArgs) => void;
  value?: number;
  initialValues?: iInitialValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: iProps) => {
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider
      value={{
        counter,
        product,
        maxCount,
        increaseBy,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children &&
          children({
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,

            increaseBy,
            reset,
          })}
      </div>
    </Provider>
  );
};
