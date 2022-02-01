import { iProps as ProductCardProps } from '../components/ProductCard';
import { iProps as iProductImageProps } from '../components/ProductImage';
import { iProps as iProductTitleProps } from '../components/ProductTitle';
import { iProps as iProductButtonsProps } from '../components/ProductButtons';

export interface iProduct {
  id: string;
  img?: string;
  title: string;
}

export interface iProductContextProps {
  counter: number;
  maxCount?: number;
  product: iProduct;

  increaseBy: (value: number) => void;
}

export interface iProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Buttons: (Props: iProductButtonsProps) => JSX.Element;
  Image: (Props: iProductImageProps) => JSX.Element;
  Title: (Props: iProductTitleProps) => JSX.Element;
}

export interface iOnChangeArgs {
  product: iProduct;
  count: number;
}

export interface iProductInCart extends iProduct {
  count: number;
}

export interface iInitialValues {
  count?: number;
  maxCount?: number;
}

export interface iProductCardHandles {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: iProduct;

  increaseBy: (value: number) => void;
  reset: () => void;
}
