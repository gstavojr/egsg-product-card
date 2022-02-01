import { useEffect, useRef, useState } from 'react';
import {
  iProduct,
  iOnChangeArgs,
  iInitialValues,
} from '../interfaces/product.interfaces';

interface iProps {
  initialValues?: iInitialValues;
  product: iProduct;
  value?: number;
  onChange?: (args: iOnChangeArgs) => void;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: iProps) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  // Esto por que el use effect se ejecuta dos veces, uno cuando se monta el componente
  // y la otra por que cambia el valor
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);
    // if (onChange !== undefined)
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,

    increaseBy,
    reset,
  };
};
