"use client"

import Image from "next/image"
import { Globe, Home, Leaf } from "lucide-react"

export default function AboutUsSection() {
  return (
    <section className="relative bg-gray-900 text-white py-16 px-4 overflow-hidden">
      {/* Nền ảnh */}
      <Image
        src="/images/team.jpg"
        alt="Team"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }} // 👈 Sửa chỗ này
        className="opacity-90"
    />


      {/* Lớp overlay xám tối */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent z-0" />

      {/* Nội dung chính */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase inline-block after:block after:h-1 after:w-24 after:mx-auto after:bg-yellow-400 after:mt-1">Về Chúng Tôi</h2>
        <p className="max-w-3xl mx-auto text-sm md:text-base font-medium italic text-gray-200 mb-4">
          XHOME là <strong>thương hiệu thiết kế, thi công Nội thất & Kiến trúc có quy mô lớn nhất tại Việt Nam</strong> với sự tin tưởng của hàng ngàn khách hàng khắp mọi nơi trên cả nước.
        </p>
        <p className="max-w-4xl mx-auto text-sm md:text-base text-gray-300 mb-12">
          Khởi đầu với một văn phòng nhỏ tại Hà Nội, XHOME đã có một sự phát triển thần tốc trong 10 năm qua với hệ thống Showroom Chi nhánh trải dài khắp cả nước. XHOME sở hữu đội ngũ nhân sự chất lượng với hơn 800 Kiến trúc sư, kỹ sư, cử nhân và các nhà thiết kế.
        </p>

        {/* 3 Box: Tầm nhìn - Lịch sử - Sứ mệnh */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {/* TẦM NHÌN */}
        <div className="bg-white text-gray-800 mt-15 pt-6 pb-0 rounded-lg shadow-md flex flex-col items-center 
             hover:shadow-[0_8px_30px_rgba(107,114,128,0.6)] transform hover:scale-105 transition duration-300">
 
            <Globe size={40} className="text-gray-700 mb-4" />
            <p className="text-sm text-center mx-6 mb-4">
              Không chỉ chiếm lĩnh thị trường trong nước, XHOME không ngừng đổi mới, sáng tạo để kiến tạo các sản phẩm, dịch vụ nội thất đẳng cấp, mục tiêu trở thành doanh nghiệp dẫn đầu thị trường khu vực và quốc tế.
            </p>
            <div className="w-full mt-auto">
              <button className="w-full bg-yellow-400 text-black text-sm font-semibold px-6 p-2 rounded">
                TẦM NHÌN
              </button>
            </div>
          </div>

          {/* LỊCH SỬ */}
          <div className="bg-white text-gray-800 md:mb-15 pt-6 pb-0 rounded-lg shadow-md flex flex-col items-center 
            hover:shadow-[0_8px_30px_rgba(107,114,128,0.6)] transform hover:scale-105 transition duration-300">
            <Home size={40} className="text-gray-700  mb-4" />
            <p className="text-sm text-center mx-6 mb-4">
              Với 10 năm (2014–2023) thành lập và phát triển, đến nay XHOME đã mở rộng quy mô với hệ thống chi nhánh tại 16 Thành phố lớn trải dài khắp 3 miền, 1 văn phòng tại Singapore và sở hữu 6 thương hiệu nội thất.
            </p>
            <div className="w-full mt-auto">
              <button className="w-full bg-yellow-400 text-black text-sm font-semibold px-6 p-2 rounded">
                LỊCH SỬ
              </button>
            </div>
          </div>

          {/* SỨ MỆNH */}
          <div className=" bg-white text-gray-800 md:mt-15 pt-6 pb-0 rounded-lg shadow-md flex flex-col items-center 
            hover:shadow-[0_8px_30px_rgba(107,114,128,0.6)] transform hover:scale-105 transition duration-300">
            <Leaf size={40} className="text-gray-700  mb-4" />
            <p className="text-sm text-center mx-6 mb-4">
              Kiến tạo không gian sống đẳng cấp, đem đến những sản phẩm, dịch vụ nội thất chất lượng nhằm nâng cao đời sống và bảo vệ sức khỏe người sử dụng, hướng tới tương lai vững bền với thương hiệu cao cấp.
            </p>
            <div className="w-full mt-auto">
              <button className="w-full bg-yellow-400 text-black text-sm font-semibold px-6 p-2 rounded">
                SỨ MỆNH
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
