"use client"
import Image from "next/image"

const branches = [
  { id: 1, name: "XCONS TP HỒ CHÍ MINH", img: "/branches/hcm.jpg" },
  { id: 2, name: "XCONS HÀ NỘI", img: "/branches/hn.jpg" },
  { id: 3, name: "XHOME VINH", img: "/branches/vinh.jpg" },
  { id: 4, name: "XHOME QUẢNG NINH", img: "/branches/quangninh.jpg" },
]

export default function XHomeSystem() {
  return (
    <div className="py-10 text-center">
      <h2 className="text-xl font-semibold mb-4">HỆ THỐNG XHOME</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {branches.map(branch => (
          <div key={branch.id} className="relative w-full h-48">
            <Image src={branch.img} alt={branch.name} fill className="object-cover rounded" />
            <div className="absolute bottom-0 w-full text-xs bg-black bg-opacity-50 text-white">{branch.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
