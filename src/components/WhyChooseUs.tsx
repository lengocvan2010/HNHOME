'use client';
import { FaShieldAlt, FaLightbulb, FaUserTie, FaThumbsUp } from 'react-icons/fa';
import { MdOutlineWorkspacePremium } from 'react-icons/md';
import { GiMaterialsScience } from 'react-icons/gi';

const features = [
  {
    icon: <GiMaterialsScience size={40} />,
    title: 'Vật liệu an toàn',
    desc: 'Nguyên liệu sạch được chọn lựa để thân thiện với môi trường và đảm bảo sức khỏe cho khách hàng',
  },
  {
    icon: <FaUserTie size={40} />,
    title: 'Đội ngũ chuyên nghiệp',
    desc: 'Hơn 800 nhân sự luôn máu lửa và làm việc đầy tâm huyết để tạo ra những sản phẩm và dịch vụ chất lượng nhất',
  },
  {
    icon: <MdOutlineWorkspacePremium size={40} />,
    title: 'Chất lượng sản phẩm',
    desc: 'XHOME tập trung vào các sản phẩm mang tính đột phá và phù hợp với nhu cầu người sử dụng',
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: 'Uy tín hàng đầu',
    desc: 'Thương hiệu được khẳng định bằng chất lượng sản phẩm và dịch vụ trong nhiều năm qua',
  },
  {
    icon: <FaLightbulb size={40} />,
    title: 'Ý tưởng sáng tạo',
    desc: 'Luôn cập nhật và tạo ra những mẫu thiết kế nội thất độc đáo, mới mẻ',
  },
  {
    icon: <FaThumbsUp size={40} />,
    title: 'Đảm bảo sự hài lòng của khách hàng',
    desc: 'Sự hài lòng của khách hàng là động lực cho sự phát triển của XHOME',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-16 px-4 md:px-12 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      {/* Lớp phủ mờ */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Nội dung chính */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold uppercase mb-8 inline-block relative after:block after:h-1 after:w-24 after:bg-yellow-400 after:mt-2 after:mx-auto">
          Tại sao chọn chúng tôi
        </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {features.map((item, idx) => (
            <div
            key={idx}
            className={`flex items-center gap-4 ${
                idx % 2 === 0 ? 'flex-row-reverse text-right' : 'text-left'
            }`}
            >
            <div className="text-yellow-400 text-3xl">{item.icon}</div>
            <div className='w-3/5'>
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
            </div>
        ))}
        </div>

      </div>
    </section>
  );
}
