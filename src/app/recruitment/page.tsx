'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import BannerProduct from '@/components/BannerProduct';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import Link from 'next/link';

export default function RecruitmentPage() {
  const jobs = [
  { id: 1, title: 'CHỦ TRÌ', location: 'Hà Nội' },
  { id: 2, title: 'GIÁM SÁT THI CÔNG XÂY DỰNG', location: 'Hà Nội' },
  { id: 3, title: 'KIẾN TRÚC SƯ 3D', location: 'Hà Nội' },
  { id: 4, title: 'KIẾN TRÚC SƯ CHỦ TRÌ', location: 'Hà Nội' },
  { id: 5, title: 'NHÂN VIÊN DỰ TOÁN', location: 'Hà Nội' },
  { id: 6, title: 'NHÂN VIÊN KỸ THUẬT', location: 'Hà Nội' },
  { id: 7, title: 'NHÂN VIÊN KỸ THUẬT CNC [ECO FACTORY SG]', location: 'Sài Gòn' },
  { id: 8, title: 'NHÂN VIÊN PHÁT TRIỂN KINH DOANH', location: 'Hà Nội' },
  { id: 9, title: 'NHÂN VIÊN TRIỂN KHAI KỸ THUẬT CAD', location: 'Hà Nội' },
  { id: 10, title: 'PHÓ PHÒNG THI CÔNG', location: 'Hà Nội' },
  { id: 11, title: 'KIẾN TRÚC SƯ NỘI THẤT', location: 'Hà Nội' },
  { id: 12, title: 'KẾ TOÁN TRƯỞNG', location: 'Sài Gòn' },
  { id: 13, title: 'CHUYÊN VIÊN MARKETING', location: 'Hà Nội' },
  { id: 14, title: 'NHÂN VIÊN SALE NỘI THẤT', location: 'Sài Gòn' },
  { id: 15, title: 'NHÂN VIÊN HÀNH CHÍNH', location: 'Hà Nội' },
];

  const [search, setSearch] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [fade, setFade] = useState(false);

  const jobsPerPage = 10;

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (filterLocation === '' || job.location === filterLocation)
    );
  });

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);

  // Hiệu ứng fade khi đổi trang
  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => setFade(false), 300);
    return () => clearTimeout(timeout);
  }, [currentPage, search, filterLocation]);
