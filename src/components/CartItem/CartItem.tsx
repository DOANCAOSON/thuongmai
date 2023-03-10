import { run } from 'node:test'
import React, { useContext, useEffect, useState } from 'react'
import Close from 'src/assets/images/Close.png'
import { AppContext } from 'src/contexts/app.context'
import Dienthoai1 from '../../assets/images/dienthoai1.jpg'

interface Props {
  product: string
  handleChange: () => void
}

function CartItem({ cloneArray, setArray, setBill, bill }: Props) {
  const [isChecked, setIsChecked] = useState(false)
  const [term, setTerm] = useState(false)
  const { setCart } = useContext(AppContext)

  const giam = (quantity, id, price, checked) => {
    console.log('giam')
    let a = quantity - 1
    const newData = cloneArray.map((item) => (item.id === id ? { ...item, quantity: a } : item))
    setArray(newData)
  }

  const tang = (quantity, id, price, checked) => {
    console.log('tang')
    let a = quantity + 1

    const newData = cloneArray.map((item) => (item.id === id ? { ...item, quantity: a } : item))
    setArray(newData)
  }

  const handlechangecheckbox = (checked, id, target) => {
    let c = checked
    const newData = cloneArray.map((item) => (item.id === id ? { ...item, checked: target } : item))

    setArray(newData)
  }

  const handlechangecheckboxall = (target) => {
    setIsChecked(!isChecked)

    let c = target

    if (target === true) {
      const newData = cloneArray.map((item) => {
        if (c === true) {
          let d = (item.checked = true)
          return { ...item, quantity: d }
        }
      })

      setArray(newData)
    }

    if (target === false) {
      const newData = cloneArray.map((item) => {
        if (c === false) {
          let f = (item.checked = false)
          return { ...item, quantity: f }
        }
      })
      setArray(newData)
    }

    setIsChecked(!isChecked)
    setArray(cloneArray)
  }

  const isAllTrue = cloneArray.every((item) => item.checked)

  //lọc sản phẩm đã đc checked có thuộc tính bằng true
  const filteredUsers = cloneArray.filter((user) => {
    const a = user.checked === true
    return a
  })

  console.log(filteredUsers)
  useEffect(() => {
    setCart(filteredUsers)
  }, [cloneArray])

  return (
    <table className='product-list w-[1200px]'>
      <thead>
        <tr>
          <th className='flex'>
            <label style={{ paddingLeft: '0px' }} className='container'>
              <input
                type='checkbox'
                checked={isAllTrue}
                onChange={(e) => {
                  const target = e.target.checked
                  handlechangecheckboxall(target)
                }}
              />
              <span className={isAllTrue ? 'checkmark' : 'uncheckmark'}></span>
            </label>
          </th>
          <th>Tên</th>
          <th>Hình ảnh</th>
          <th>Giá</th>
          <th>Số lượng</th>
          <th>Số tiền</th>
          <th>Xóa</th>
        </tr>
      </thead>
      <tbody>
        {cloneArray.map((item) => (
          <tr key={item.id}>
            <td className='flex'>
              <label className='container' style={{ paddingLeft: '0px' }}>
                <input
                  type='checkbox'
                  name=''
                  id=''
                  checked={item.checked}
                  onChange={(e) => {
                    const target = e.target.checked
                    handlechangecheckbox(item.checked, item.id, target)
                  }}
                />
                <span className={item.checked ? 'checkmark' : 'uncheckmark'} style={{ top: '50%' }}></span>
              </label>
            </td>
            <td className=''>
              <div className='mr-4'>{item.name}</div>
            </td>
            <td className=''>
              <img src={Dienthoai1} alt='' className='h-[80px] w-[80px] block m-auto' />
            </td>
            <td>{item.price}</td>
            <td>
              <button
                onClick={() => {
                  giam(item.quantity, item.id, item.price, item.checked)
                }}
              >
                -
              </button>
              {item.quantity}
              <button onClick={() => tang(item.quantity, item.id, item.price, item.checked)}>+</button>
            </td>
            <td>{}</td>
            <td>Xóa sản phẩm</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CartItem
