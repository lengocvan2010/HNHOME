'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface GallerySystemProps {
  id: number;
}

const imageMap: Record<number, string[]> = {
  1: [
    '/productDetail/banner1.jpg',
    '/productDetail/banner2.jpg',
    '/productDetail/banner3.jpg',
    '/productDetail/banner4.jpg',
    '/productDetail/banner2.jpg',
    '/productDetail/banner3.jpg',
    '/productDetail/banner4.jpg',
  ],
  2: [
    '/branches/hn.jpg',
    '/branches/hcm.jpg',
    '/branches/vinh.jpg',
    '/productDetail/banner4.jpg',
    '/productDetail/banner2.jpg',
    '/productDetail/banner3.jpg',
    '/productDetail/banner4.jpg',
  ],
  3: [
    '/branches/hn.jpg',
    '/branches/hcm.jpg',
    '/branches/vinh.jpg',
    '/productDetail/banner2.jpg',
    '/productDetail/banner2.jpg',
    '/productDetail/banner3.jpg',
    '/productDetail/banner4.jpg',
  ],
};

const branchMap: Record<number, string> = {
  1: 'HÀ NỘI',
  2: 'VINH',
  3: 'HỒ CHÍ MINH',
};

export default function GallerySystem({ id }: GallerySystemProps) {
  const images = imageMap[id] ?? [];
  const branch = branchMap[id] || 'Không xác định';

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (lightboxOpen) {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 100);
    }
  }, [lightboxOpen]);

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <h2 className="text-black-600 text-xl font-semibold mb-4 border-b-2 border-yellow-500">
        CHI NHÁNH {branch}
      </h2>

      {images.length === 0 ? (
        <p className="text-gray-500">Chưa có ảnh cho hệ thống này.</p>
      ) : (
        <>
          {/* Ảnh chính */}
          {/* <div className="w-full max-w-5xl h-[500px] rounded-md overflow-hidden"> */}
          <div className="w-full max-w-5xl flex md:flex-row flex-col-reverse  gap-6 rounded-md ">
            {/* Swiper chiếm 60% */}
            <div className="md:w-[60%] h-[400px] rounded-md overflow-hidden">
                <Swiper
                modules={[Autoplay, Navigation]}
                autoplay={{ delay: 2500 }}
                navigation
                loop
                direction="vertical"
                className="h-[400px]"
                >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                    <div className="relative w-full h-[400px] animate-slide-up">
                        <Image
                        src={img}
                        alt={`Ảnh ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                        />
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>

            {/* Thông tin chi nhánh chiếm 40% */}
            <div className="md:w-[40%] h-[400px] overflow-y-auto text-gray-800">
                <h3 className="text-lg font-bold mb-2">XHOME VIỆT NAM</h3>
                <p className="mb-4">
                <strong>XHOME Việt Nam</strong> là trụ sở chính của XHOME – nơi đặt những viên gạch đầu tiên cho sự phát triển thần kỳ...
                </p>
                <p className="mb-4">
                <strong>XHOME Việt Nam</strong> quản lý toàn bộ hệ thống XHOME với 12 Công ty con thành viên, 24 Showroom chi nhánh...
                </p>
                <p className="mb-4">
                <strong>XHOME Việt Nam</strong> có diện tích trên 2000 m² sàn với gần 400 Kiến trúc sư, Kỹ sư...
                </p>
                <p className="mb-1">
                <strong>Địa chỉ:</strong> Lancaster Building – 20 Núi Trúc – Giảng Võ – Ba Đình – Hà Nội
                </p>
                <p className="mb-1">
                <strong>SĐT:</strong> 024 6671 8333
                </p>
                <p>
                <strong>Hotline:</strong> 1900 636 558
                </p>
            </div>
        </div>

          {/* Thumbnails */}
          <div className="w-full max-w-5xl mt-10 ">
            <Swiper
                modules={[Autoplay, Navigation]}
                navigation
                autoplay={{ delay: 4000 }}
                loop
                spaceBetween={12}
                className="custom-thumbnail-swiper"
                breakpoints={{
                    0: {
                    slidesPerView: 3, // mobile
                    },
                    768: {
                    slidesPerView: 5, // tablet trở lên
                    },
                }}
                >

              {images.map((img, index) => (
                <SwiperSlide key={index} className="!flex justify-center " >
                  <div
                      className="relative md:w-40 md:h-40 w-28 h-28 cursor-pointer border border-gray-300 rounded-full overflow-hidden hover:scale-105 transition"                    onClick={() => {
                      setLightboxIndex(index);
                      setTimeout(() => setLightboxOpen(true), 100);
                    }}
                  >
                    <Image
                      src={img}
                      alt={`Thumb ${index + 1}`}
                      fill
                      className="object-cover "
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Lightbox */}
          {lightboxOpen && (
            <Lightbox
              mainSrc={window.location.origin + images[lightboxIndex]}
              nextSrc={
                window.location.origin +
                images[(lightboxIndex + 1) % images.length]
              }
              prevSrc={
                window.location.origin +
                images[(lightboxIndex + images.length - 1) % images.length]
              }
              onCloseRequest={() => setLightboxOpen(false)}
              onMovePrevRequest={() =>
                setLightboxIndex(
                  (lightboxIndex + images.length - 1) % images.length
                )
              }
              onMoveNextRequest={() =>
                setLightboxIndex((lightboxIndex + 1) % images.length)
              }
            />
          )}
        </>
      )}
    </div>
    
  );
}
