import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { productGoods } from '../data/productsData'
import AutohideSnackbar from '../components/common/snackbar'

function ProductOne() {
  const { id } = useParams()
  
  const product = productGoods.find(item => item.id === Number(id))

  if (!product) {
    return (
      <div className="min-h-[600px] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Product Not Found!</h2>
        <Link to="/product" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors">
          Back to Products
        </Link>
      </div>
    )
  }

  return (
    <div className="mt-7 min-h-[600px] max-w-[1100px] mx-auto p-4 flex flex-col gap-6">
      
      <Link to="/product" className="self-start text-[15px] text-gray-600 hover:text-blue-500 font-medium flex items-center gap-1 transition-colors">
        ⬅️ Back to Products
      </Link>

      <div 
        style={{
          borderRadius: "10px",
          padding: "24px",
          backgroundColor: "#f6f6f6"
        }}
        className="flex flex-col md:flex-row gap-8 items-center border border-gray-100 shadow-sm"
      >
        {/* شق الصورة: تم تحديد أبعاد المربع الكامل الموسط بدقة تامة هنا */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-[10px] shadow-inner flex items-center justify-center aspect-square max-w-[400px] mx-auto">
          <img 
            src={`/${product.link}`} 
            alt={product.name} 
            className="w-full h-full object-contain"
          />
        </div>

        {/* شق تفاصيل ومواصفات المنتج */}
        <div className="w-full md:w-1/2 flex flex-col justify-between py-2 min-h-[350px]">
          <div>
            <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full uppercase mb-4 tracking-wider">
              {product.category}
            </span>
            
            <h1 className="text-[28px] font-bold text-gray-800 mb-3 leading-tight">{product.name}</h1>
            
            <h2 className="text-[16px] text-gray-500 leading-relaxed font-normal">
              {product.fullName}
            </h2>
          </div>

          {/* السعر وأزرار العملية في الأسفل */}
          <div className="pt-5 border-t border-gray-200 flex items-center justify-between mt-6">
            <span className="text-[26px] font-black text-blue-400">{product.price}$</span>
            
            <div className="flex items-center gap-3">
              <AutohideSnackbar />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductOne
