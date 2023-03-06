import { Link } from 'react-router-dom'
import MainImage from 'src/assets/images/MainImage.png'
import Vector from 'src/assets/images/Vector.png'
import { FormatNumber, FormatNumberK } from 'src/hooks/useFormatNumber'
import { Product } from 'src/types/product.type'
import Button from '../Button'

interface Props {
  type?: string
  product: Product
}

const BigItem = ({ product, type }: Props) => {
  if (!product) return null
  return (
    <Link to={`/product/${product?._id}`} className='m-auto'>
      {!type && (
        <h1 className='font-[600] text-[18px] leading-7 mb-[20px]'>
          Your Campaign <span className='text-violet'>(4)</span>
        </h1>
      )}
      <div className={`${type ? 'gap-x-[40px]' : ''} flex mobile:flex-col mobile:w-[327px]`}>
        <div className=''>
          <div className={`${type ? 'h-[398px]' : 'h-[266px]'} w-[583px] mobile:w-[100%] mobile:h-[210px]`}>
            <img src={product?.image[0]} alt='' />
          </div>
          {type && (
            <div className='flex gap-[10px] mt-[30px] justify-center'>
              <div className='w-[90px] h-[70px]'>
                <img src={MainImage} alt='' />
              </div>
              <div className='w-[90px] h-[70px]'>
                <img src={MainImage} alt='' />
              </div>
              <div className='w-[90px] h-[70px]'>
                <img src={MainImage} alt='' />
              </div>
              <div className='w-[90px] h-[70px]'>
                <img src={MainImage} alt='' />
              </div>
            </div>
          )}
        </div>
        <div
          className={`${
            type ? 'w-[443px]' : 'w-[495px]'
          } flex flex-col gap-y-[12px] mobile:px-0 px-[30px] py-[17px] mobile:w-[100%]`}
        >
          <div className='flex gap-[10px] items-center'>
            <div className='w-6 h-6 py-[2px]'>
              <img src={Vector} alt='' />
            </div>
            <p className='text-[14px] font-[500] leading-5 text-text-color'>{'asdasd'}</p>
          </div>
          <h1 className='font-[700] mobile:font-[600] mobile:text-[16px] text-[20px] leading-7'>{product?.name}</h1>
          <p className='leading-[22px] mobile:text-[12px] text-text-color'>{product?.description}</p>
          <div>
            <div className='h-[5px] bg-[#EFEFEF] rounded-[5px]'>
              <div className='bg-primary w-[70%] h-[100%] rounded-[5px]'></div>
            </div>
          </div>
          <div className={`${type ? 'gap-[40px]' : 'gap-[65px]'} flex mobile:gap-[31px]`}>
            <div className='flex flex-col items-center'>
              <h2 className='font-[700] text-[20px] mobile:text-[16px]'>
                {FormatNumber(Math.ceil(product?.price - (product?.price * product?.discount) / 100))}đ
              </h2>
              <div className='text-textColor4 text-[16px] mobile:text-[14px] leading-7'>
                Giá gốc {FormatNumber(product?.price)}đ
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='font-[700] text-[20px] mobile:text-[16px]'>{FormatNumberK(product?.selled || 13)}</h2>
              <div className='text-textColor4 text-[16px] mobile:text-[14px] leading-7'>Đã bán</div>
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='font-[700] text-[20px] mobile:text-[16px]'>{product?.rating}*</h2>
              <div className='text-textColor4 text-[16px] mobile:text-[14px] leading-7'>Đánh giá</div>
            </div>
          </div>
          {type && (
            <>
              <Link to='/cart/2'>
                <Button color='primary'>Mua ngay</Button>
              </Link>
              <Button color=''>Thêm vào giỏ</Button>
            </>
          )}
        </div>
      </div>
    </Link>
  )
}

export default BigItem
