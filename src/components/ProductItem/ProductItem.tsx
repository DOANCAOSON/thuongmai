import { Link } from 'react-router-dom'

import Vector from 'src/assets/images/Vector.png'
import { FormatNumber, FormatNumberK, generateNameId } from 'src/hooks/useFormatNumber'
import { Product } from 'src/types/product.type'
interface Props {
  product: Product
}
const ProductItem = ({ product }: Props) => {
  return (
    <Link to={`/product/${generateNameId({ name: product?.name, id: product?._id })}`}>
      <div className=' flex flex-col shadow-sm rounded-[15px] mobile:w-[200px] w-[250px]'>
        <div className='w-[250px] mobile:w-[200px] h-[400px] mobile:h-[250px] rounded-[25px] overflow-hidden '>
          <img src={product?.image[0]} alt={product?.name} />
        </div>
        <div className='px-[20px] mobile:w-auto py-[15px] w-[271px] flex flex-col gap-y-[15px]'>
          <div className='flex items-center gap-2'>
            <div className='w-[18px] h-[18px] py-[2px]'>
              <img src={Vector} alt='' />
            </div>
            <p className='text-[12px] font-[500] text-text-color'>{product?.category?.name}</p>
          </div>
          <div>
            <h1 className='font-[600] text-[16px] leading-7 line-clamp'>{product?.name}</h1>
            <p className='text-text-color text-[12px] leading-[18px]'>{product?.description}</p>
          </div>
          <div className='flex gap-[50px] mobile:gap-[20px]'>
            <div className='flex flex-col'>
              <h2 className='font-[600] text-[14px] leading-6'>
                {FormatNumber(
                  Math.ceil(Number(product?.price) - (Number(product?.price) * Number(product?.discount)) / 100)
                )}
                đ
              </h2>
              <div className='text-textColor4 text-[12px] '>Giá gốc {FormatNumber(Number(product?.price))}đ</div>
            </div>
            <div className='flex flex-col'>
              <h2 className='font-[600] text-[14px] leading-6 lowercase'>{FormatNumberK(product?.selled || 0)}</h2>
              <div className='text-textColor4 text-[12px] '>Đã bán</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default ProductItem
