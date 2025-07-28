'use client'
import Image from "next/image"

const branches = [
  { id: 1, name: "XCONS TP HỒ CHÍ MINH", img: "/branches/hcm.jpg" },
  { id: 2, name: "XCONS HÀ NỘI", img: "/branches/hn.jpg" },
  { id: 3, name: "XHOME VINH", img: "/branches/vinh.jpg" },
]

export default function XHomeSystem() {
  return (
    <div className="py-10">
      <h2 className="text-xl font-semibold mb-4 text-center after:block after:h-1 after:w-24 after:mx-auto after:bg-yellow-400 after:mt-1">
        HỆ THỐNG XHOME
      </h2>

      <div className="w-full flex justify-center">
        <div className="grid grid-cols-3 gap-6">
          {branches.map(branch => (
            <div
              key={branch.id}
              className="relative w-40 h-40 md:w-50 md:h-50 rounded overflow-hidden group cursor-pointer"
            >
              {/* Hình ảnh */}
              <Image
                src={branch.img}
                alt={branch.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Lớp bóng mờ kéo từ dưới lên */}
              <div
                className="absolute left-0 bottom-0 w-full h-[20%] bg-black/50 z-10
                           group-hover:h-full group-hover:bottom-0
                           transition-all duration-500 ease-in-out"
              ></div>

              {/* Tên chi nhánh */}
              <div
                className="absolute left-0 w-full text-white text-sm text-center p-2 z-20
                          bottom-0 group-hover:top-1/2 group-hover:bottom-auto
                          group-hover:translate-y-[-50%] transition-all duration-300 ease-in-out"
              >
                {branch.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
