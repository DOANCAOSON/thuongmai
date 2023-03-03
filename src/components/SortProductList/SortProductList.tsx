import React from 'react'
import { sortBy, order as orderConstant } from 'src/constants/product'
import { QueryConfigS } from 'src/pages/ProductList/ProductList'
import classNames from 'classnames'
import { ProductListComfig } from 'src/types/product.type'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { omit } from 'lodash'
interface Props {
  queryConfig: QueryConfigS
}
const SortProductList = ({ queryConfig }: Props) => {
  const { sort_by = sortBy.createdAt, order } = queryConfig
  const navigate = useNavigate()
  const isActiveSortBy = (sortByValue: Exclude<ProductListComfig['sort_by'], undefined>) => {
    return sort_by === sortByValue
  }
  const handleSort = (sortByValue: Exclude<ProductListComfig['sort_by'], undefined>) => {
    navigate({
      pathname: '/product/',
      search: createSearchParams(
        omit(
          {
            ...queryConfig,
            sort_by: sortByValue
          },
          ['order']
        )
      ).toString()
    })
  }

  const handlePriceOrder = (orderValue: Exclude<ProductListComfig['order'], undefined>) => {
    navigate({
      pathname: '/product/',
      search: createSearchParams({
        ...queryConfig,
        sort_by: sortBy.price,
        order: orderValue
      }).toString()
    })
  }

  return (
    <section className='mb-7 flex justify-between pr-10 '>
      <div>
        <select
          className={classNames('py-2 px-4 text-white rounded-[10px] ', {
            'bg-secondary': isActiveSortBy(sortBy.price),
            'bg-bgPrimary': !isActiveSortBy(sortBy.price),
            'hover:opacity-90': !isActiveSortBy(sortBy.price)
          })}
          value={order || ''}
          onChange={(event) => handlePriceOrder(event.target.value as Exclude<ProductListComfig['order'], undefined>)}
        >
          <option className='text-black bg-white' value='' disabled>
            Giá
          </option>
          <option className='text-black bg-white' value={orderConstant.asc}>
            Thấp đến cao
          </option>
          <option className='text-black bg-white' value={orderConstant.desc}>
            Cao đến thấp
          </option>
        </select>
      </div>
      <div className='flex gap-[20px]'>
        <button
          className={classNames('p-2 text-white rounded-[10px] ', {
            'bg-secondary': isActiveSortBy(sortBy.countInStock),
            'bg-bgPrimary': !isActiveSortBy(sortBy.countInStock),
            'hover:opacity-90': !isActiveSortBy(sortBy.countInStock)
          })}
          onClick={() => handleSort(sortBy.countInStock)}
        >
          Phổ biến
        </button>
        <button
          className={classNames('p-2 text-white rounded-[10px] hover:opacity-90', {
            'bg-secondary': isActiveSortBy(sortBy.createdAt),
            'bg-bgPrimary': !isActiveSortBy(sortBy.createdAt),
            'hover:opacity-90': !isActiveSortBy(sortBy.createdAt)
          })}
          onClick={() => handleSort(sortBy.createdAt)}
        >
          Mới nhất
        </button>
        <button
          className={classNames('p-2 text-white rounded-[10px] hover:opacity-90', {
            'bg-secondary': isActiveSortBy(sortBy.selled),
            'bg-bgPrimary': !isActiveSortBy(sortBy.selled),
            'hover:opacity-90': !isActiveSortBy(sortBy.selled)
          })}
          onClick={() => handleSort(sortBy.selled)}
        >
          Bán chạy
        </button>
      </div>
    </section>
  )
}

export default SortProductList
