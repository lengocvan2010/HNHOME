import { Suspense } from 'react';
import ProductPageClient from './ProductPageClient';

export default function ProductPage() {
  return (
    <Suspense fallback={<div>Đang tải...</div>}>
      <ProductPageClient />
    </Suspense>
  );
}
