import { isUndefined, omitBy } from 'lodash'
import { useQuery } from 'react-query'
import { getAllProduct, getProduct } from 'src/apis/product.api'
import Pagination from 'src/components/Pagination'
import ProductItem from 'src/components/ProductItem/ProductItem'
import SortProductList from 'src/components/SortProductList'
import useQueryParams from 'src/hooks/useQueryParams'
import { ProductListComfig } from 'src/types/product.type'
export type QueryConfigS = {
  [key in keyof ProductListComfig]: string
}
const ProductList = () => {
  const queryParams: QueryConfigS = useQueryParams()
  const queryConfig: QueryConfigS = omitBy(
    {
      page: queryParams.page || 1,
      limit: queryParams.limit || 4,
      sort_by: queryParams.sort_by,
      order: queryParams.order
    },
    isUndefined
  )
  const { data } = useQuery({
    queryKey: ['product', queryConfig],
    queryFn: () => {
      return getProduct(queryConfig)
    },
    keepPreviousData: true
  })
  const { data: dataAll2 } = useQuery({
    queryFn: () => {
      return getAllProduct()
    }
  })
  const totalProduct = dataAll2?.data.data.length
  return (
    <div className='w-full'>
      {data && (
        <>
          <section className='flex justify-center mb-[45px]'>
            <h1 className='font-[700] text-[25px]'>Gồm {totalProduct} sản phẩm</h1>
          </section>
          <SortProductList queryConfig={queryConfig}></SortProductList>
          <div className='grid grid-cols-4 gap-[30px] mb-[30px]'>
            {data.data.data.map((product) => (
              <div key={product._id}>
                <ProductItem product={product}></ProductItem>
              </div>
            ))}
          </div>
          <Pagination queryConfig={queryConfig} pageSize={data.data.totalPage}></Pagination>
        </>
      )}
    </div>
  )
}

export default ProductList
