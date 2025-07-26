import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Trang chủ | My Company',
  description: 'Website giới thiệu công ty chuyên nghiệp',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
        {/* Nội dung chính */}
        <main className="flex-1">{children}</main>

        {/* Footer luôn nằm sát đáy */}
        <footer className="text-center text-sm text-gray-500 border-t">
          <Footer />
        </footer>
      </body>
    </html>
  )
}
