'use client';

import { useSearchParams } from 'next/navigation';
import Navbar from "@/components/Navbar";
import BannerProduct from "@/components/BannerProduct";
import ProductList from "@/components/ProductList";

export default function ProductPageClient() {
  const searchParams = useSearchParams();
  const type = searchParams?.get('type');

  const data = {
    'nha-pho': { title: 'Nhà phố', description: 'Thông tin nhà phố...' },
    'nha-vuon': { title: 'Nhà vườn', description: 'Thông tin nhà vườn...' },
    'chung-cu': { title: 'Chung cư', description: 'Thông tin chung cư...' },
  };

  if (!type || !(type in data)) {
    return (
      <div className="p-4 text-center">
        <p className="text-red-500">Vui lòng chọn loại nhà hợp lệ</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar activeMenu="product" />
      <BannerProduct
        src={`/banner_product/${type}.jpg`}
        title="SẢN PHẨM XHOME"
        description="Chúng tôi cung cấp đầy đủ các sản phẩm, dịch vụ liên quan đến Thiết kế, Thi công và bán lẻ nội thất..."
      />
      <ProductList type={type} />
    </div>
  );
}
