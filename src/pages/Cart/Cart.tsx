import Close from '../../assets/images/Close.png'
import Dienthoai1 from '../../assets/images/dienthoai1.jpg'
import Maqrnganghang from '../../assets/images/maqrnganhang.jpg'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { useEffect, useRef, useState, memo } from 'react'
import CartItem from 'src/components/CartItem/CartItem'
import Bill from 'src/components/Bill/Bill'

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

const Cart = () => {
  const [quantity, setQuantity] = useState(1)
  const [hidden, setHidden] = useState(false)
  const [users, setUsers] = useState([])
  const [products, setProducts] = useState(cart_products)
  const [array, setArray] = useState(cart_products)
  const cloneArray = [...array]

  //bill
  const [bill, setBill] = useState([])
  console.log(bill)

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
          <div className='flex mb-7'></div>
          <div className='w-[100%]'>
            <CartItem cloneArray={cloneArray} setArray={setArray} setBill={setBill} bill={bill} />
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
