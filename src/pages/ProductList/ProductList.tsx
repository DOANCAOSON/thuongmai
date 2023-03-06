import { useQuery } from 'react-query'
import { getCategories } from 'src/apis/category.api'
import { getAllProduct, getProduct } from 'src/apis/product.api'
import Pagination from 'src/components/Pagination'
import ProductItem from 'src/components/ProductItem/ProductItem'
import SortProductList from 'src/components/SortProductList'
import useQueryConfig from 'src/hooks/useQueryConfig'

const ProductList = () => {
  const queryConfig = useQueryConfig()
  const { data: productsData } = useQuery({
    queryKey: ['product', queryConfig],
    queryFn: () => {
      return getProduct(queryConfig)
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })
  const { data: categoriesData } = useQuery({
    queryKey: ['category'],
    queryFn: () => {
      return getCategories()
    }
  })

  const { data: dataAll2 } = useQuery({
    queryFn: () => {
      return getAllProduct()
    }
  })
  return (
    <div className='w-full'>
      {productsData && (
        <>
          <section className='flex justify-center mb-[45px]'>
            <h1 className='font-[700] text-[25px]'>Gồm {dataAll2?.data.data.length} sản phẩm</h1>
          </section>
          <SortProductList categories={categoriesData?.data.data || []} queryConfig={queryConfig}></SortProductList>
          <div className='grid grid-cols-4 mobile:grid-cols-2 mobile:px-4 gap-[30px] mb-[30px]'>
            {productsData.data.data.map((product) => (
              <div className='' key={product._id}>
                <ProductItem product={product}></ProductItem>
              </div>
            ))}
          </div>
          <Pagination queryConfig={queryConfig} pageSize={productsData.data.totalPage}></Pagination>
        </>
      )}
    </div>
  )
}

export default ProductList
