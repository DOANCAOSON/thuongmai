import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='flex gap-x-3'>
      <Link to='/admin/list-product'> Danh sách sản phẩm</Link>
      <Link to='/admin/list-user'> Danh sách người dùng</Link>
      <Link to='/admin/list-order'> Danh sách đơn hàng</Link>
    </div>
  )
}

export default Admin
