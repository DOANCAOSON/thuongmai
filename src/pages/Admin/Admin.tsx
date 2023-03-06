import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { getCategories } from 'src/apis/category.api'

const Admin = () => {
  const { data: categoriesData } = useQuery({
    queryKey: ['category'],
    queryFn: () => {
      return getCategories()
    }
  })
  const listCategory = categoriesData?.data.data
  return (
    <div className='flex gap-x-3'>
      <div>
        <Link to='/admin/list-product'> Danh sách sản phẩm</Link>
        <Link to='/admin/list-user'> Danh sách người dùng</Link>
        <Link to='/admin/list-order'> Danh sách đơn hàng</Link>
      </div>
      <select onChange={(e) => console.log(e.target.value)}>
        <option value=''>Danh mục</option>
        {listCategory?.map((item: any) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
      <div>
        <form className='flex flex-col'>
          <input type='text' placeholder='tên' />
          <input type='text' placeholder='ảnh' />
          <input type='text' placeholder='giá' />
          <input type='text' placeholder='số lượng' />
          <input type='text' placeholder='giảm giá' />
          <input type='text' placeholder='miêu tả' />
        </form>
      </div>
    </div>
  )
}

export default Admin
