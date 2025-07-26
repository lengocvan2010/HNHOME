// components/Footer.jsx
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#2a2a2a] text-white text-sm relative">
      <div className="h-5 bg-yellow-400 mt-10" />

        <div className="px-6 py-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.3fr_0.5fr_1.2fr] gap-x-12 gap-y-8">


        {/* BẢN ĐỒ */}
        <div className="flex justify-center md:justify-start">
          <Image src="/images/map.png" alt="Showroom map" width={250} height={400} />
        </div>

        {/* HỆ THỐNG VĂN PHÒNG */}
        <div className="text-left">
          <h3 className="text-lg font-bold mb-4 relative inline-block after:block after:h-1 after:w-16 after:bg-yellow-400 after:mt-1">
            HỆ THỐNG VĂN PHÒNG
          </h3>
          <ul className="space-y-3">
            <li>
              <p className="font-semibold">Miền Bắc</p>
              <p>🏩 TT26 KĐT Văn Phú, Hà Đông, Hà Nội</p>
              <p>☎️ 0924.986.999</p>
            </li>
            <li>
              <p className="font-semibold">Miền Trung</p>
              <p>🏩 KĐT Đông Sơn, Đô Lương, Nghệ An</p>
              <p>☎️ 0986.137.666</p>
            </li>
            <li>
              <p className="font-semibold">Miền Nam</p>
              <p>🏩 LK17 - KDC An Sương, Q12, TP. Hồ Chí Minh</p>
              <p>☎️ 0366.678.789</p>
            </li>
          </ul>
        </div>

      

        {/* SOCIAL ICONS */}
        <div className="text-left">
          <h3 className="text-lg font-bold mb-4 relative inline-block after:block after:h-1 after:w-16 after:bg-yellow-400 after:mt-1">KẾT NỐI</h3>
          <div className="flex space-x-4 mt-2">
            {/* Facebook Icon */}
            <Link
              href="https://www.facebook.com/thietkevaxaydunghnhome"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fanpage Facebook"
              className="hover:text-yellow-400 transition"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.333v21.333C0 23.402.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.402 24 22.667V1.333C24 .598 23.403 0 22.675 0z" />
              </svg>
            </Link>

            {/* TikTok Icon */}
            <Link
              href="https://www.tiktok.com/@kientruchn8699"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-yellow-400 transition"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12.25 0h3.223c.241 2.447 1.77 4.169 4.527 4.383v3.196c-1.355.14-2.577-.24-3.797-.842v7.942c0 5.71-6.106 7.626-9.543 4.166C4.703 16.684 6.09 11.682 10.27 10.1v3.01c-.776.11-1.396.697-1.507 1.508-.164 1.178.773 2.302 2.042 2.302 1.245 0 2.195-1.017 2.195-2.25V0z"/>
              </svg>
            </Link>
          </div>
        </div>
        
          {/* LOGO + XƯỞNG */}
        <div className="text-left">
            <h3 className="text-lg font-bold mb-4 relative inline-block after:block after:h-1 after:w-16 after:bg-yellow-400 after:mt-1">
            WEBSITE ĐƯỢC VẬN HÀNH BỞI
          </h3>
          <Image
            src="/images/logo.png"
            alt="HN HOME Logo"
            width={120}
            height={60}
            className="mb-3 "
          />
          <h3 className="text-lg font-bold mb-3">CÔNG TY TNHH HN HOME</h3>
          <ul className="text-xs leading-6 space-y-1 py-5">
            <li>TT26 KĐT Văn Phú, Hà Đông, Hà Nội</li>
          </ul>
           <ul className="text-xs leading-6 space-y-1">
            <li>Giấy phép số 0106514703 do Sở kế hoạch và đầu tư thành phố Hà Nội</li>
            <li>Cấp ngày 26/06/2020</li>
          </ul>
        </div>
      </div>

      
    </footer>
  )
}
