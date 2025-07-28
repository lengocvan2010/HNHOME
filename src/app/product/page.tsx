'use client'

import { useSearchParams } from 'next/navigation'
import Navbar from "@/components/Navbar"
import BannerProduct from "@/components/BannerProduct"
import ProductList from "@/components/ProductList"
export default function ProductPage() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')

  const data = {
    'nha-pho': { title: 'Nhà phố', description: 'Thông tin nhà phố...' },
    'nha-vuon': { title: 'Nhà vườn', description: 'Thông tin nhà vườn...' },
    'chung-cu': { title: 'Chung cư', description: 'Thông tin chung cư...' },
  }

  // Kiểm tra trước khi truy cập
  if (!type || !(type in data)) {
    return <p>Vui lòng chọn loại nhà hợp lệ</p>
  }

  const product = data[type as keyof typeof data]

  return (
    <div>
      <Navbar/>
      <BannerProduct
        src={`/banner_product/${type}.jpg`}
        title="SẢN PHẨM XHOME"
        description="Chúng tôi cung cấp đầy đủ các sản phẩm, dịch vụ liên quan đến Thiết kế, Thi công và bán lẻ nội thất. Quy trình làm việc rõ ràng, chuyên nghiệp cùng với chính sách bảo hành & bảo trì sản phẩm độc nhất kéo dài đến 06 năm đi kèm với chế độ kiểm tra định kỳ từ 3 tháng đến 6 tháng/lần để đánh giá chất lượng sản phẩm trong quá trình sử dụng của khách hàng."
       />
        <ProductList type={type} />
    </div>
  )
}
