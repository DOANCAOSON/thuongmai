import React, { useState } from 'react'
import Close from 'src/assets/images/Close.png'

interface Props {
  product: string
  handleChange: () => void
}

function CartItem({ product, handleChange }: Props) {
  //hàm sử lý tăng giảm trong cart
  const [soluong, setSoluong] = useState(product)
  console.log(soluong)

  const updateQuantity = (opt) => {
    if (opt === '+') {
      setSoluong({ ...soluong, quantity: soluong.quantity + 1 })
    }
    if (opt === '-') {
      setSoluong({ ...soluong, quantity: soluong.quantity - 1 })
    }
  }
  return (
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
            onClick={() => updateQuantity('-')}
            className='w-[20px] h-[40px] border-2 mobile:w-[14px] mobile:h-[28px] rounded-sm flex items-center justify-center'
          >
            -
          </button>
          <div className='w-[20px] h-[40px] mobile:w-[14px] mobile:h-[28px] border-2 rounded-sm flex items-center justify-center'>
            {soluong.quantity}
          </div>
          <button
            onClick={() => updateQuantity('+')}
            className='w-[20px] h-[40px] mobile:w-[14px] mobile:h-[28px] border-2 rounded-sm flex items-center justify-center'
          >
            +
          </button>
        </div>
        <div className='flex w-[14.3%] mobile:w-[27%] justify-center'>
          {product.price * soluong.quantity}
          <p>Đ</p>
        </div>
        <div className='flex w-[14.3%] mobile:w-[27%] mobile:mr-9 justify-center'>
          <img className='w-[20px] h-[20px]' src={Close} alt='' />
        </div>
      </div>
    </div>
  )
}

export default CartItem
