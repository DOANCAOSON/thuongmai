import React from 'react'
import { FormatNumber } from 'src/hooks/useFormatNumber'
import { Purchase } from 'src/types/purchase.type'
import { getProfileFromLS } from 'src/utils/auth'
import Close from '../../assets/images/Close.png'
import Maqrnganghang from '../../assets/images/maqrnganhang.jpg'

interface Props {
  handlerPaymentClick: () => void
  handlerPaymentRemove: () => void
  hidden: boolean
  checkedPurchasesCount: number
  totalCheckedPurchasePrice: number
  totalCheckedPurchasePriceBeforeDiscount: number
  extendedPurchases: Purchase[]
  handleBuyPurchases: () => void
  disabled: boolean
}

function Bill({
  totalCheckedPurchasePrice,
  totalCheckedPurchasePriceBeforeDiscount,
  handlerPaymentClick,
  hidden,
  handlerPaymentRemove,
  checkedPurchasesCount,
  handleBuyPurchases,
  disabled
}: Props) {
  const profileAccessToken = getProfileFromLS()
  return (
    <div className='mobile:p-0 flex justify-end mobile:justify-start'>
      <div className='w-[50%] h-[auto] mobile:w-[95%] border rounded border-textCart p-6'>
        <div className=' font-bold text-lg mb-4'>ĐƠN HÀNG CỦA BẠN</div>
        <div className='flex justify-between mb-6'>
          <div className='font-semibold'>Tổng sản phẩm:</div>
          <div className='font-semibold'>{checkedPurchasesCount} sản phẩm</div>
        </div>
        <div className='flex justify-between mb-6'>
          <div className='font-medium'>Giá gốc:</div>
          <div className='flex'>
            <div className='text-textCart'>{FormatNumber(totalCheckedPurchasePrice)}</div>
            <div className='text-textCart'>đ</div>
          </div>
        </div>
        <div className='flex justify-between mb-6'>
          <div className='font-medium'>Tiết kiệm:</div>
          <div className='flex'>
            <div className='text-textCart'>
              {FormatNumber(totalCheckedPurchasePrice - totalCheckedPurchasePriceBeforeDiscount)}
            </div>
            <div className='text-textCart'>đ</div>
          </div>
        </div>
        <div className='flex justify-between mb-6'>
          <div className='font-medium'>Tổng thanh toán:</div>
          <div className='flex'>
            <div className='text-textCart'>{FormatNumber(totalCheckedPurchasePriceBeforeDiscount)}</div>
            <div className='text-textCart'>đ</div>
          </div>
        </div>
        <div>
          <div>
            <div className='p-2 mobile:p-0 leading-[2] text-xs font-light'>
              Thực hiện thanh toán vào ngay tài khoản của ngân hàng của chúng tôi hoặc thanh toán sau khi nhận hàng.
            </div>
          </div>
          <div className='flex justify-end'>
            <button
              onClick={handlerPaymentClick}
              className='bg-primary w-[120px] h-[40px] flex justify-center items-center rounded-sm text-textColorwhite'
            >
              Thanh toán
            </button>
          </div>
          <div>
            <div
              className={`${
                hidden === false ? 'hidden' : 'block'
              } fixed top-0 left-0 right-0 bottom-0 mobile:px-5 z-40 bg-active flex justify-center items-center} `}
            >
              <div className='flex w-[800px] h-[500px] mobile:w-[100%] mobile:h-[400px] mobile:mt-[150px] rounded bg-white mt-[100px]'>
                <div className='w-[100%] h-[100%]'>
                  <div className='w-[100%] h-[40px] flex justify-end '>
                    <button onClick={handlerPaymentRemove} className='mr-4 mt-4'>
                      <img src={Close} alt='' />
                    </button>
                  </div>
                  <div className='flex justify-between items-center '>
                    <div className='w-[50%] mobile:w-[100%]'>
                      <div className='mt-10 mobile:mt-5'>
                        <div className='text-primary text-center text-xl font-semibold'>Thanh toán khi nhận hàng</div>
                      </div>
                      <div className='p-4'>
                        <div className='text-textBlack mb-2 flex h-[40px] '>
                          <div className='w-[40%]'>
                            <div>Họ và tên :</div>
                          </div>
                          <div className=''>
                            <div>{profileAccessToken.name}</div>
                          </div>
                        </div>
                        <div className='text-textBlack mb-2 flex h-[40px]'>
                          <div className='w-[40%]'>
                            <div>Số điện thoại :</div>
                          </div>
                          <div className=''>
                            <div>{profileAccessToken.phone}</div>
                          </div>
                        </div>
                        <div className='text-textBlack mb-2 flex h-[40px]'>
                          <div className='w-[40%]'>
                            <div>Địa Chỉ :</div>
                          </div>
                          <div className=''>
                            <div className='text-left'>{profileAccessToken.address}</div>
                          </div>
                        </div>
                        <div className='text-textBlack mb-2 flex h-[40px]'>
                          <div className='w-[40%]'>
                            <div>Email :</div>
                          </div>
                          <div className=''>
                            <div className='text-left w-full'>{profileAccessToken.email}</div>
                          </div>
                        </div>

                        <div className='text-textBlack mb-2 flex h-[40px] justify-center'>
                          <button
                            disabled={disabled}
                            onClick={handleBuyPurchases}
                            className={`bg-primary w-[120px] h-[40px] flex justify-center items-center rounded-sm text-textColorwhite ${
                              disabled ? 'opacity-70' : ''
                            }`}
                          >
                            Thanh toán
                          </button>
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
