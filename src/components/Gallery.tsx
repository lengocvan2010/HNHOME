"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const images = [
  "/productDetail/banner1.jpg",
  "/productDetail/banner2.jpg",
  "/productDetail/banner3.jpg",
  "/productDetail/banner4.jpg",
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Trigger reflow when lightbox opens
  useEffect(() => {
    if (lightboxOpen) {
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 100);
    }
  }, [lightboxOpen]);

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <h2 className="text-black-600 text-xl font-semibold mb-4 border-b-2 border-yellow-500">
        LIỀN KỀ VINH HERITAGE
      </h2>

      {/* Banner trình chiếu với hiệu ứng từ dưới lên */}
      <div className="w-full max-w-5xl h-[300px] md:h-[500px] rounded-md overflow-hidden">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 2500 }}
          navigation
          loop
          direction="vertical" // 👈 THÊM DÒNG NÀY
          className="h-[300px] md:h-[500px]"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[300px] md:h-[500px] animate-slide-up">
                <Image
                  src={img}
                  alt={`Ảnh ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail trượt ngang, hiển thị 3 ảnh */}
      <div className="w-full max-w-xl mt-6">
       <Swiper
  modules={[Autoplay, Navigation]}
  navigation
  autoplay={{ delay: 4000 }}
  slidesPerView={3}
  loop={true}
  spaceBetween={12}
>
  {images.map((img, index) => (
    <SwiperSlide key={index}>
      <div
        className="relative w-full h-30 md:h-36 cursor-pointer border border-gray-300 rounded overflow-hidden hover:scale-105 transition"
        onClick={() => {
          setLightboxIndex(index);
          setTimeout(() => setLightboxOpen(true), 100);
        }}
      >
        <Image
          src={img}
          alt={`Thumb ${index + 1}`}
          fill
          className="object-cover"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>

      {/* Lightbox khi click vào thumbnail */}
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
    </div>
  );
}
