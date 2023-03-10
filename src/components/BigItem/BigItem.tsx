import { useState } from 'react'
import { useMutation } from 'react-query'
import { Link } from 'react-router-dom'
import { addToCart } from 'src/apis/purchase.api'
import MainImage from 'src/assets/images/MainImage.png'
import Vector from 'src/assets/images/Vector.png'
import { FormatNumber, FormatNumberK } from 'src/hooks/useFormatNumber'
import { Product } from 'src/types/product.type'
import { getProfileFromLS } from 'src/utils/auth'
import Button from '../Button'
import QuantityController from '../QuantityController/QuantityController'

interface Props {
  type?: string
  product: Product
}

interface bodyReq {
  buy_count: number
  product_id: string
}

const BigItem = ({ product, type }: Props) => {
  const profileAccessToken = getProfileFromLS()
  console.log(product?._id)
  const [buyCount, setBuyCount] = useState(1)
  const handleBuyCount = (value: number) => {
    setBuyCount(value)
  }
  const body: bodyReq = { buy_count: buyCount, product_id: product?._id }

  const addToCartMutation = useMutation({
    mutationFn: () => {
      return addToCart(profileAccessToken?._id, body)
    }
  })
  const handleAddToCart = () => {
    addToCartMutation.mutate()
  }
  if (!product) return null
  return (
    <Link to={`/product/${product?._id}`} className='m-auto'>
      {!type && (
        <div className='font-[600] text-[18px] leading-7 mb-[20px]'>
          Your Campaign <span className='text-violet'>(4)</span>
        </div>
      )}
      <div className={`${type ? 'gap-x-[40px]' : ''} flex mobile:flex-col mobile:w-[327px]`}>
        <div className=''>
          <div className={`${type ? 'h-[700px]' : 'h-[266px]'} w-[583px] mobile:w-[100%] mobile:h-[510px]`}>
            {product.image && <img src={product.image[0]} alt='' />}
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
            <p className='text-[14px] font-[500] leading-5 text-text-color'>
              {product?.category ? <div>{product?.category.name}</div> : null}
            </p>
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
                {FormatNumber(
                  Math.ceil(Number(product?.price) - (Number(product?.price) * Number(product?.discount)) / 100)
                )}
                đ
              </h2>
              <div className='text-textColor4 text-[16px] mobile:text-[14px] leading-7'>
                Giá gốc {FormatNumber(Number(product?.price))}đ
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='font-[700] text-[20px] mobile:text-[16px]'>{FormatNumberK(product?.selled || 13)}</h2>
              <div className='text-textColor4 text-[16px] mobile:text-[14px] leading-7'>Đã bán</div>
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='font-[700] text-[20px] mobile:text-[16px]'>
                {!product?.rating ? <p>Chưa có</p> : product?.rating + '*'}
              </h2>
              <div className='text-textColor4 text-[16px] mobile:text-[14px] leading-7'>Đánh giá</div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <QuantityController
              max={product?.countInStock}
              onDecrease={handleBuyCount}
              onIncrease={handleBuyCount}
              onType={handleBuyCount}
              value={buyCount}
            ></QuantityController>
            <div>{product?.countInStock} sản phẩm có sẵn</div>
          </div>
          {type && (
            <>
              <Link to='/cart/2'>
                <Button color='primary'>Mua ngay</Button>
              </Link>
              <button
                onClick={handleAddToCart}
                className={` bg-secondary text-4 font-[600]  text-white h-[52px] rounded-[10px] w-full  hover:opacity-90`}
              >
                Thêm vào giỏ
              </button>
            </>
          )}
        </div>
      </div>
    </Link>
  )
}

export default BigItem
