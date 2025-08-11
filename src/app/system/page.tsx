'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import BannerProduct from '@/components/BannerProduct';
import GallerySystem from '@/components/GallerySystem';

export default function SystemPage() {
  const [activeTab, setActiveTab] = useState<number>(1); // tab mặc định là 1

  const type = 'nha-pho';

  const tabLabels: Record<number, string> = {
    1: 'Khu vực Miền Bắc',
    2: 'Khu vực Miền Trung',
    3: 'Khu vực Miền Nam',
  };

  return (
    <div>
      <Navbar activeMenu='system'/>
      <BannerProduct
        src={`/banner_product/system.jpg`}
        title="HỆ THỐNG CỦA XHOME"
        description="Chúng tôi cung cấp đầy đủ các sản phẩm, dịch vụ liên quan đến Thiết kế, Thi công và bán lẻ nội thất. Quy trình làm việc rõ ràng, chuyên nghiệp cùng với chính sách bảo hành & bảo trì sản phẩm độc nhất kéo dài đến 06 năm đi kèm với chế độ kiểm tra định kỳ từ 3 tháng đến 6 tháng/lần để đánh giá chất lượng sản phẩm trong quá trình sử dụng của khách hàng."
      />

      {/* Thông tin hệ thống chi nhánh */}
      <div className="text-center max-w-4xl mx-auto mt-12 px-4">
        <h2 className="text-xl font-semibold text-yellow-600 tracking-wide mb-2">
          HỆ THỐNG CHI NHÁNH
        </h2>
        <div className="w-12 h-0.5 bg-yellow-600 mx-auto mb-4"></div>
        <p className="text-gray-700">
          Sự phát triển vượt trội của XHOME được minh chứng rõ ràng bằng việc mở rộng quy mô Chi nhánh & Showroom tại 24 tỉnh thành phố, trải dài trên khắp 3 miền Bắc, Trung, Nam và 1 Văn phòng đại diện tại Singapore chỉ trong 10 năm.
        </p>
        <p className="mt-2 text-gray-700">
          Không dừng lại ở đó, XHOME đặt mục tiêu có mặt tại trên 50 Tỉnh thành phố và mở rộng phạm vi khai thác thị trường ra khu vực Đông Nam Á đến hết năm 2026
        </p>
      </div>

      {/* Tabs lựa chọn khu vực */}
      <div className="flex justify-center gap-4 mt-10">
        {Object.entries(tabLabels).map(([id, label]) => (
          <button
            key={id}
            onClick={() => setActiveTab(Number(id))}
            className={`px-6 py-2 rounded-full border transition ${
              activeTab === Number(id)
                ? 'bg-yellow-500 text-white border-yellow-500'
                : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Gallery tương ứng */}
      <GallerySystem id={activeTab} />
    </div>
  );
}
