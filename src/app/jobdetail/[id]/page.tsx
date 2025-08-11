'use client';

import { div } from "framer-motion/client";
import Navbar from "@/components/Navbar";
import BannerProduct from "@/components/BannerProduct";
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function JobDetailPage() {
    const [cvFile, setCvFile] = useState<File | null>(null);
    const jobs = [
  { id: 1, title: 'CHỦ TRÌ', location: 'Hà Nội' ,
    description: {
      jobDesc: [
        'Giám sát thi công tại công trình đảm bảo đúng thiết kế, tiến độ và chất lượng',
        'Kiểm tra vật liệu, nhân công và máy móc phục vụ thi công',
        'Lập báo cáo tiến độ thi công gửi cấp quản lý',
        'Phối hợp với các bộ phận để xử lý sự cố phát sinh tại công trình'
      ],
      requirements: [
        'Nam 25-40 tuổi, sức khỏe tốt',
        'Tốt nghiệp chuyên ngành xây dựng hoặc liên quan',
        'Kinh nghiệm tối thiểu 2 năm giám sát công trình',
        'Có kỹ năng quản lý đội nhóm và xử lý tình huống'
      ],
      benefits: [
        'Thu nhập từ 15-25tr/tháng',
        'Hưởng bảo hiểm đầy đủ',
        'Hỗ trợ ăn ở khi công tác xa',
        'Đào tạo nâng cao kỹ năng giám sát'
      ]
    }},
  { id: 2, title: 'GIÁM SÁT THI CÔNG XÂY DỰNG', location: 'Hà Nội' ,
    description: {
      jobDesc: [
        'Giám sát thi công tại công trình đảm bảo đúng thiết kế, tiến độ và chất lượng',
        'Kiểm tra vật liệu, nhân công và máy móc phục vụ thi công',
        'Lập báo cáo tiến độ thi công gửi cấp quản lý',
        'Phối hợp với các bộ phận để xử lý sự cố phát sinh tại công trình'
      ],
      requirements: [
        'Nam 25-40 tuổi, sức khỏe tốt',
        'Tốt nghiệp chuyên ngành xây dựng hoặc liên quan',
        'Kinh nghiệm tối thiểu 2 năm giám sát công trình',
        'Có kỹ năng quản lý đội nhóm và xử lý tình huống'
      ],
      benefits: [
        'Thu nhập từ 15-25tr/tháng',
        'Hưởng bảo hiểm đầy đủ',
        'Hỗ trợ ăn ở khi công tác xa',
        'Đào tạo nâng cao kỹ năng giám sát'
      ]
    }},
  { id: 3, title: 'KIẾN TRÚC SƯ 3D', location: 'Hà Nội' ,
    description: {
      jobDesc: [
        'Giám sát thi công tại công trình đảm bảo đúng thiết kế, tiến độ và chất lượng',
        'Kiểm tra vật liệu, nhân công và máy móc phục vụ thi công',
        'Lập báo cáo tiến độ thi công gửi cấp quản lý',
        'Phối hợp với các bộ phận để xử lý sự cố phát sinh tại công trình'
      ],
      requirements: [
        'Nam 25-40 tuổi, sức khỏe tốt',
        'Tốt nghiệp chuyên ngành xây dựng hoặc liên quan',
        'Kinh nghiệm tối thiểu 2 năm giám sát công trình',
        'Có kỹ năng quản lý đội nhóm và xử lý tình huống'
      ],
      benefits: [
        'Thu nhập từ 15-25tr/tháng',
        'Hưởng bảo hiểm đầy đủ',
        'Hỗ trợ ăn ở khi công tác xa',
        'Đào tạo nâng cao kỹ năng giám sát'
      ]
    }},
  { id: 4, title: 'KIẾN TRÚC SƯ CHỦ TRÌ', location: 'Hà Nội' ,
    description: {
      jobDesc: [
        'Giám sát thi công tại công trình đảm bảo đúng thiết kế, tiến độ và chất lượng',
        'Kiểm tra vật liệu, nhân công và máy móc phục vụ thi công',
        'Lập báo cáo tiến độ thi công gửi cấp quản lý',
        'Phối hợp với các bộ phận để xử lý sự cố phát sinh tại công trình'
      ],
      requirements: [
        'Nam 25-40 tuổi, sức khỏe tốt',
        'Tốt nghiệp chuyên ngành xây dựng hoặc liên quan',
        'Kinh nghiệm tối thiểu 2 năm giám sát công trình',
        'Có kỹ năng quản lý đội nhóm và xử lý tình huống'
      ],
      benefits: [
        'Thu nhập từ 15-25tr/tháng',
        'Hưởng bảo hiểm đầy đủ',
        'Hỗ trợ ăn ở khi công tác xa',
        'Đào tạo nâng cao kỹ năng giám sát'
      ]
    }},
  { id: 5, title: 'NHÂN VIÊN DỰ TOÁN', location: 'Hà Nội' ,
    description: {
      jobDesc: [
        'Giám sát thi công tại công trình đảm bảo đúng thiết kế, tiến độ và chất lượng',
        'Kiểm tra vật liệu, nhân công và máy móc phục vụ thi công',
        'Lập báo cáo tiến độ thi công gửi cấp quản lý',
        'Phối hợp với các bộ phận để xử lý sự cố phát sinh tại công trình'
      ],
      requirements: [
        'Nam 25-40 tuổi, sức khỏe tốt',
        'Tốt nghiệp chuyên ngành xây dựng hoặc liên quan',
        'Kinh nghiệm tối thiểu 2 năm giám sát công trình',
        'Có kỹ năng quản lý đội nhóm và xử lý tình huống'
      ],
      benefits: [
        'Thu nhập từ 15-25tr/tháng',
        'Hưởng bảo hiểm đầy đủ',
        'Hỗ trợ ăn ở khi công tác xa',
        'Đào tạo nâng cao kỹ năng giám sát'
      ]
    }},
  { id: 6, title: 'NHÂN VIÊN KỸ THUẬT', location: 'Hà Nội' ,
    description: {
      jobDesc: [
        'Giám sát thi công tại công trình đảm bảo đúng thiết kế, tiến độ và chất lượng',
        'Kiểm tra vật liệu, nhân công và máy móc phục vụ thi công',
        'Lập báo cáo tiến độ thi công gửi cấp quản lý',
        'Phối hợp với các bộ phận để xử lý sự cố phát sinh tại công trình'
      ],
      requirements: [
        'Nam 25-40 tuổi, sức khỏe tốt',
        'Tốt nghiệp chuyên ngành xây dựng hoặc liên quan',
        'Kinh nghiệm tối thiểu 2 năm giám sát công trình',
        'Có kỹ năng quản lý đội nhóm và xử lý tình huống'
      ],
      benefits: [
        'Thu nhập từ 15-25tr/tháng',
        'Hưởng bảo hiểm đầy đủ',
        'Hỗ trợ ăn ở khi công tác xa',
        'Đào tạo nâng cao kỹ năng giám sát'
      ]
    }},
  { id: 7, title: 'NHÂN VIÊN KỸ THUẬT CNC [ECO FACTORY SG]', location: 'Sài Gòn' ,
    description: {
      jobDesc: [
        'Giám sát thi công tại công trình đảm bảo đúng thiết kế, tiến độ và chất lượng',
        'Kiểm tra vật liệu, nhân công và máy móc phục vụ thi công',
        'Lập báo cáo tiến độ thi công gửi cấp quản lý',
        'Phối hợp với các bộ phận để xử lý sự cố phát sinh tại công trình'
      ],
      requirements: [
        'Nam 25-40 tuổi, sức khỏe tốt',
        'Tốt nghiệp chuyên ngành xây dựng hoặc liên quan',
        'Kinh nghiệm tối thiểu 2 năm giám sát công trình',
        'Có kỹ năng quản lý đội nhóm và xử lý tình huống'
      ],
      benefits: [
        'Thu nhập từ 15-25tr/tháng',
        'Hưởng bảo hiểm đầy đủ',
        'Hỗ trợ ăn ở khi công tác xa',
        'Đào tạo nâng cao kỹ năng giám sát'
      ]
    }},
  { id: 8, title: 'NHÂN VIÊN PHÁT TRIỂN KINH DOANH', location: 'Hà Nội' ,
    description: {
      jobDesc: [
        'Giám sát thi công tại công trình đảm bảo đúng thiết kế, tiến độ và chất lượng',
        'Kiểm tra vật liệu, nhân công và máy móc phục vụ thi công',
        'Lập báo cáo tiến độ thi công gửi cấp quản lý',
        'Phối hợp với các bộ phận để xử lý sự cố phát sinh tại công trình'
      ],
      requirements: [
        'Nam 25-40 tuổi, sức khỏe tốt',
        'Tốt nghiệp chuyên ngành xây dựng hoặc liên quan',
        'Kinh nghiệm tối thiểu 2 năm giám sát công trình',
        'Có kỹ năng quản lý đội nhóm và xử lý tình huống'
      ],
      benefits: [
        'Thu nhập từ 15-25tr/tháng',
        'Hưởng bảo hiểm đầy đủ',
        'Hỗ trợ ăn ở khi công tác xa',
        'Đào tạo nâng cao kỹ năng giám sát'
      ]
    }},
  { id: 9, title: 'NHÂN VIÊN TRIỂN KHAI KỸ THUẬT CAD', location: 'Hà Nội' ,
    description: {
      jobDesc: [
        'Giám sát thi công tại công trình đảm bảo đúng thiết kế, tiến độ và chất lượng',
        'Kiểm tra vật liệu, nhân công và máy móc phục vụ thi công',
        'Lập báo cáo tiến độ thi công gửi cấp quản lý',
        'Phối hợp với các bộ phận để xử lý sự cố phát sinh tại công trình'
      ],
      requirements: [
        'Nam 25-40 tuổi, sức khỏe tốt',
        'Tốt nghiệp chuyên ngành xây dựng hoặc liên quan',
        'Kinh nghiệm tối thiểu 2 năm giám sát công trình',
        'Có kỹ năng quản lý đội nhóm và xử lý tình huống'
      ],
      benefits: [
        'Thu nhập từ 15-25tr/tháng',
        'Hưởng bảo hiểm đầy đủ',
        'Hỗ trợ ăn ở khi công tác xa',
        'Đào tạo nâng cao kỹ năng giám sát'
      ]
    }},
  { id: 10, title: 'PHÓ PHÒNG THI CÔNG', location: 'Hà Nội' ,
    description: {
      jobDesc: [
        'Giám sát thi công tại công trình đảm bảo đúng thiết kế, tiến độ và chất lượng',
        'Kiểm tra vật liệu, nhân công và máy móc phục vụ thi công',
        'Lập báo cáo tiến độ thi công gửi cấp quản lý',
        'Phối hợp với các bộ phận để xử lý sự cố phát sinh tại công trình'
      ],
      requirements: [
        'Nam 25-40 tuổi, sức khỏe tốt',
        'Tốt nghiệp chuyên ngành xây dựng hoặc liên quan',
        'Kinh nghiệm tối thiểu 2 năm giám sát công trình',
        'Có kỹ năng quản lý đội nhóm và xử lý tình huống'
      ],
      benefits: [
        'Thu nhập từ 15-25tr/tháng',
        'Hưởng bảo hiểm đầy đủ',
        'Hỗ trợ ăn ở khi công tác xa',
        'Đào tạo nâng cao kỹ năng giám sát'
      ]
    }},
  { id: 11, title: 'KIẾN TRÚC SƯ NỘI THẤT', location: 'Hà Nội' ,
    description: {
      jobDesc: [
        'Giám sát thi công tại công trình đảm bảo đúng thiết kế, tiến độ và chất lượng',
        'Kiểm tra vật liệu, nhân công và máy móc phục vụ thi công',
        'Lập báo cáo tiến độ thi công gửi cấp quản lý',
        'Phối hợp với các bộ phận để xử lý sự cố phát sinh tại công trình'
      ],
      requirements: [
        'Nam 25-40 tuổi, sức khỏe tốt',
        'Tốt nghiệp chuyên ngành xây dựng hoặc liên quan',
        'Kinh nghiệm tối thiểu 2 năm giám sát công trình',
        'Có kỹ năng quản lý đội nhóm và xử lý tình huống'
      ],
      benefits: [
        'Thu nhập từ 15-25tr/tháng',
        'Hưởng bảo hiểm đầy đủ',
        'Hỗ trợ ăn ở khi công tác xa',
        'Đào tạo nâng cao kỹ năng giám sát'
      ]
    }},
  { id: 12, title: 'KẾ TOÁN TRƯỞNG', location: 'Sài Gòn' ,
    description: {
      jobDesc: [
        'Giám sát thi công tại công trình đảm bảo đúng thiết kế, tiến độ và chất lượng',
        'Kiểm tra vật liệu, nhân công và máy móc phục vụ thi công',
        'Lập báo cáo tiến độ thi công gửi cấp quản lý',
        'Phối hợp với các bộ phận để xử lý sự cố phát sinh tại công trình'
      ],
      requirements: [
        'Nam 25-40 tuổi, sức khỏe tốt',
        'Tốt nghiệp chuyên ngành xây dựng hoặc liên quan',
        'Kinh nghiệm tối thiểu 2 năm giám sát công trình',
        'Có kỹ năng quản lý đội nhóm và xử lý tình huống'
      ],
      benefits: [
        'Thu nhập từ 15-25tr/tháng',
        'Hưởng bảo hiểm đầy đủ',
        'Hỗ trợ ăn ở khi công tác xa',
        'Đào tạo nâng cao kỹ năng giám sát'
      ]
    }},
  { id: 13, title: 'CHUYÊN VIÊN MARKETING', location: 'Hà Nội' ,
    description: {
      jobDesc: [
        'Giám sát thi công tại công trình đảm bảo đúng thiết kế, tiến độ và chất lượng',
        'Kiểm tra vật liệu, nhân công và máy móc phục vụ thi công',
        'Lập báo cáo tiến độ thi công gửi cấp quản lý',
        'Phối hợp với các bộ phận để xử lý sự cố phát sinh tại công trình'
      ],
      requirements: [
        'Nam 25-40 tuổi, sức khỏe tốt',
        'Tốt nghiệp chuyên ngành xây dựng hoặc liên quan',
        'Kinh nghiệm tối thiểu 2 năm giám sát công trình',
        'Có kỹ năng quản lý đội nhóm và xử lý tình huống'
      ],
      benefits: [
        'Thu nhập từ 15-25tr/tháng',
        'Hưởng bảo hiểm đầy đủ',
        'Hỗ trợ ăn ở khi công tác xa',
        'Đào tạo nâng cao kỹ năng giám sát'
      ]
    }},
  { id: 14, title: 'NHÂN VIÊN SALE NỘI THẤT', location: 'Sài Gòn' ,
    description: {
      jobDesc: [
        'Giám sát thi công tại công trình đảm bảo đúng thiết kế, tiến độ và chất lượng',
        'Kiểm tra vật liệu, nhân công và máy móc phục vụ thi công',
        'Lập báo cáo tiến độ thi công gửi cấp quản lý',
        'Phối hợp với các bộ phận để xử lý sự cố phát sinh tại công trình'
      ],
      requirements: [
        'Nam 25-40 tuổi, sức khỏe tốt',
        'Tốt nghiệp chuyên ngành xây dựng hoặc liên quan',
        'Kinh nghiệm tối thiểu 2 năm giám sát công trình',
        'Có kỹ năng quản lý đội nhóm và xử lý tình huống'
      ],
      benefits: [
        'Thu nhập từ 15-25tr/tháng',
        'Hưởng bảo hiểm đầy đủ',
        'Hỗ trợ ăn ở khi công tác xa',
        'Đào tạo nâng cao kỹ năng giám sát'
      ]
    }},
  { id: 15, title: 'NHÂN VIÊN HÀNH CHÍNH', location: 'Hà Nội' ,
    description: {
      jobDesc: [
        'Giám sát thi công tại công trình đảm bảo đúng thiết kế, tiến độ và chất lượng',
        'Kiểm tra vật liệu, nhân công và máy móc phục vụ thi công',
        'Lập báo cáo tiến độ thi công gửi cấp quản lý',
        'Phối hợp với các bộ phận để xử lý sự cố phát sinh tại công trình'
      ],
      requirements: [
        'Nam 25-40 tuổi, sức khỏe tốt',
        'Tốt nghiệp chuyên ngành xây dựng hoặc liên quan',
        'Kinh nghiệm tối thiểu 2 năm giám sát công trình',
        'Có kỹ năng quản lý đội nhóm và xử lý tình huống'
      ],
      benefits: [
        'Thu nhập từ 15-25tr/tháng',
        'Hưởng bảo hiểm đầy đủ',
        'Hỗ trợ ăn ở khi công tác xa',
        'Đào tạo nâng cao kỹ năng giám sát'
      ]
    }},
];
  const params = useParams();
  const id = Number(params.id);

  const job = jobs.find(j => j.id === id);

  if (!job) {
    return <div className="text-center py-10">Không tìm thấy công việc.</div>;
  }
 

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };
  return (
    <div>
      <Navbar activeMenu="recruitment" />
      <BannerProduct
        src={`/banner_product/job.jpg`}
        title="TUYỂN DỤNG"
        description="HOME là thương hiệu lớn nhất tại Việt Nam..."
      />

      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-center text-2xl font-bold mb-8">
          TUYỂN DỤNG VỊ TRÍ {job.title}
        </h1>

        {/* Mô tả công việc */}
        <section className="mb-8">
          <h2 className="font-bold mb-2">Mô tả công việc:</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {job.description.jobDesc.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Yêu cầu */}
        <section className="mb-8">
          <h2 className="font-bold mb-2">Yêu cầu:</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {job.description.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Quyền lợi */}
        <section>
          <h2 className="font-bold mb-2">Quyền lợi:</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {job.description.benefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
      <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 shadow rounded">
        <h2 className="text-center text-2xl font-bold mb-6 uppercase">
          ỨNG TUYỂN NGAY TẠI ĐÂY
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Họ tên (*)"
            required
            className="w-full border rounded px-4 py-2 focus:ring focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email (*)"
            required
            className="w-full border rounded px-4 py-2 focus:ring focus:border-blue-500"
          />
          <input
            type="tel"
            placeholder="Số điện thoại (*)"
            required
            className="w-full border rounded px-4 py-2 focus:ring focus:border-blue-500"
          />
          <textarea
            placeholder="Mô tả bản thân/ vị trí quan tâm\nĐính kèm link portfolio (nếu có)"
            rows={4}
            className="w-full border rounded px-4 py-2 focus:ring focus:border-blue-500"
          ></textarea>

          <div className="bg-red-50 border border-red-200 rounded p-4">
            <label className="block font-semibold mb-2">
              Đính kèm CV (*)
            </label>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <input
                type="file"
                accept=".doc,.docx,.pdf,.xls,.xlsx,.jpg,.png"
                onChange={handleFileChange}
                className="flex-1"
              />
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Upload CV
              </button>
            </div>
            {cvFile && (
              <p className="mt-2 text-sm text-gray-600">{cvFile.name}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              (Chúng tôi chấp nhận file .doc, .docx, .pdf, .xls, .xlsx, .jpg, .png dưới 2MB)
            </p>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 transition"
            >
              ỨNG TUYỂN
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}