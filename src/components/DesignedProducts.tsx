"use client"
import Image from "next/image"
import { useState } from "react"

const products = [
  { id: 1, name: "NỘI THẤT COMBO", img: "/products/combo.jpg" },
  { id: 2, name: "NỘI THẤT SẠCH", img: "/products/sach.jpg" },
  { id: 3, name: "KIẾN TRÚC VÀ XÂY DỰNG", img: "/products/xaydung.jpg" },
  { id: 4, name: "LEOPARD", img: "/products/leopard.jpg" },
  { id: 5, name: "H.O.A FIORE", img: "/products/hoa.jpg" },
]

export default function DesignedProducts() {
  const [current, setCurrent] = useState(0)

  return (
    <div className="py-10 text-center">
      <h2 className="text-xl font-semibold mb-4">SẢN PHẨM THIẾT KẾ</h2>
      <div className="flex justify-center gap-4">
        {products.map((product, idx) => (
          <div key={product.id} className="w-45 h-45 rounded-full overflow-hidden relative">
            <Image src={product.img} alt={product.name} fill className="object-cover" />
            <div className="absolute bottom-0 w-full text-xs bg-black bg-opacity-50 text-white">{product.name}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-1">
        {products.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full cursor-pointer ${idx === current ? "bg-red-400" : "bg-red-200"}`}
          />
        ))}
      </div>
    </div>
  )
}
