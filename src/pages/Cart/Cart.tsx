import Close from '../../assets/images/Close.png'
import Dienthoai1 from '../../assets/images/dienthoai1.jpg'
import Maqrnganghang from '../../assets/images/maqrnganhang.jpg'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { useEffect, useRef, useState, memo } from 'react'
import CartItem from 'src/components/CartItem/CartItem'
import Bill from 'src/components/Bill/Bill'

const Cart = () => {
  const cart_products: any = [
    {
      id: 1,
      img: Dienthoai1,
      name: 'Product1',
      price: 10.99,
      category: 'Electronics',
      quantity: 1
    },
    {
      id: 2,
      img: Dienthoai1,
      name: 'Product2',
      price: 19.99,
      category: 'Clothing',
      quantity: 1
    },
    {
      id: 3,
      img: Dienthoai1,
      name: 'Product3',
      price: 19.99,
      category: 'Clothing',
      quantity: 1
    }
  ]

  const [quantity, setQuantity] = useState(1)
  const [hidden, setHidden] = useState(false)
  const [users, setUsers] = useState([])
  console.log(users)

  const [products, setProducts] = useState(cart_products)

  const handlerPaymentClick = () => {
    setHidden(true)
  }
  const handlerPaymentRemove = () => {
    setHidden(false)
  }

  const abc = users

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

  return (
    <div>
      <div>
        <div>
          <div className='flex mb-7'>
            {/* <div className='mobile:hidden'> Bạn có ưu đãi chứ?</div>
            <div className='mobile:hidden ml-3 text-textCart'> Ấn vào đây để nhập mã</div> */}
          </div>
          <div>
            <div className='mobile:px-4 mobile:min-w-[350px] mobile:max-w-[450px] flex mb-[50px]  w-[1200px] h-[50px]  shadow-[0_30px_100px_-15px_rgba(0,0,0,0.2)]'>
              <div className='flex  items-center  mobile:w-[18.4%] mobile:text-xs w-[14.3%] text-center font-bold'>
                <input
                  type='checkbox'
                  id='checked_all'
                  checked={!users.some((user) => user?.isChecked !== true)}
                  onChange={handleChange}
                  name='checked_all'
                />
                <label className='ml-4 mobile:ml-1' htmlFor='checked_all'>
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
            {users.map((product) => (
              <CartItem key={product.id} product={product} handleChange={handleChange} />
            ))}
          </div>
          <div></div>
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
              <Bill
                handlerPaymentClick={handlerPaymentClick}
                hidden={hidden}
                handlerPaymentRemove={handlerPaymentRemove}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
