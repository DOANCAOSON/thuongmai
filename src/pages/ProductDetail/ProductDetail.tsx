import Banner2 from 'src/assets/images/Banner2.png'
import BigItem from 'src/components/BigItem/BigItem'
import Button from 'src/components/Button'
import MainImage from 'src/assets/images/MainImage.png'
import MainImage2 from 'src/assets/images/1.png'
import ProductItem from 'src/components/ProductItem/ProductItem'
const ProductDetail = () => {
  return (
    <div className='pb-[50px] mobile:w-[100%] p-6'>
      <div className='h-[140px] mobile:w-[100%] mb-10 rounded-[25px] w-[100%] relative'>
        <img src={Banner2} alt='' />
        <h1 className='font-[700] text-[40px] absolute mobile:text-[20px] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-white'>
          Education
        </h1>
      </div>
      <section className='mobile:w-[100%] mobile:flex mobile:justify-center mobile:mb-[30px] mb-[165px]'>
        <BigItem type='big'></BigItem>
      </section>
      <section className=' mobile:w-[100%] flex gap-[55%] py-[19px] mb-[25px] '>
        <div className='flex gap-[60px] items-center mobile:gap-[30px]'>
          <div className='cursor-pointer text-violet'>Campgain</div>
          <div className='cursor-pointer'>Comments</div>
        </div>
        <div className='mobile:hidden'>
          <Button color='primary' type='small'>
            Trở về
          </Button>
        </div>
      </section>
      <section className='mobile:w-[100%] py-[10px] mobile:flex-col flex justify-between mb-[70px]'>
        <div className='w-[605px] mobile:w-[327px]'>
          <h1 className='text-[18px] font-[600] mb-[20px]'>STORY</h1>
          <div className='h-[400px] mobile:w-[100%] mobile:h-[216px] mb-[20px]'>
            <img src={MainImage} alt='' />
          </div>
          <div className='px-[30px] mobile:text-[12px] mobile:leading-[18px] text-text-color mb-5 py-[10px] font-[400] text-[16px] leading-[26px]'>
            Capture everything in 4k, with extended battery life and pro-g inspired features. Choose from three 4k
            recording modes: UHD, HD and cinematic 24p. Use the Wi-Fi feature to connect and stream your footage
            wirelessly directly to your iOS and Android smartphones or tablets for instant sharing. The monitor has a
            3.5 touch screen for easy navigation and built-in wifi that automatically connects to the last used
            smartphone or tablet once paired.
          </div>
          <div className='h-[400px] mobile:w-[100%] mobile:h-[216px] mb-[20px]'>
            <img src={MainImage2} alt='' />
          </div>
        </div>
        <div className='w-[441px] mobile:w-[327px]'>
          <h1 className='text-[18px] font-[600] mb-[20px]'>Sản phẩm tương tự</h1>
          <div className='flex flex-col gap-y-[60px]'>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
          </div>
        </div>
      </section>
      <section className='mb-[20px] mobile:w-[327px] '>
        <h1 className='font-[600] text-[18px] leading-7 mb-[20px]'>Popular Campaign</h1>
        <div className='gap-[30px] grid grid-cols-4 mobile:flex mobile:w-[100%] mobile:overflow-x-auto'>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
