import React, { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'
import Close from '../../assets/images/Close.png'
import Maqrnganghang from '../../assets/images/maqrnganhang.jpg'

interface Props {
  handlerPaymentClick: () => void
  handlerPaymentRemove: () => void
  hidden: boolean
}

function Bill({ handlerPaymentClick, hidden, handlerPaymentRemove }: Props) {
  const { cart } = useContext(AppContext)
  console.log(cart)

  return (
    <div className='mobile:p-5 flex justify-end mobile:justify-start'>
      <div className='w-[50%] h-[auto] mobile:w-[95%] border rounded border-textCart p-6'>
        <div className=' font-bold text-lg mb-4'>ĐƠN HÀNG CỦA BẠN</div>
        <div className='flex justify-between mb-6'>
          <div className='font-semibold'>SẢN PHẨM</div>
          <div className='font-semibold'>TỔNG</div>
        </div>
        <div className='flex justify-between mb-6'>
          <div className='font-medium'>Reno8T 5G</div>
          <div className='flex'>
            <div className='text-textCart'>0</div>
            <div className='text-textCart'>Đ</div>
          </div>
        </div>
        <div className='flex justify-between mb-6'>
          <div className='font-medium'>Tổng Phụ</div>
          <div className='flex'>
            <div className='text-textCart'>0</div>
            <div className='text-textCart'>Đ</div>
          </div>
        </div>
        <div className='flex justify-between mb-6'>
          <div className='font-medium'>Tổng</div>
          <div className='flex'>
            <div className='text-textCart'>0</div>
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
            <div className='p-2 mobile:p-0 leading-[2] text-xs font-light'>
              Thực hiện thanh toán vào ngay tài khoản của ngân hàng của chúng tôi . Vui lòng sử dụng mã đơn hàng của bạn
              trong phần nội dụng thanh toán vào . Đơn hàng sẽ được giao khi thanh toán thành công .
            </div>
          </div>
          <div className='flex justify-end'>
            <div
              onClick={handlerPaymentClick}
              className='bg-primary w-[120px] h-[40px] flex justify-center items-center rounded-sm text-textColorwhite'
            >
              Thanh toán
            </div>
          </div>
          <div>
            <div
              className={`${
                hidden === false ? 'hidden' : 'block'
              } fixed top-0 left-0 right-0 bottom-0 z-40 bg-active flex justify-center items-center} `}
            >
              <div className='flex w-[800px] h-[500px] mobile:w-[100%] mobile:h-[500px] mobile:mt-[150px] rounded bg-white mt-[100px]'>
                <div className='w-[100%] h-[100%]'>
                  <div className='w-[100%] h-[40px] flex justify-end '>
                    <div className='mr-4 mt-4 mobile:mr-[100px] '>
                      <img onClick={handlerPaymentRemove} src={Close} alt='' />
                    </div>
                  </div>
                  <div className='flex justify-between items-center '>
                    <div className='w-[50%] mobile:w-[100%]'>
                      <div className='mt-10'>
                        <div className='text-primary text-center text-xl font-semibold'>Thanh toán khi nhận hàng</div>
                      </div>
                      <div className='p-4'>
                        <div className='text-textBlack mb-2 flex h-[40px] '>
                          <div className='w-[40%]'>
                            <div>Họ và tên :</div>
                          </div>
                          <div className='w-[60%]'>
                            <div>Đoàn Cao Sơn</div>
                          </div>
                        </div>
                        <div className='text-textBlack mb-2 flex h-[40px]'>
                          <div className='w-[40%]'>
                            <div>Số điện thoại :</div>
                          </div>
                          <div className='w-[60%]'>
                            <div>0935982856</div>
                          </div>
                        </div>
                        <div className='text-textBlack mb-2 flex h-[40px]'>
                          <div className='w-[40%]'>
                            <div>Địa Chỉ :</div>
                          </div>
                          <div className='w-[50%] mobile:w-[40%]'>
                            <div className='text-left'>144/9 Tố Hữu, Hòa Cường Nam, Hải Châu, Đà Nẵng.</div>
                          </div>
                        </div>
                        <div className='text-textBlack mb-2 flex h-[40px]'>
                          <div className='w-[40%]'>
                            <div>Ngày Thanh Toán :</div>
                          </div>
                          <div className='w-[60%]'>
                            <div>2/3/2023</div>
                          </div>
                        </div>
                        <div className='text-textBlack mb-2 flex h-[40px]'>
                          <div className='w-[40%]'>
                            <div>Giờ Thanh Toán :</div>
                          </div>
                          <div className='w-[60%]'>
                            <div>21h30</div>
                          </div>
                        </div>
                        <div className='text-textBlack mb-2 flex h-[40px]'>
                          <div className='w-[40%]'>
                            <div>Mã Thanh Toán :</div>
                          </div>
                          <div className='w-[60%]'>
                            <div>123123123123</div>
                          </div>
                        </div>

                        <div className='text-textBlack mb-2 flex h-[40px] justify-center'>
                          <div
                            // onClick={handlerPaymentClick}
                            className='bg-primary w-[120px] h-[40px] flex justify-center items-center rounded-sm text-textColorwhite'
                          >
                            Thanh toán
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='h-[450px] w-[2%] flex justify-center items-center mobile:hidden '>
                      <div className='bg-textBlack h-[80%] w-[1%] flex justify-center items-center m-auto'></div>
                    </div>
                    <div className='w-[49%] mobile:hidden'>
                      <div className='mt-10'>
                        <div className='text-primary text-center text-xl font-semibold'>Thanh Toán bằng ngân hàng</div>
                        <div>
                          <div className=' flex justify-center items-center'>
                            <div className='w-[250px]'>
                              <img src={Maqrnganghang} alt='' />
                            </div>
                          </div>
                          <div className='flex w-[100%]'>
                            <div className='m-auto'>
                              <div className='mb-2 text-xs'>Vui lòng điền thông tin thanh toán</div>
                              <div className='mb-2 text-xs'>Cú pháp : MASANPHAM_TENSAPHAM_TENTAIKHOAN</div>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default Bill
