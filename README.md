# egs-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Gustavo Sanchez

```typescript
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from 'egs-product-card';
```

```jsx
<ProductCard product={product} initialValues={{ count: 4, maxCount: 10 }}>
  {({ reset, increaseBy, count, maxCount, isMaxCountReached }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
