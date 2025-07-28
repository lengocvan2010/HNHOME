'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)

  return (
    <>
      {/* ✅ MOBILE NAVBAR */}
      <div className="block md:hidden relative z-50 bg-white shadow text-black">
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
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Wrapper with transition */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? 'max-h-[600px] py-6' : 'max-h-0 py-0'
          } px-5 bg-white`}
        >
          <nav className="space-y-4 text-sm">
            <Link href="/" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-500">TRANG CHỦ</Link>

            {/* Sản phẩm toggle */}
            <div>
              <button
                onClick={() => setProductOpen(!productOpen)}
                className="flex justify-between w-full items-center hover:text-yellow-500"
              >
                <span>SẢN PHẨM</span>
                <ChevronDown
                  className={`ml-2 transition-transform duration-300 ${productOpen ? 'rotate-180' : ''}`}
                  size={18}
                />
              </button>

              {/* Submenu with transition */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  productOpen ? 'max-h-40 mt-2' : 'max-h-0'
                } ml-4 space-y-2 text-sm text-black`}
              >
                <Link href="/product?type=nha-pho" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-500">
                  Nhà phố
                </Link>
                <Link href="/product?type=nha-vuon" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-500">
                  Nhà vườn
                </Link>
                <Link href="/product?type=chung-cu" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-500">
                  Chung cư
                </Link>
              </div>
            </div>

            <Link href="/services" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-500">HỆ THỐNG HNHOME</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-500">PHẢN HỒI CỦA KHÁCH HÀNG</Link>
            <Link href="/news" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-500">TIN TỨC</Link>
            <Link href="/jobs" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-500">TUYỂN DỤNG</Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block mt-4 border border-black px-4 py-2 rounded hover:text-yellow-500 transition duration-300"
            >
              ĐĂNG KÝ TƯ VẤN
            </Link>
          </nav>
        </div>
      </div>

      {/* ✅ DESKTOP NAVBAR */}
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
            <Link href="/" className="hover:text-yellow-500">TRANG CHỦ</Link>
            <div className="relative group">
              <Link href="/about" className="hover:text-yellow-500">SẢN PHẨM</Link>
              <div className="absolute left-0 top-full hidden group-hover:block bg-transparent text-white rounded shadow-md z-50 min-w-[180px] p-2 ">
                <Link href="/product?type=nha-pho" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-500 py-2">
                  Nhà phố
                </Link>
                <Link href="/product?type=nha-vuon" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-500 py-2">
                  Nhà vườn
                </Link>
                <Link href="/product?type=chung-cu" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-500 py-2">
                  Chung cư
                </Link>
              </div>
            </div>
            <Link href="/services" className="hover:text-yellow-500">HỆ THỐNG HNHOME</Link>
            <Link href="/contact" className="hover:text-yellow-500">PHẢN HỒI CỦA KHÁCH HÀNG</Link>
            <Link href="/news" className="hover:text-yellow-500">TIN TỨC</Link>
            <Link href="/jobs" className="hover:text-yellow-500">TUYỂN DỤNG</Link>
            <Link
              href="/contact"
              className="border border-white text-white px-4 py-2 rounded hover:text-yellow-500 transition duration-300"
            >
              ĐĂNG KÝ TƯ VẤN
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
