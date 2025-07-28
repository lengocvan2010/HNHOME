'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

const ProductList = ({ type }: { type: string }) => {
  const products = Array.from({ length: 31 }, (_, index) => ({
    id: index + 1,
    name: `Sản phẩm ${index + 1}`,
    image: `/branches/hn.jpg`,
    type,
  }))

  const itemsPerPage = 9
  const totalPages = Math.ceil(products.length / itemsPerPage)
  const [currentPage, setCurrentPage] = useState(1)

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <div className="p-4 flex flex-col items-center">
      {/* Tiêu đề và mô tả */}
      <div className="text-center mb-6 max-w-2xl pt-7 ">
        <h2 className="text-2xl  text-gray-600 uppercase tracking-wide 
            after:block after:h-1 after:w-24 after:bg-yellow-400 after:mt-1 after:mx-auto">
            Nội thất chung cư
        </h2>
        <p className="mt-2 text-gray-600 text-sm">
          Những BST <span className="italic font-medium">thiết kế nội thất chung cư</span> đến từ các designer và kiến trúc sư dày dặn kinh nghiệm khiến bạn muốn thay đổi ngay không gian căn hộ đã quá phổ thông của mình.
        </p>
      </div>

      {/* Grid sản phẩm có hiệu ứng chuyển trang */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-3 gap-x-7"
          style={{ minHeight: '670px' }}
        >
          {paginatedProducts.map(product => (
            <div
              key={product.id}
              className="bg-white p-0 text-center w-[260px] h-[200px] flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-[260px] h-[200px] object-cover transition-all duration-300"
                style={{ borderRadius: '0 65px 0 65px' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLImageElement).style.borderRadius = '8px'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLImageElement).style.borderRadius = '0 65px 0 65px'
                }}
              />
              <h3 className="mt-2 text-sm">{product.name}</h3>
            </div>
          ))}

          {/* Khối rỗng để giữ layout 3x3 */}
          {Array.from({ length: itemsPerPage - paginatedProducts.length }).map(
            (_, idx) => (
              <div
                key={`empty-${idx}`}
                className="w-[260px] h-[200px] opacity-0 pointer-events-none"
              />
            )
          )}
        </motion.div>
      </AnimatePresence>

      {/* Pagination dạng chấm tròn có hiệu ứng */}
      <div className="flex justify-center mt-6 space-x-3">
        {Array.from({ length: totalPages }).map((_, index) => {
          const isActive = currentPage === index + 1
          return (
            <motion.button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={clsx(
                'w-4 h-4 rounded-full transition-all duration-300 transform',
                isActive
                  ? 'bg-red-600 border-2 border-red-500 scale-110'
                  : 'bg-red-300 hover:scale-105'
              )}
              whileTap={{ scale: 1.3 }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProductList
