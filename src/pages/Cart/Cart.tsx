import Close from '../../assets/images/Close.png'
import Dienthoai1 from '../../assets/images/dienthoai1.jpg'
import Maqrnganghang from '../../assets/images/maqrnganhang.jpg'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { useEffect, useRef, useState } from 'react'

const Cart = () => {
  const [quantity, setQuantity] = useState(1)
  const [hidden, setHidden] = useState(false)
  const [users, setUsers] = useState([])

  const handlerPaymentClick = () => {
    setHidden(true)
  }
  const handlerPaymentRemove = () => {
    setHidden(false)
  }

  const cart_products: any = [
    {
      id: 1,
      img: Dienthoai1,
      name: 'Product1',
      price: 10.99,
      category: 'Electronics'
    },
    {
      id: 2,
      img: Dienthoai1,
      name: 'Product2',
      price: 19.99,
      category: 'Clothing'
    },
    {
      id: 3,
      img: Dienthoai1,
      name: 'Product3',
      price: 19.99,
      category: 'Clothing'
    }
  ]

  useEffect(() => {
    setUsers(cart_products)
  }, [])

  const handleChange = (e: any) => {
    const { name, checked } = e.target
    if (name === 'checked_all') {
      let tempUser: any = users.map((user: any) => {
        return { ...user, isChecked: checked }
      })
      setUsers(tempUser)
    } else {
      let tempUser: any = users.map((user: any) => (user.name === name ? { ...user, isChecked: checked } : user))
      setUsers(tempUser)
    }
  }

  const productList = users.map((product) => (
    <div key={product.id}>
      <div className='mobile:px-4 flex items-center justify-between w-[1200px] mb-[50px] mobile:min-w-[350px] mobile:max-w-[450px]'>
        <div className='w-[14.3%] mobile:w-[27%]  justify-center flex items-center'>
          <label>
            <input
              type='checkbox'
              name={product.name}
              checked={product?.isChecked || false}
              onChange={handleChange}
              value={product.id}
            />
          </label>
        </div>
        <div className='w-[14.3%] mobile:w-[27%]  justify-center flex items-center'>
          <div className='w-[80px] h-[auto] mobile:w-[60px]'>
            <img className='' src={product.img} alt='' />
          </div>
          <div className='mobile:hidden'>{product.name}</div>
        </div>

        <div className='w-[14.3%] mobile:w-[27%] mobile:hidden  justify-center flex items-center'>
          <div className=''>{product.category} </div>
        </div>
        <div className='flex w-[14.3%] mobile:hidden mobile:w-[27%] mobile:text-xs justify-center'>
          {product.price}
          <p>Đ</p>
        </div>
        <div className='flex w-[14.3%] mobile:w-[27%] mobile:text-xs justify-center'>
          <button
            disabled={quantity == 1 ? true : false}
            onClick={() => {
              if (quantity >= 1) {
                setQuantity(quantity - 1)
              }
            }}
            className='w-[20px] h-[40px] border-2 mobile:w-[14px] mobile:h-[28px] rounded-sm flex items-center justify-center'
          >
            -
          </button>
          <div className='w-[20px] h-[40px] mobile:w-[14px] mobile:h-[28px] border-2 rounded-sm flex items-center justify-center'>
            {quantity}
          </div>
          <button
            onClick={() => {
              setQuantity(quantity + 1)
            }}
            className='w-[20px] h-[40px] mobile:w-[14px] mobile:h-[28px] border-2 rounded-sm flex items-center justify-center'
          >
            +
          </button>
        </div>
        <div className='flex w-[14.3%] mobile:w-[27%] justify-center'>
          {product.price * quantity}
          <p>Đ</p>
        </div>
        <div className='flex w-[14.3%] mobile:w-[27%] mobile:mr-9 justify-center'>
          <img className='w-[20px] h-[20px]' src={Close} alt='' />
        </div>
      </div>
    </div>
  ))

  return (
    <div>
      <div>
        <div>
          <div className='flex mb-7'>
            <div className='mobile:hidden'> Bạn có ưu đãi chứ?</div>
            <div className='mobile:hidden ml-3 text-textCart'> Ấn vào đây để nhập mã</div>
          </div>
          <div>
            <div className='mobile:px-4 mobile:min-w-[350px] mobile:max-w-[450px] flex mb-[50px]  w-[1200px] h-[50px]  shadow-[0_30px_100px_-15px_rgba(0,0,0,0.2)]'>
              <div className='pt-4 mobile:w-[18.4%] mobile:text-xs w-[14.3%] text-center font-bold'>
                <input
                  type='checkbox'
                  id='checked_all'
                  checked={!users.some((user) => user?.isChecked !== true)}
                  onChange={handleChange}
                  name='checked_all'
                />
                <label className='ml-4' htmlFor='checked_all'>
                  Chọn tất cả
                </label>
              </div>
              <div className='pt-4 mobile:w-[18.4%] mobile:text-xs w-[14.3%] text-center font-bold'>SẢN PHẨM</div>
              <div className='pt-4 mobile:w-[18.4%] mobile:text-xs w-[14.3%] text-center font-bold mobile:hidden'>
                Danh muc
              </div>
              <div className='pt-4 mobile:w-[18.4%] mobile:text-xs mobile:hidden w-[14.3%] text-center font-bold'>
                GIÁ
              </div>
              <div className='pt-4 mobile:w-[18.4%] mobile:text-xs w-[14.3%] text-center font-bold'>SỐ LƯỢNG</div>
              <div className='pt-4 mobile:w-[18.4%] mobile:text-xs w-[14.3%] text-center font-bold'>TỔNG</div>
              <div className='pt-4 mobile:w-[18.4%] mobile:text-xs w-[14.3%] text-center font-bold'>XÓA</div>
            </div>

            {/* map */}
            {productList}
          </div>
          <div>
            <div>
              <div className='flex items-center'>
                <div className='mr-4'></div>
                <div className='border rounded  text-center border-textCart mr-4 text-textCart  w-[250px] h-[30px] mobile:w-[160px] mobile:h-[30px] mobile:text-xs flex items-center justify-evenly'>
                  <HiArrowNarrowLeft />
                  TIẾP TỤC XEM SẢN PHẨM
                </div>
                <div className='border rounded  text-center border-primary leading-[30px] mr-4 text-primary  w-[250px] h-[30px] mobile:w-[160px] mobile:h-[30px] mobile:text-xs flex items-center justify-evenly'>
                  CẬP NHẬP GIỎ HÀNG
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex mt-[80px] mb-[80px] justify-between mobile:block'>
              <div className='p-5'>
                <div className='mt-[20px] mb-[20px] '>
                  <div className=' font-bold text-xl'>Thông tin thanh toán</div>
                </div>
                <div className='mt-[20px] mb-[20px] '>
                  <input
                    className='w-[420px] h-[40px] mobile:w-[330px] border-2 p-4 rounded-sm'
                    type='text'
                    placeholder='Họ và tên'
                  />
                </div>
                <div className='mt-[20px] mb-[20px] '>
                  <input
                    className='w-[420px] h-[40px] mobile:w-[330px] border-2 p-4 rounded-sm'
                    type='text'
                    placeholder='Địa chỉ giao hàng'
                  />
                </div>
                <div className='mt-[20px] mb-[20px] '>
                  <input
                    className='w-[420px] h-[40px] mobile:w-[330px] border-2 p-4 rounded-sm'
                    type='text'
                    placeholder='Số điện thoại'
                  />
                </div>
                <div className='mt-[20px] mb-[20px] '>
                  <input
                    className='w-[420px] h-[40px] mobile:w-[330px] border-2 p-4 rounded-sm'
                    type='text'
                    placeholder='thongtin@gmail.com'
                  />
                </div>
              </div>
              <div className='mobile:p-5 flex justify-end mobile:justify-start'>
                <div className='w-[50%] h-[auto] mobile:w-[80%] border rounded border-textCart p-6'>
                  <div className=' font-bold text-lg mb-4'>ĐƠN HÀNG CỦA BẠN</div>
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
                      <div className='p-2 mobile:p-0 leading-[2] text-xs font-light'>
                        Thực hiện thanh toán vào ngay tài khoản của ngân hàng của chúng tôi . Vui lòng sử dụng mã đơn
                        hàng của bạn trong phần nội dụng thanh toán vào . Đơn hàng sẽ được giao khi thanh toán thành
                        công .
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
                                  <div className='text-primary text-center text-xl font-semibold'>
                                    Thanh toán khi nhận hàng
                                  </div>
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
                                  <div className='text-primary text-center text-xl font-semibold'>
                                    Thanh Toán bằng ngân hàng
                                  </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
