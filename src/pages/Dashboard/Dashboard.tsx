import { useQuery } from 'react-query'
import { getProduct } from 'src/apis/product.api'
import ProductItem from 'src/components/ProductItem/ProductItem'

const Dashboard = () => {
  const queryConfig = {
    page: 1,
    limit: 4,
    sort_by: 'countInStock'
  }
  const queryConfigS = {
    page: 1,
    limit: 4,
    sort_by: 'createdAt'
  }
  const { data: productsPopullarData } = useQuery({
    queryKey: ['productList', queryConfig],
    queryFn: () => {
      return getProduct(queryConfig)
    }
  })
  const { data: productsRecentData } = useQuery({
    queryKey: ['productList', queryConfigS],
    queryFn: () => {
      return getProduct(queryConfigS)
    }
  })
  return (
    <div className='flex'>
      <div className='mobile:ml-[30px]'>
        {/* <section className='mb-[30px] '>
          <BigItem></BigItem>
        </section> */}
        <section className='mb-[20px] mobile:w-[350px] '>
          <h1 className='font-[600] text-[18px] leading-7 mb-[20px]'>Sản phẩm phổ biến</h1>
          <div className='gap-[30px] grid grid-cols-4 mobile:flex mobile:w-[100%] mobile:overflow-x-auto'>
            {productsPopullarData?.data.data.map((item) => {
              return (
                <div key={item._id}>
                  <ProductItem product={item}></ProductItem>
                </div>
              )
            })}
          </div>
        </section>
        <section className='mb-[20px] mobile:w-[350px]'>
          <h1 className='font-[600] text-[18px] leading-7 mb-[20px]'>Sản phẩm mới nhất</h1>
          <div className='gap-[30px] grid grid-cols-4 mobile:flex mobile:w-[100%] mobile:overflow-x-auto'>
            {productsRecentData?.data.data.map((item) => {
              return (
                <div key={item._id}>
                  <ProductItem product={item}></ProductItem>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard
