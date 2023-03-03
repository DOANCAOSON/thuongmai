import React from 'react'
import { sortBy } from 'src/constants/product'
import { QueryConfigS } from 'src/pages/ProductList/ProductList'
import classNames from 'classnames'
import { ProductListComfig } from 'src/types/product.type'
interface Props {
  queryConfig: QueryConfigS
}
const SortProductList = ({ queryConfig }: Props) => {
  const { sort_by = sortBy.createdAt } = queryConfig
  const isActiveSortBy = (sortByValue: Exclude<ProductListComfig['sort_by'], undefined>) => {
    return sort_by === sortByValue
  }
  return (
    <section className='mb-3 flex gap-[20px]'>
      <button
        className={classNames('bg-green-200', {
          'bg-red-200': isActiveSortBy(sortBy.view)
        })}
      >
        Phổ biến
      </button>
      <button>Mới nhất</button>
      <button>Bán chạy</button>
    </section>
  )
}

export default SortProductList
