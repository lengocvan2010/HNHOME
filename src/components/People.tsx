'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    img: '/images/people.png',
    text: (
      <>
        Hiện nay XHOME đang là Công ty thiết kế Nội thất & Kiến trúc sở hữu số lượng nhân sự lớn với gần 800 nhân sự trình độ cao,
        trong đó có đến hơn 400 kiến trúc sư. Sản phẩm và dịch vụ của mình XHOME đã tạo ra việc làm cho hàng nghìn lao động
        phổ thông và thúc đẩy sự vươn lên mạnh mẽ của ngành nội thất tại Việt Nam trong những năm vừa qua.
      </>
    ),
  },
  {
    img: '/images/people1.png',
    text: (
      <>
        Đội ngũ nhân viên của XHOME là những người trẻ, nhiệt huyết, giỏi về chuyên môn, tận tình với công việc, luôn đoàn kết
        gắn bó tạo ra sức mạnh làm nền tảng cho sự phát triển vững mạnh của doanh nghiệp.
      </>
    ),
  },
  {
    img: '/images/people2.png',
    text: (
      <>
        Với tinh thần &quot;Làm việc bằng cái tâm của mình - Không chỉ bán sản phẩm, phải bán cho khách hàng NIỀM TIN&quot;,
        đội ngũ nhân viên XHOME cam kết đem tới những sản phẩm cao cấp, chất lượng để kiến tạo cuộc sống đẳng cấp cho khách hàng.
      </>
    ),
  },
];

export default function XhomePeopleSlider() {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-20 bg-white text-gray-800 text-center">
        <h3 className="text-2xl md:text-3xl mb-8 uppercase inline-block relative after:content-[''] after:block after:h-1 after:w-24 after:bg-yellow-400 after:mt-2 after:mx-auto">
            Con người XHOME
        </h3>

      <div className="w-full max-w-6xl mx-auto">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          spaceBetween={30}
          className="mySwiper"
          observer={true}
          observeParents={true}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 text-left">
                {/* Avatar tròn */}
                <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[270px] lg:h-[270px] rounded-full overflow-hidden flex-shrink-0 border border-gray-200 shadow-md">
                  <Image
                    src={slide.img}
                    alt={`Slide ${index + 1}`}
                    width={270}
                    height={270}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Nội dung tránh avatar */}
                <div className="pt-4 md:pt-0 md:pl-6 lg:pl-12 xl:pl-20">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify">
                    {slide.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Dấu chấm tròn tách riêng và căn giữa */}
        <div className="mt-6 flex justify-center">
          <div className="swiper-pagination !static"></div>
        </div>
        </Swiper>

        
      </div>
    </section>
  );
}
