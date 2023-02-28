import React from 'react'
import { Link } from 'react-router-dom'
import MainImage2 from 'src/assets/images/MainImage2.png'
import Vector from 'src/assets/images/Vector.png'
const ProductItem = () => {
  return (
    <Link to=''>
      <div className='flex flex-col shadow-sm rounded-[15px] w-[288px]'>
        <div className='w-[288px] h-[158px] rounded-[25px] overflow-hidden '>
          <img src={MainImage2} alt='' />
        </div>
        <div className='px-[20px] py-[15px] w-[271px] flex flex-col gap-y-[15px]'>
          <div className='flex items-center gap-2'>
            <div className='w-[18px] h-[18px] py-[2px]'>
              <img src={Vector} alt='' />
            </div>
            <p className='text-[12px] font-[500] text-text-color'>Education</p>
          </div>
          <div>
            <h1 className='font-[600] text-[16px] leading-7 '>Powered Kits Learning Boxes</h1>
            <p className='text-text-color text-[12px] leading-[18px]'>
              Fun, durable and reusable boxes with eco-friendly options.
            </p>
          </div>
          <div className='flex gap-[50px]'>
            <div className='flex flex-col'>
              <h2 className='font-[600] text-[14px] leading-6'>$2,000</h2>
              <div className='text-textColor4 text-[12px] '>Raised of $2,500</div>
            </div>
            <div className='flex flex-col'>
              <h2 className='font-[600] text-[14px] leading-6'>173</h2>
              <div className='text-textColor4 text-[12px] '>Total backers</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default ProductItem
