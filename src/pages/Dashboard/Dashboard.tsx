import BigItem from 'src/components/BigItem/BigItem'
import ProductItem from 'src/components/ProductItem/ProductItem'
const Dashboard = () => {
  return (
    <div className='flex'>
      <div className='mobile:ml-[30px]'>
        <section className='mb-[30px] '>
          <BigItem></BigItem>
        </section>
        <section className='mb-[20px] mobile:w-[350px] '>
          <h1 className='font-[600] text-[18px] leading-7 mb-[20px]'>Popular Campaign</h1>
          <div className='gap-[30px] grid grid-cols-4 mobile:flex mobile:w-[100%] mobile:overflow-x-auto'>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
          </div>
        </section>
        <section className='mb-[20px] mobile:w-[350px]'>
          <h1 className='font-[600] text-[18px] leading-7 mb-[20px]'>Recent Campaign</h1>
          <div className='gap-[30px] grid grid-cols-4 mobile:flex mobile:w-[100%] mobile:overflow-x-auto'>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard
