'use client';

import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import BannerProduct from '@/components/BannerProduct';
import Gallery from '@/components/Gallery';
import Link from "next/link";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules'; 
export default function ProductPage() {
  const type = 'nha-pho';

  const products = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    name: `Sản phẩm ${index + 1}`,
    image: `/branches/hn.jpg`,
    type,
  }));

  return (
    <div>
      <Navbar activeMenu='product'/>
      <BannerProduct
        src={`/banner_product/${type}.jpg`}
        title="SẢN PHẨM XHOME"
        description="Chúng tôi cung cấp đầy đủ các sản phẩm, dịch vụ liên quan đến Thiết kế, Thi công và bán lẻ nội thất. Quy trình làm việc rõ ràng, chuyên nghiệp cùng với chính sách bảo hành & bảo trì sản phẩm độc nhất kéo dài đến 06 năm đi kèm với chế độ kiểm tra định kỳ từ 3 tháng đến 6 tháng/lần để đánh giá chất lượng sản phẩm trong quá trình sử dụng của khách hàng."
      />
      
      <Gallery />

     {/* Sản phẩm liên quan */}
<section className="bg-gray-100 py-10 mt-16">
  <div className="max-w-6xl mx-auto px-4">
    <h3 className="text-center text-xl font-bold uppercase mb-4">
      Sản phẩm liên quan
    </h3>
    <div className="w-24 h-1 bg-red-500 mx-auto mb-6 rounded-full" />

    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      spaceBetween={20}
      slidesPerView={4}
      breakpoints={{
        0: { slidesPerView: 2, navigation: false},
        640: { slidesPerView: 2, navigation: true},
        768: { slidesPerView: 3, navigation: true},
        1024: { slidesPerView: 4,navigation: true},
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <Link href={`/productDetail`}>
            <div className="bg-white rounded shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition">
              <div className="relative w-full h-[160px] md:h-[200px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-sm font-medium p-3">
                {product.name}
              </p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

    </div>
  );
}
