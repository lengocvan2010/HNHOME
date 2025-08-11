'use client'

import Link from 'next/link'
import Image from 'next/image'

import { Menu, X, ChevronDown, Mail, Phone, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'

interface NavbarProps {
  activeMenu: string
}

export default function Navbar({ activeMenu }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [successMessage])

  const linkClass = (name: string) =>
    `hover:text-yellow-500 ${
      activeMenu === name ? 'border-b-2 border-yellow-500 pb-1' : ''
    }`

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsConfirmOpen(true)  // mở popup xác nhận
}

  return (
    <>
      {/* MOBILE NAVBAR */}
      <div className="block md:hidden relative z-50 bg-[#2a2a2a] shadow text-black">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? 'max-h-[600px] py-6' : 'max-h-0 py-0'
          } px-5 bg-white`}
        >
          <nav className="space-y-4 text-sm">
            <Link href="/" onClick={() => setMenuOpen(false)} className={`block `}>TRANG CHỦ</Link>

            {/* Sản phẩm toggle */}
            <div>
              <button
                onClick={() => setProductOpen(!productOpen)}
                className={`flex justify-between w-full items-center `}
              >
                <span>SẢN PHẨM</span>
                <ChevronDown
                  className={`ml-2 transition-transform duration-300 ${productOpen ? 'rotate-180' : ''}`}
                  size={18}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  productOpen ? 'max-h-40 mt-2' : 'max-h-0'
                } ml-4 space-y-2 text-sm text-black`}
              >
                <Link href="/product?type=nha-pho" className="block hover:text-yellow-500">Nhà phố</Link>
                <Link href="/product?type=nha-vuon" className="block hover:text-yellow-500">Nhà vườn</Link>
                <Link href="/product?type=chung-cu" className="block hover:text-yellow-500">Chung cư</Link>
              </div>
            </div>

            <Link href="/system" className={`block `}>HỆ THỐNG HNHOME</Link>
            <Link href="/feedback" className={`block `}>PHẢN HỒI CỦA KHÁCH HÀNG</Link>
            <Link href="/news" className={`block `}>TIN TỨC</Link>
            <Link href="/recruitment" className={`block `}>TUYỂN DỤNG</Link>

             <button
              onClick={() => setIsPopupOpen(true)}
              className="border border-black text-black px-4 py-2 rounded hover:text-yellow-500 transition duration-300"
            >
              ĐĂNG KÝ TƯ VẤN
            </button>
          </nav>
        </div>
      </div>

      {/* DESKTOP NAVBAR */}
      <nav className="hidden md:block absolute top-5 left-0 right-0 z-50 bg-transparent text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-16 h-20 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={70}
              height={70}
              className="object-contain"
            />
          </Link>
          <div className="flex items-center space-x-6 text-sm">
            {/* Các link menu */}
            <Link href="/" className={linkClass('home')}>
              TRANG CHỦ
            </Link>
            <div className="relative group">
              <span className={`${linkClass('product')} cursor-default select-none`}>
                SẢN PHẨM
              </span>
              <div className="absolute left-0 top-full hidden group-hover:block bg-transparent text-white rounded shadow-md z-50 min-w-[180px] p-2">
                <Link href="/product?type=nha-pho" className="block hover:text-yellow-500 py-2">
                  Nhà phố
                </Link>
                <Link href="/product?type=nha-vuon" className="block hover:text-yellow-500 py-2">
                  Nhà vườn
                </Link>
                <Link href="/product?type=chung-cu" className="block hover:text-yellow-500 py-2">
                  Chung cư
                </Link>
              </div>
            </div>

            <Link href="/system" className={linkClass('system')}>
              HỆ THỐNG HNHOME
            </Link>
            <Link href="/feedback" className={linkClass('feedback')}>
              PHẢN HỒI CỦA KHÁCH HÀNG
            </Link>
            <Link href="/news" className={linkClass('news')}>
              TIN TỨC
            </Link>
            <Link href="/recruitment" className={linkClass('recruitment')}>
              TUYỂN DỤNG
            </Link>

            <button
              onClick={() => setIsPopupOpen(true)}
              className="border border-white text-white px-4 py-2 rounded hover:text-yellow-500 transition duration-300"
            >
              ĐĂNG KÝ TƯ VẤN
            </button>
          </div>
        </div>
      </nav>

      {/* POPUP */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center  backdrop-blur-sm"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'fixed',
            inset: 0,
          }}
          onClick={() => setIsPopupOpen(false)}
        >
          {/* Overlay mờ đen phủ lên ảnh nền */}
          <div
            className="absolute inset-0 bg-black/40"
            aria-hidden="true"
          ></div>

          <div
          
            className="bg-gray-200 relative rounded-lg p-8 max-w-[900px] w-full max-h-[90vh] overflow-auto shadow-lg animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              aria-label="Close popup"
            >
              <X size={24} />
            </button>

            <h2 className="text-red-600 text-center font-semibold mb-6 text-lg md:text-2xl">
              ĐĂNG KÝ TƯ VẤN
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left contact info */}
              <div className="space-y-6">
                <div className="flex flex-col items-center justify-center p-4 border rounded shadow-sm">
                  <Mail size={48} className="text-gray-300 mb-2" />
                  <div className="text-center text-xs">
                    <div>Email:</div>
                    <div className="font-bold text-sm">marketing.xhome@gmail.com</div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border rounded shadow-sm">
                  <Phone size={48} className="text-gray-300 mb-2" />
                  <div className="text-center text-xs">
                    <div>Điện thoại:</div>
                    <div className="font-bold text-sm">02466 718 333</div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border rounded shadow-sm">
                  <MapPin size={48} className="text-gray-300 mb-2" />
                  <div className="text-center text-xs">
                    <div>Địa chỉ:</div>
                    <div className="font-bold text-sm">
                      Lancaster Building - 20 Núi Trúc - Giảng Võ - Ba Đình - Hà Nội
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side form + map */}
              <div className="md:col-span-2 flex flex-col gap-4">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Họ & tên *"
                      className="p-3 border rounded bg-gray-100"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Số điện thoại *"
                      className="p-3 border rounded bg-gray-100"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="p-3 border rounded bg-gray-100"
                    />
                    <input
                      type="text"
                      placeholder="Địa chỉ *"
                      className="p-3 border rounded bg-gray-100"
                      required
                    />
                  </div>
                  <textarea
                    placeholder="Dịch vụ yêu cầu *"
                    rows={6}
                    className="w-full p-3 border rounded resize-none bg-gray-100"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
                  >
                    GỬI ĐI
                  </button>
                </form>

                {/* Map */}
                <div className="border rounded overflow-hidden h-48 md:h-56">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.2874996158553!2d105.81804581493236!3d21.02181259364601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abf1c1aef9bf%3A0xbff2a4a2f249a4a6!2zTGFuY2FzdGVyIEJ1aWxkaW5nIC0gMjAgTsOg4buNIFRy4buxYyAtIEdpYW5nIFbhuq1lIC0gQsOgIMSQw6BuZyAtIMSQxrDhu51uZyAtSE8!5e0!3m2!1sen!2s!4v1691735725037!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map Lancaster Building"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Thêm hiệu ứng fadeIn cho popup */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
      `}</style>

    {isConfirmOpen && (
  <div
    className="fixed inset-0 z-60 flex justify-center items-center backdrop-blur-sm animate-fadeIn"
    onClick={() => setIsConfirmOpen(false)}
  >
    <div
      className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg relative"
      onClick={(e) => e.stopPropagation()}
    >
      <p className="mb-4 text-center text-lg font-semibold">
        Bạn có chắc chắn muốn gửi đăng ký?
      </p>
      <div className="flex justify-center gap-x-4">
  <button
    className="flex-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
    onClick={() => {
      setIsConfirmOpen(false)
      setIsPopupOpen(false)
      setSuccessMessage('Gửi đăng ký thành công!')
    }}
  >
    OK
  </button>
  <button
    className="flex-1 px-4 py-2 border rounded hover:bg-gray-100"
    onClick={() => setIsConfirmOpen(false)}
  >
    Cancel
  </button>
</div>

    </div>
  </div>
)}
{successMessage && (
  <div
    className="fixed top-10 right-10 z-70 bg-green-500 text-white px-6 py-3 rounded shadow-lg animate-fadeIn"
  >
    {successMessage}
  </div>
)}


    </>
  )
}
