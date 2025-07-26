/* eslint-disable @next/next/no-img-element */
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

const slides = [
  {
    src: '/images/banner1.jpg',
    title: 'Chào mừng đến với công ty chúng tôi',
    buttonText: 'Tìm hiểu thêm',
  },
  {
    src: '/images/banner2.jpg',
    title: 'Dự án nổi bật năm 2025',
    buttonText: 'Xem chi tiết',
  },
  {
    src: '/images/banner3.jpg',
    title: 'Giải pháp tối ưu cho doanh nghiệp',
    buttonText: 'Liên hệ ngay',
  },
  {
    src: '/images/banner4.jpg',
    title: 'Đội ngũ chuyên nghiệp và tận tâm',
    buttonText: 'Gặp gỡ chúng tôi',
  },
]

export default function ImageCarousel() {
  return (
    <div className="w-full max-h-[840px] overflow-hidden relative">
      <Swiper
        effect="fade"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1500}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[840px]">
              {/* Ảnh nền */}
              <img
                src={slide.src}
                alt={`Banner ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay mờ nhẹ để chữ nổi bật hơn */}
              <div className="absolute inset-0 bg-black/50 z-10"></div>

              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">
                  {slide.title}
                </h2>
                <button className="bg-transparent text-white border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition duration-300 animate-fadeInUp delay-300">
                    {slide.buttonText}
                </button>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
