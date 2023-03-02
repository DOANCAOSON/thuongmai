import Close from '../../assets/images/Close.png'
import Dienthoai1 from '../../assets/images/dienthoai1.jpg'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { useState } from 'react'

const Cart = () => {
  const [quantity, setQuantity] = useState(1)

  return (
    <div>
      <div>
        <div>
          <div className='flex mb-7'>
            <div> Bạn có ưu đãi chứ?</div>
            <div className='ml-3 text-textCart'> Ấn vào đây để nhập mã</div>
          </div>
          <div>
            <div className='flex mb-[50px]  w-[1200px] h-[50px]  shadow-[0_30px_100px_-15px_rgba(0,0,0,0.2)]'>
              <div className='pt-4 w-[20%] text-center font-bold'>SẢN PHẨM</div>
              <div className='pt-4 w-[20%] text-center font-bold'>GIÁ</div>
              <div className='pt-4 w-[20%] text-center font-bold'>SỐ LƯỢNG</div>
              <div className='pt-4 w-[20%] text-center font-bold'>TỔNG</div>
              <div className='pt-4 w-[20%] text-center font-bold'>XÓA</div>
            </div>
            <div className='flex items-center justify-between w-[1200px] mb-[50px]'>
              <div className='w-[20%] justify-center flex items-center'>
                <div className=''>
                  <img className='w-[80px] h-[auto]' src={Dienthoai1} alt='' />
                </div>
                <div>Reno8T 5G</div>
              </div>
              <div className='flex w-[20%] justify-center'>
                10,000,000
                <p>Đ</p>
              </div>
              <div className='flex w-[20%] justify-center'>
                <button
                  disabled={quantity == 1 ? true : false}
                  onClick={() => {
                    if (quantity >= 1) {
                      setQuantity(quantity - 1)
                    }
                  }}
                  className='w-[20px] h-[40px] border-2 rounded-sm flex items-center justify-center'
                >
                  -
                </button>
                <div className='w-[20px] h-[40px] border-2 rounded-sm flex items-center justify-center'>{quantity}</div>
                <button
                  onClick={() => {
                    setQuantity(quantity + 1)
                  }}
                  className='w-[20px] h-[40px] border-2 rounded-sm flex items-center justify-center'
                >
                  +
                </button>
              </div>
              <div className='flex w-[20%] justify-center'>
                {10000000 * quantity}
                <p>Đ</p>
              </div>
              <div className='flex w-[20%] justify-center'>
                <img className='w-[20px] h-[20px]' src={Close} alt='' />
              </div>
            </div>
            <div className='flex items-center justify-between w-[1200px] mb-[50px]'>
              <div className='w-[20%] justify-center flex items-center'>
                <div className=''>
                  <img className='w-[80px] h-[auto]' src={Dienthoai1} alt='' />
                </div>
                <div>Reno8T 5G</div>
              </div>
              <div className='flex w-[20%] justify-center'>
                10,000,000
                <p>Đ</p>
              </div>
              <div className='flex w-[20%] justify-center'>
                <div className='w-[20px] h-[40px] border-2 rounded-sm flex items-center justify-center'>-</div>
                <div className='w-[20px] h-[40px] border-2 rounded-sm flex items-center justify-center'>1</div>
                <div className='w-[20px] h-[40px] border-2 rounded-sm flex items-center justify-center'>+</div>
              </div>
              <div className='flex w-[20%] justify-center'>
                10,000,000
                <p>Đ</p>
              </div>
              <div className='flex w-[20%] justify-center'>
                <img className='w-[20px] h-[20px]' src={Close} alt='' />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className='flex items-center'>
                <div className='mr-4'></div>
                <div className='border rounded  text-center border-textCart mr-4 text-textCart  w-[250px] h-[30px] flex items-center justify-evenly'>
                  <HiArrowNarrowLeft />
                  TIẾP TỤC XEM SẢN PHẨM
                </div>
                <div className='border rounded  text-center border-primary leading-[30px] mr-4 text-primary  w-[250px] h-[30px]'>
                  CẬP NHẬP GIỎ HÀNG
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex mt-[80px] mb-[80px] justify-between'>
              <div>
                <div className='mt-[20px] mb-[20px] '>
                  <div className=' font-bold text-xl'>Thông tin thanh toán</div>
                </div>
                <div className='mt-[20px] mb-[20px] '>
                  <input className='w-[420px] h-[40px] border-2 p-4 rounded-sm' type='text' placeholder='Họ và tên' />
                </div>
                <div className='mt-[20px] mb-[20px] '>
                  <input
                    className='w-[420px] h-[40px] border-2 p-4 rounded-sm'
                    type='text'
                    placeholder='Địa chỉ giao hàng'
                  />
                </div>
                <div className='mt-[20px] mb-[20px] '>
                  <input
                    className='w-[420px] h-[40px] border-2 p-4 rounded-sm'
                    type='text'
                    placeholder='Số điện thoại'
                  />
                </div>
                <div className='mt-[20px] mb-[20px] '>
                  <input
                    className='w-[420px] h-[40px] border-2 p-4 rounded-sm'
                    type='text'
                    placeholder='thongtin@gmail.com'
                  />
                </div>
              </div>
              <div className='w-[40%] h-[400px] border rounded border-textCart p-6'>
                <div className=' font-bold text-lg mb-4 '>ĐƠN HÀNG CỦA BẠN</div>
                <div className='flex justify-between mb-6'>
                  <div className='font-semibold'>SẢN PHẨM</div>
                  <div className='font-semibold'>TỔNG</div>
                </div>
                <div className='flex justify-between mb-6'>
                  <div className='font-medium'>Reno8T 5G</div>
                  <div className='flex'>
                    <div className='text-textCart'>10,000,000</div>
                    <div className='text-textCart'>Đ</div>
                  </div>
                </div>
                <div className='flex justify-between mb-6'>
                  <div className='font-medium'>Tổng Phụ</div>
                  <div className='flex'>
                    <div className='text-textCart'>10,000,000</div>
                    <div className='text-textCart'>Đ</div>
                  </div>
                </div>
                <div className='flex justify-between mb-6'>
                  <div className='font-medium'>Tổng</div>
                  <div className='flex'>
                    <div className='text-textCart'>10,000,000</div>
                    <div className='text-textCart'>Đ</div>
                  </div>
                </div>
                <div>
                  <div className='flex'>
                    <div>
                      <input type='radio' />
                    </div>
                    <div className='ml-4'>
                      <div className='text-me'>Chuyển khoảng ngân hàng</div>
                    </div>
                  </div>
                  <div>
                    <div className='p-2 leading-[2] text-xs font-light'>
                      Thực hiện thanh toán vào ngay tài khoản của ngân hàng của chúng tôi . Vui lòng sử dụng mã đơn hàng
                      của bạn trong phần nội dụng thanh toán vào . Đơn hàng sẽ được giao khi thanh toán thành công .
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
