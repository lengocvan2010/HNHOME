"use client"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const products = [
  { id: 1, name: "NỘI THẤT COMBO", img: "/products/combo.jpg" },
  { id: 2, name: "NỘI THẤT SẠCH", img: "/products/sach.jpg" },
  { id: 3, name: "KIẾN TRÚC VÀ XÂY DỰNG", img: "/products/xaydung.jpg" },
  { id: 4, name: "LEOPARD", img: "/products/leopard.jpg" },
  { id: 5, name: "H.O.A FIORE", img: "/products/hoa.jpg" },
]

export default function DesignedProducts() {
  const [current, setCurrent] = useState(0)
  const total = products.length

  const getVisible = () => {
    const prev = (current - 1 + total) % total
    const next = (current + 1) % total
    return [
      { ...products[prev], type: "side" },
      { ...products[current], type: "center" },
      { ...products[next], type: "side" },
    ]
  }

  const handleDotClick = (index: number) => {
    setCurrent(index)
  }

  return (
    <div className="py-10 text-center">
      <h2 className="text-xl font-semibold mb-4 after:block after:h-1 after:w-24 after:mx-auto after:bg-yellow-400 after:mt-1">SẢN PHẨM THIẾT KẾ</h2>
      <div className="overflow-hidden w-full max-w-5xl mx-auto">
        <div className="flex justify-center items-center gap-6 transition-transform duration-500">
          <AnimatePresence mode="popLayout">
            {getVisible().map((product) => (
              <motion.div
                key={product.id}
                layout
                className={`relative rounded-xl overflow-hidden ${
                  product.type === "center"
                    ? "w-72 h-72 shadow-2xl z-20"
                    : "w-60 h-60 opacity-50 z-10"
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                {/* Hình ảnh */}
                <Image src={product.img} alt={product.name} fill className="object-cover transition-all duration-300" />

                {/* Lớp phủ đen cố định dưới cùng */}
                <div className="absolute bottom-0 left-0 w-full h-[20%] bg-black/50 z-10"></div>

                {/* Tên sản phẩm */}
                <div className="absolute bottom-3 w-full text-white text-sm text-center p-1 z-20">
                  {product.name}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {products.map((_, idx) => (
          <div
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              idx === current ? "bg-red-500 scale-125" : "bg-red-200"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
