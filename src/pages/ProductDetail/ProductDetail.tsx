import BigItem from 'src/components/BigItem/BigItem'
import Button from 'src/components/Button'
import { getProductDetail, getProduct } from 'src/apis/product.api'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getIdFromNameId } from 'src/hooks/useFormatNumber'
import ProductItem from 'src/components/ProductItem/ProductItem'
const ProductDetail = () => {
  const { id: nameId } = useParams()
  const id = getIdFromNameId(nameId as string)
  const { data: productDetailData } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductDetail(id as string)
  })
  const product = productDetailData?.data.data
  const queryConfig = {
    page: 1,
    limit: 3,
    category: product?.category
  }
  const { data: productsSimilarData } = useQuery({
    queryKey: ['productList', queryConfig],
    queryFn: () => {
      return getProduct(queryConfig)
    },
    enabled: Boolean(product),
    staleTime: 3 * 60 * 1000
  })
  const { data: productsData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return getProduct({
        page: 1,
        limit: 5
      })
    },
    enabled: Boolean(product),
    staleTime: 3 * 60 * 1000
  })

  const similarProduct = productsSimilarData?.data.data
  const products = productsData?.data.data

  return (
    <div className='pb-[50px] mobile:w-[100%] p-6'>
      <div className='h-[140px] mobile:w-[100%] mb-10 rounded-[25px] w-[100%] relative'>
        <div className=' h-full overflow-hidden rounded-[25px]'>
          <img
            src='https://niemvuilaptrinh.ams3.cdn.digitaloceanspaces.com/background-css-javascript/Scrolling%20Background%20Effect.png'
            alt=''
          />
        </div>
        <h1 className='font-[700] text-[40px] absolute mobile:text-[20px] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-white'>
          {/* {category ? <div>{category}</div> : null} */}Category
        </h1>
      </div>
      <section className='mobile:w-[100%] mobile:flex mobile:justify-center mobile:mb-[30px] mb-[165px]'>
        <BigItem type='big' product={product}></BigItem>
      </section>
      <section className=' mobile:w-[100%] flex gap-[55%] py-[19px] mb-[25px] '>
        <div className='flex gap-[60px] items-center mobile:gap-[30px]'>
          <div className='cursor-pointer text-violet'>Sản phẩm</div>
          <div className='cursor-pointer'>Bình luận</div>
        </div>
        <div className='mobile:hidden'>
          <Button color='primary' type='small'>
            Trở về
          </Button>
        </div>
      </section>
      <section className='mobile:w-[100%] py-[10px] mobile:flex-col flex justify-between mb-[70px]'>
        <div className='w-[605px] mobile:w-[327px]'>
          <h1 className='text-[18px] font-[600] mb-[20px]'>Mô tả</h1>
          <div className='h-[400px] mobile:w-[100%] mobile:h-[216px] mb-[20px]'>
            <img src={product?.image[0]} alt='' />
          </div>
          <div className='px-[30px] mobile:text-[12px] mobile:leading-[18px] text-text-color mb-5 py-[10px] font-[400] text-[16px] leading-[26px]'>
            {product?.description}
          </div>
          <div className='h-[400px] mobile:w-[100%] mobile:h-[216px] mb-[20px]'>
            <img src={product?.image[1]} alt='' />
          </div>
        </div>
        <div className='w-[441px] mobile:w-[327px]'>
          <h1 className='text-[18px] font-[600] mb-[20px]'>Sản phẩm tương tự</h1>
          <div className='flex flex-col gap-y-[60px]'>
            {similarProduct?.map((item) => (
              <div key={item._id}>
                <ProductItem product={item}></ProductItem>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='mb-[20px] mobile:w-[327px] '>
        <h1 className='font-[600] text-[18px] leading-7 mb-[20px]'>Sản phẩm mới nhất</h1>
        <div className='gap-[30px] grid grid-cols-4 mobile:flex mobile:w-[100%] mobile:overflow-x-auto'>
          {products
            ?.filter((item) => item._id !== product._id)
            .map((item) => (
              <div key={item._id}>
                <ProductItem product={item}></ProductItem>
              </div>
            ))}
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
