import { Link } from 'react-router-dom'
import MainImage from 'src/assets/images/MainImage.png'
import Vector from 'src/assets/images/Vector.png'
import Navbar from 'src/components/Navbar'
import ProductItem from 'src/components/ProductItem/ProductItem'
const Dashboard = () => {
  return (
    <div className='flex gap-[40px] '>
      <Navbar></Navbar>
      <div className='mobile:ml-[30px]'>
        <section className='mb-[30px] '>
          <Link to='/login' className='m-auto'>
            <h1 className='font-[600] text-[18px] leading-7 mb-[20px]'>
              Your Campaign <span className='text-violet'>(4)</span>
            </h1>
            <div className='flex mobile:flex-col mobile:w-[327px]'>
              <div className='w-[583px] mobile:w-[100%] h-[266px] mobile:h-[210px]'>
                <img src={MainImage} alt='' />
              </div>
              <div className='flex flex-col gap-y-[12px] mobile:px-0 px-[30px] py-[17px] w-[495px] mobile:w-[100%]'>
                <div className='flex gap-[10px] items-center'>
                  <div className='w-6 h-6 py-[2px]'>
                    <img src={Vector} alt='' />
                  </div>
                  <p className='text-[14px] font-[500] leading-5 text-text-color'>Architecture</p>
                </div>
                <h1 className='font-[700] mobile:font-[600] mobile:text-[16px] text-[20px] leading-7'>
                  Remake - We Make architecture exhibition
                </h1>
                <p className='leading-[22px] mobile:text-[12px] text-text-color'>
                  Remake - We Make: an exhibition about architectures social agency in the face of urbanisation
                </p>
                <div>
                  <div className='h-[5px] bg-[#EFEFEF] rounded-[5px]'>
                    <div className='bg-primary w-[70%] h-[100%] rounded-[5px]'></div>
                  </div>
                </div>
                <div className='flex gap-[65px] mobile:gap-[31px]'>
                  <div className='flex flex-col'>
                    <h2 className='font-[700] text-[20px] mobile:text-[16px]'>$2,000</h2>
                    <div className='text-textColor4 text-[16px] mobile:text-[14px] leading-7'>Raised of $2,500</div>
                  </div>
                  <div className='flex flex-col'>
                    <h2 className='font-[700] text-[20px] mobile:text-[16px]'>173</h2>
                    <div className='text-textColor4 text-[16px] mobile:text-[14px] leading-7'>Total backers</div>
                  </div>
                  <div className='flex flex-col'>
                    <h2 className='font-[700] text-[20px] mobile:text-[16px]'>30</h2>
                    <div className='text-textColor4 text-[16px] mobile:text-[14px] leading-7'>Days left</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
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
