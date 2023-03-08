import React, { useState } from 'react'
import Close from '../../assets/images/Close.png'
import Dienthoai1 from '../../assets/images/dienthoai1.jpg'
import Maqrnganghang from '../../assets/images/maqrnganhang.jpg'

const UserOrder = () => {
  const [quantity, setQuantity] = useState(1)

  const handleIncrement = (e : any) => {
    const target = e.target
    setQuantity(quantity + 1)
  }

  const handleDecrement = (e: any) => {
    if (quantity >= 1) {
      setQuantity(quantity - 1)
    }
  }
  return (
    <div>
      <div className='text-3xl font-bold my-[60px] mx-6'>Sản phẩm Đã được Oder tại website</div>
      <div>
        <div className='mobile:min-w-[350px] mobile:max-w-[450px] flex mb-[50px]  w-[1200px] h-[50px]  shadow-[0_30px_100px_-15px_rgba(0,0,0,0.2)]'>
          <div className='pt-4 mobile:w-[25%] w-[25%] text-center font-bold'>SẢN PHẨM</div>
          <div className='pt-4 mobile:w-[25%] mobile:hidden w-[25%] text-center font-bold'>GIÁ</div>
          <div className='pt-4 mobile:w-[25%] w-[25%] text-center font-bold'>SỐ LƯỢNG</div>
          <div className='pt-4 mobile:w-[25%] w-[25%] text-center font-bold'>TỔNG</div>
          {/* <div className='pt-4 mobile:w-[25%] w-[25%] text-center font-bold'>XÓA</div> */}
        </div>
        <div className='flex items-center justify-between w-[1200px] mb-[50px] mobile:min-w-[350px] mobile:max-w-[450px]'>
          <div className='w-[25%] mobile:w-[25ư%]  justify-center flex items-center'>
            <div className=''>
              <img className='w-[80px] h-[auto]' src={Dienthoai1} alt='' />
            </div>
            <div className='mobile:hidden'>Reno8T 5G</div>
          </div>
          <div className='flex w-[25%] mobile:hidden mobile:w-[25%] mobile:text-xs justify-center'>
            10,000,000
            <p>Đ</p>
          </div>
          <div className='flex w-[25%] mobile:w-[40%] mobile:text-xs justify-center'>
            <button
              disabled={quantity == 1 ? true : false}
              onClick={handleDecrement}
              className='w-[20px] h-[40px] border-2 mobile:w-[14px] mobile:h-[28px] rounded-sm flex items-center justify-center'
            >
              -
            </button>
            <div className='w-[20px] h-[40px] mobile:w-[14px] mobile:h-[28px] border-2 rounded-sm flex items-center justify-center'>
              {quantity}
            </div>
            <button
              onClick={handleIncrement}
              className='w-[20px] h-[40px] mobile:w-[14px] mobile:h-[28px] border-2 rounded-sm flex items-center justify-center'
            >
              +
            </button>
          </div>
          <div className='flex w-[25%] mobile:w-[50%] justify-center'>
            {10000000 * quantity}
            <p>Đ</p>
          </div>
          {/* <div className='flex w-[25%] mobile:w-[25%] mobile:mr-9 justify-center'>
            <img className='w-[20px] h-[20px]' src={Close} alt='' />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default UserOrder
