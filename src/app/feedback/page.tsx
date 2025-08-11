'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import BannerProduct from '@/components/BannerProduct';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next/link";

export default function FeedbackPage() {
    const feedbacks = [
    {
      name: 'MRS HƯƠNG',
      position: 'CEO Nha khoa Hoàng Hường',
      image: '/feedback/mrs_huong.jpg',
      content: `Anh chị cảm ơn đội ngũ XHOME, Anh chị vô cùng hài lòng với bản thiết kế.
Cảm ơn Bầu và đội ngũ Kiến trúc sư đã ngày đêm cùng đồng góp tâm sức cho công trình này.
Mọi chi tiết từ thẩm mỹ đến công năng đều đúng theo mong muốn và kỳ vọng.Anh chị cảm ơn đội ngũ XHOME, Anh chị vô cùng hài lòng với bản thiết kế.
Cảm ơn Bầu và đội ngũ Kiến trúc sư đã ngày đêm cùng đồng góp tâm sức cho công trình này.
Mọi chi tiết từ thẩm mỹ đến công năng đều đúng theo mong muốn và kỳ vọng.Anh chị cảm ơn đội ngũ XHOME, Anh chị vô cùng hài lòng với bản thiết kế.
Cảm ơn Bầu và đội ngũ Kiến trúc sư đã ngày đêm cùng đồng góp tâm sức cho công trình này.
Mọi chi tiết từ thẩm mỹ đến công năng đều đúng theo mong muốn và kỳ vọng.Anh chị cảm ơn đội ngũ XHOME, Anh chị vô cùng hài lòng với bản thiết kế.`,
    },
    {
      name: 'MR MINH',
      position: 'Giám đốc Công ty ABC',
      image: '/feedback/mr_minh.jpg',
      content: `Thiết kế tinh tế, chất lượng thi công tốt. XHOME là lựa chọn hàng đầu của chúng tôi.Anh chị cảm ơn đội ngũ XHOME, Anh chị vô cùng hài lòng với bản thiết kế.
Cảm ơn Bầu và đội ngũ Kiến trúc sư đã ngày đêm cùng đồng góp tâm sức cho công trình này.
Mọi chi tiết từ thẩm mỹ đến công năng đều đúng theo mong muốn và kỳ vọng.Anh chị cảm ơn đội ngũ XHOME, Anh chị vô cùng hài lòng với bản thiết kế.
Cảm ơn Bầu và đội ngũ Kiến trúc sư đã ngày đêm cùng đồng góp tâm sức cho công trình này.
Mọi chi tiết từ thẩm mỹ đến công năng đều đúng theo mong muốn và kỳ vọng.Anh chị cảm ơn đội ngũ XHOME, Anh chị vô cùng hài lòng với bản thiết kế.
Cảm ơn Bầu và đội ngũ Kiến trúc sư đã ngày đêm cùng đồng góp tâm sức cho công trình này.
Mọi chi tiết từ thẩm mỹ đến công năng đều đúng theo mong muốn và kỳ vọng.`,
    },
    {
      name: 'MR DAT',
      position: 'Giám đốc Công ty DDDDĐ',
      image: '/feedback/mr_dat.jpg',
      content: `Thiết kế tinh tế, chất lượng thi công tốt. XHOME là lựa chọn hàng đầu của chúng tôi.Anh chị cảm ơn đội ngũ XHOME, Anh chị vô cùng hài lòng với bản thiết kế.
Cảm ơn Bầu và đội ngũ Kiến trúc sư đã ngày đêm cùng đồng góp tâm sức cho công trình này.
Mọi chi tiết từ thẩm mỹ đến công năng đều đúng theo mong muốn và kỳ vọng.Anh chị cảm ơn đội ngũ XHOME, Anh chị vô cùng hài lòng với bản thiết kế.
Cảm ơn Bầu và đội ngũ Kiến trúc sư đã ngày đêm cùng đồng góp tâm sức cho công trình này.
Mọi chi tiết từ thẩm mỹ đến công năng đều đúng theo mong muốn và kỳ vọng.Anh chị cảm ơn đội ngũ XHOME, Anh chị vô cùng hài lòng với bản thiết kế.
Cảm ơn Bầu và đội ngũ Kiến trúc sư đã ngày đêm cùng đồng góp tâm sức cho công trình này.
Mọi chi tiết từ thẩm mỹ đến công năng đều đúng theo mong muốn và kỳ vọng.`,
    },
    {
      name: 'MR VUONG',
      position: 'Giám đốc Công ty Vin',
      image: '/feedback/mr_vuong.jpg',
      content: `Thiết kế tinh tế, chất lượng thi công tốt. XHOME là lựa chọn hàng đầu của chúng tôi.Anh chị cảm ơn đội ngũ XHOME, Anh chị vô cùng hài lòng với bản thiết kế.
Cảm ơn Bầu và đội ngũ Kiến trúc sư đã ngày đêm cùng đồng góp tâm sức cho công trình này.
Mọi chi tiết từ thẩm mỹ đến công năng đều đúng theo mong muốn và kỳ vọng.Anh chị cảm ơn đội ngũ XHOME, Anh chị vô cùng hài lòng với bản thiết kế.
Cảm ơn Bầu và đội ngũ Kiến trúc sư đã ngày đêm cùng đồng góp tâm sức cho công trình này.
Mọi chi tiết từ thẩm mỹ đến công năng đều đúng theo mong muốn và kỳ vọng.Anh chị cảm ơn đội ngũ XHOME, Anh chị vô cùng hài lòng với bản thiết kế.
Cảm ơn Bầu và đội ngũ Kiến trúc sư đã ngày đêm cùng đồng góp tâm sức cho công trình này.
Mọi chi tiết từ thẩm mỹ đến công năng đều đúng theo mong muốn và kỳ vọng.`,
    },
  ];

  const projects = [
    { title: "LONG BIÊN HOUSE", img: "/images/banner1.jpg" },
    { title: "MY LINH VILLA", img: "/images/banner2.jpg" },
    { title: "MIPEC PENTHOUSE", img: "/images/banner3.jpg" },
    { title: "ECO PARK VILLA", img: "/images/banner4.jpg" },
    { title: "HA DONG VILLA", img: "/images/banner1.jpg" },
    { title: "TUYEN QUANG VILLA", img: "/images/banner2.jpg" },
    { title: "AV VILLA", img: "/images/banner3.jpg" },
    { title: "BINH TAN VILLA", img: "/images/banner4.jpg" },
    { title: "ECO PARK DUPLEX", img: "/images/banner1.jpg" },
        { title: "LONG BIÊN HOUSE", img: "/images/banner1.jpg" },
    { title: "MY LINH VILLA", img: "/images/banner2.jpg" },
    { title: "MIPEC PENTHOUSE", img: "/images/banner3.jpg" },
    { title: "ECO PARK VILLA", img: "/images/banner4.jpg" },
    { title: "HA DONG VILLA", img: "/images/banner1.jpg" },
    { title: "TUYEN QUANG VILLA", img: "/images/banner2.jpg" },
    { title: "AV VILLA", img: "/images/banner3.jpg" },
    { title: "BINH TAN VILLA", img: "/images/banner4.jpg" },
    { title: "ECO PARK DUPLEX", img: "/images/banner1.jpg" },
    { title: "LONG BIÊN HOUSE", img: "/images/banner1.jpg" },
    { title: "MY LINH VILLA", img: "/images/banner2.jpg" },
    { title: "MIPEC PENTHOUSE", img: "/images/banner3.jpg" },
    { title: "ECO PARK VILLA", img: "/images/banner4.jpg" },
    { title: "HA DONG VILLA", img: "/images/banner1.jpg" },
    { title: "TUYEN QUANG VILLA", img: "/images/banner2.jpg" },
    { title: "AV VILLA", img: "/images/banner3.jpg" },
    { title: "BINH TAN VILLA", img: "/images/banner4.jpg" },
    { title: "ECO PARK DUPLEX", img: "/images/banner1.jpg" },
    // thêm nếu cần
  ];

  return (
    <div>
      <Navbar activeMenu="feedback" />
      <BannerProduct
        src={`/banner_product/feedback.jpg`}
        title="PHẢN HỒI CỦA KHÁCH HÀNG"
        description="Chúng tôi tự hào và vui mừng với những phản hồi tích cực..."
      />

      {/* Section Feedback */}
      <div className="max-w-5xl mx-auto pt-4 px-4">
        <h2 className="text-center text-yellow-600 text-lg font-semibold mb-4 after:block after:h-1 after:w-16 after:bg-yellow-400 after:mx-auto after:mt-1">
          PHẢN HỒI TỪ KHÁCH HÀNG CỦA CHÚNG TÔI
        </h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          breakpoints={{
            0: { navigation: false },  
            640: { navigation: true },   
          }}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {feedbacks.map((fb, index) => (
            <SwiperSlide key={index}>
              <div className="flex md:flex-row flex-col items-center justify-center min-h-[400px] max-w-5xl mx-auto">
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <Image
                    src={fb.image}
                    alt={fb.name}
                    width={200}
                    height={200}
                    className="w-[200px] h-[200px] rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div className="text-center md:text-left max-w-xl">
                  <h3 className="font-bold">{fb.name}</h3>
                  <p className="text-sm text-gray-500">{fb.position}</p>
                  <p className="mt-4 text-gray-700 italic md:max-h-[350px] overflow-y-auto">
                    &quot;{fb.content}&quot;
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    {/* Section Projects */}
    <div className='w-full bg-gray-100'>
        <div className="max-w-5xl mx-auto py-12 px-4">
            <h2 className="py-4 text-center text-yellow-600 font-semibold mb-6 after:block after:h-1 after:w-16 after:bg-yellow-400 after:mx-auto after:mt-1">
                MỘT SỐ CÔNG TRÌNH TIÊU BIỂU CHÚNG TÔI ĐÃ HOÀN THIỆN BÀN GIAO
            </h2>

            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                className="pb-40"
                style={{ paddingBottom: "3rem" }}
            >
                {Array.from({ length: Math.ceil(projects.length / 9) }, (_, pageIndex) => {
                const pageProjects = projects.slice(pageIndex * 9, pageIndex * 9 + 9);
                return (
                    <SwiperSlide key={pageIndex}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        {pageProjects.map((proj, i) => (
                        <Link 
                            key={i} 
                            href={`/productDetail`} // đổi link tùy theo cấu trúc của bạn
                            className="block text-center group"
                        >
                            <Image
                            src={proj.img}
                            alt={proj.title}
                            width={350}
                            height={200}
                            className="w-full md:w-9/10  aspect-[5/3] object-cover mx-auto rounded-4xl group-hover:rounded-none transition-all duration-300"
                            />
                            <p className="mt-2 text-sm font-medium">{proj.title}</p>
                        </Link>
                        ))}
                    </div>
                    </SwiperSlide>
                );
                })}
            </Swiper>
            </div>
    </div>

    </div>
  );
}
