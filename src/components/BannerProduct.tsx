'use client'

type BannerProps = {
  src: string
  title: string
  description: string
}

export default function Banner({ src, title, description }: BannerProps) {
  return (
    <div className="relative w-full h-[300px] md:h-[800px]">
      {/* Ảnh nền */}
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* Lớp phủ đen mờ nhẹ */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Text nội dung */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="max-w-3xl text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