const whyChooseUs = [
    {
      num: "01",
      title: "MÔI TRƯỜNG LÀM VIỆC LÝ TƯỞNG",
      desc: "Trải nghiệm không gian văn phòng hiện đại, sáng tạo và chuyên nghiệp",
      img: "/images/why1.jpg"
    },
    {
      num: "02",
      title: "ĐỘI NGŨ NHÂN SỰ LỚN VÀ TÀI NĂNG",
      desc: "XHOME đã trải qua sự tăng trưởng mạnh chóng với mạng lưới các Chi nhánh Showroom trên toàn quốc...",
      img: "/images/why2.jpg"
    },
    {
      num: "03",
      title: "HỌC TẬP VÀ PHÁT TRIỂN",
      desc: "Tiếp cận các cơ hội học tập và phát triển bản thân từ đội ngũ lãnh đạo xuất sắc của chúng tôi",
      img: "/images/why3.jpg"
    },
    {
      num: "04",
      title: "VĂN HÓA CÔNG TY",
      desc: "Tham gia các hoạt động xây dựng đội nhóm và gắn kết với một tập thể đoàn kết và nhiệt huyết",
      img: "/images/why4.jpg"
    }
  ];
  return (
    <div>
      <Navbar activeMenu="recruitment" />
      <BannerProduct
        src={`/banner_product/job.jpg`}
        title="TUYỂN DỤNG"
        description="HOME là thương hiệu lớn nhất tại Việt Nam..."
      />

      {/* Hãy là thành viên */}
      <section className="py-3 md:py-12 bg-white text-center mx-2 md:mx-auto">
        <h2 className="text-lg font-semibold tracking-wide text-gray-800 uppercase after:block after:h-1 after:w-36 after:bg-yellow-400 after:mt-1 after:mx-auto">
          Hãy là thành viên của chúng tôi
        </h2>
        <div className="mt-6 flex justify-center">
          <Image
            src="/images/join_us.jpg"
            alt="Hãy là thành viên của chúng tôi"
            width={1000}
            height={500}
            className="rounded-lg shadow-lg object-cover h-50 md:h-100 w-auto"
          />
        </div>
      </section>

      {/* Tin tức tuyển dụng */}
      <section className="pt-12 bg-white mx-2">
        <h2 className="text-lg font-semibold tracking-wide text-center text-gray-800 uppercase after:block after:h-1 after:w-36 after:bg-yellow-500 after:mt-1 after:mx-auto">
          Tin tức tuyển dụng
        </h2>

        {/* Bộ lọc */}
        <div className="max-w-3xl mx-auto mt-6 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Tìm kiếm theo tên công việc..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="border px-4 py-2 rounded-md flex-1"
          />
          <select
            value={filterLocation}
            onChange={(e) => {
              setFilterLocation(e.target.value);
              setCurrentPage(1);
            }}
            className="border px-4 py-2 rounded-md w-full md:w-1/3"
          >
            <option value="">Tất cả địa điểm</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Sài Gòn">Sài Gòn</option>
          </select>
        </div>
        {filteredJobs.length === 0 && (
          <p className="text-center mt-6 text-gray-500">
            Không tìm thấy công việc phù hợp.
          </p>
        )} 
        {/* Danh sách job - giữ chiều cao */}
        <div
          className={`max-w-3xl mx-auto mt-6 divide-y min-h-[580px] transition-opacity duration-300 ${
            fade ? 'opacity-0' : 'opacity-100'
          }`}
        >
       {currentJobs.map((job) => (
  <div key={job.id} className="flex flex-col md:flex-row md:justify-between md:items-center py-3">
    <span className="text-xs md:font-medium text-gray-800 mb-2 md:mb-0">{job.title}</span>

    <div className="flex items-center gap-4 justify-end md:justify-start">
      <span className="flex items-center text-gray-500 text-sm">
        <MapPin className="w-4 h-4 mr-1" />
        {job.location}
      </span>

      <Link href={`/jobdetail/${job.id}`}>
        <button className="text-xs md:text-sm border border-yellow-500 text-yellow-500 px-4 py-1 rounded-full hover:bg-yellow-500 hover:text-white transition hover:cursor-pointer">
          ỨNG TUYỂN
        </button>
      </Link>
    </div>
  </div>
))}

        </div>  

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-md border ${
                  currentPage === i + 1
                    ? 'bg-red-500 text-white border-red-500'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </section>
       <section className="pt-12 bg-white mx-2">
      <h2 className="text-lg font-semibold tracking-wide text-center text-gray-800 uppercase 
        after:block after:h-1 after:w-36 after:bg-yellow-500 after:mt-1 after:mx-auto">
        TẠI SAO BẠN NÊN LỰA CHỌN XHOME
      </h2>

      <div className="max-w-6xl mx-auto mt-8 
  flex overflow-x-auto gap-4 md:grid md:grid-cols-4 md:overflow-visible">
  {whyChooseUs.map((item, index) => (
    <div
      key={index}
      className="relative group rounded overflow-hidden shadow-lg 
                 flex-shrink-0 w-72 md:w-auto"
    >
      <img
        src={item.img}
        alt={item.title}
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
        <span className="text-3xl font-bold">{item.num}</span>
        <div className="w-8 h-[2px] bg-white my-2"></div>
        <h3 className="font-bold text-sm uppercase">{item.title}</h3>
        <p className="text-xs mt-2">{item.desc}</p>
      </div>
    </div>
  ))}
</div>

    </section>
    </div>
  );
}
