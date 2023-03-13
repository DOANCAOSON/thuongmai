import Logo from '../../assets/images/Logo.png'
import Search from '../../assets/images/Search.png'
import Frame from '../../assets/images/Frame.jpg'
import Bar from '../../assets/images/Bar.png'
import Dashboard from '../../assets/images/Dashboard.png'
import Withdraw from '../../assets/images/Withdraw.png'
import Profile from '../../assets/images/Profile.png'
import Logout from '../../assets/images/Logout.png'
import Close from '../../assets/images/Close.png'
import { useContext, useState } from 'react'
import { createSearchParams, Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { AppContext } from 'src/contexts/app.context'
import Button from '../Button'
import useQueryConfig from 'src/hooks/useQueryConfig'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import omit from 'lodash/omit'
import { useMutation, useQuery } from 'react-query'
import { getUser, logout } from 'src/apis/auth.api'
import { getProfileFromLS } from 'src/utils/auth'
import { User } from 'src/types/user.type'
import { toast } from 'react-toastify'

const schema = yup
  .object({
    name: yup.string().trim().required('Chưa điền tên')
  })
  .required()
type FormData = yup.InferType<typeof schema>
const DashboardHeader = () => {
  const { reset } = useContext(AppContext)
  const navigate = useNavigate()
  const queryConfig = useQueryConfig()
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: ''
    },
    resolver: yupResolver(schema)
  })
  const profileAccessToken = getProfileFromLS()

  const [count, setCount] = useState(false)
  const [modal, setmModal] = useState(false)
  const [profile, setProfile] = useState<User>({})
  useQuery({
    queryKey: ['category', profileAccessToken?._id],
    queryFn: () => getUser(profileAccessToken?._id),
    enabled: profileAccessToken?._id !== undefined,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess: (data: any) => {
      setProfile(data.data.data)
    }
  })
  const { isAuthenticated } = useContext(AppContext)
  const onSubmitSearch = handleSubmit((data) => {
    const config = queryConfig.order
      ? omit(
          {
            ...queryConfig,
            name: data.name
          },
          ['order', 'sort_by']
        )
      : {
          ...queryConfig,
          name: data.name
        }
    navigate({
      pathname: '/product/',
      search: createSearchParams(config).toString()
    })
  })
  const logOutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      reset()
      toast.success('Đăng xuất thành công!')
    }
  })
  const handleLogout = () => {
    logOutMutation.mutate()
    setCount(!count)
  }
  return (
    <div>
      <div className='dashboardHeader flex m-8'>
        <div className='dashboardHeader__left flex w-[50%] mobile:w-[auto] mobile:justify-between relative'>
          <div className='dashboardHeader__left--logo mr-8 mobile:flex mobile:justify-center mobile:items-center'>
            <Link to='/'>
              <img className='mobile:hidden cursor-pointer ' src={Logo} alt='' />
            </Link>
            <button
              onClick={() => {
                setCount(!count)
              }}
              className='hidden mobile:w-[20px] mobile:h-[14px] mobile:block mobile:mt-[18px]'
            >
              <img alt='' src={Bar} />
            </button>
          </div>
          <form
            onSubmit={onSubmitSearch}
            className={`cursor-pointer mobile:w-[217px] mobile:h-[40px] mobile:top-2 mobile:left-[50px] dashboardHeader__left--search flex items-center absolute z-10 bg-textColorwhite rounded-full w-[430px] h-[46px] p-1 pl-3 lr-2 left-[20%] top-1 shadow `}
          >
            <input
              type='text'
              className='text-sm mobile:text-xs w-[85%] z-1'
              placeholder='Nhập tên sản phẩm'
              {...register('name')}
            />
            <button className='bg-bgPrimary w-[72px] h-[40px] rounded-full  flex mobile:w-[42px] mobile:h-[28px]'>
              <img
                alt=''
                src={Search}
                className=' w-[18px] h-[18px] mobile:w-[16px] mobile:h-[16px]'
                style={{ margin: 'auto' }}
              />
            </button>
          </form>
        </div>
        <div className='dashboardHeader__right flex items-center w-[50%] justify-end mobile:justify-start'>
          <div className='cursor-pointer dashboardHeader__right--start mobile:hidden'>
            <Link to={isAuthenticated ? '/product' : '/login'}>
              <Button color='primary'>
                <div className='w-[214px]'>{isAuthenticated ? ' Go shopping' : 'Go to login'}</div>
              </Button>
            </Link>
          </div>
          {isAuthenticated ? (
            <div className='dashboardHeader__right--avatar ml-4 cursor-pointer'>
              <div className=' w-[52px] rounded-full overflow-hidden  h-[52px] mobile:w-[40px] mobile:h-[40px] mobile:ml-8 flex items-center justify-center mobile:absolute mobile:right-4 mobile:top-[40px]'>
                {profile?.avatar ? <img src={profile?.avatar} alt='' /> : <img alt='' className='' src={Frame} />}
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>

      {/* modal */}
      <button
        onClick={() => {
          setmModal(false)
        }}
        style={{ backgroundColor: 'rgba(23, 23, 37, 0.4)' }}
        className={`${modal === false ? 'hidden' : ''} fixed w-[100vw] h-[100vh]  top-0 left-0 flex`}
      ></button>

      {/* mobile */}

      <div
        className={`${
          count ? 'translate-x-0' : 'translate-x-[-100%]'
        } transition-transform pt-10 w-[400px] h-[100vh] bg-white fixed z-[1000] top-0 hidden mobile:block `}
      >
        <div className='dasboardHeader__mobile flex  items-center justify-around'>
          <div className='dasboardHeader__mobile--logo w-[40px] h-[40px]'>
            <img src={Logo} className='w-10 h-10' alt='' />
          </div>
          <div>
            <button
              className='dashboardHeader__right--start'
              onClick={() => {
                setCount(!count)
              }}
            >
              <Link to={isAuthenticated ? '/product' : '/login'}>
                <Button color='primary'>
                  <div className='w-[214px]'>{isAuthenticated ? ' Go shopping' : 'Go to login'}</div>
                </Button>
              </Link>
            </button>
          </div>
          <div className='dashboardHeader__left--logo mr-8 mobile:flex mobile:justify-center mobile:items-center'>
            <button
              onClick={() => {
                setCount(!count)
              }}
              className='w-[20px] h-[20px]'
            >
              <img alt='' src={Close} />
            </button>
          </div>
        </div>
        <div className='dasboardHeader__mobile p-10'>
          <button onClick={() => setCount(!count)}>
            <Link to='/' className='dasboardHeader__mobile--container w-[327px] h-[52px] flex items-center'>
              <div>
                <img alt='' className='w-[24px] h-[24px]' src={Dashboard} />
              </div>
              <p className='ml-5 text-iconColor lg-iconColor text-sm mr-1'>Trang chủ</p>
            </Link>
          </button>
          <button onClick={() => setCount(!count)}>
            <Link to='/cart' className='dasboardHeader__mobile--container w-[327px] h-[52px] flex items-center'>
              <div>
                <img alt='' className='w-[24px] h-[24px]' src={Withdraw} />
              </div>
              <p className='ml-5 text-iconColor text-sm mr-1'>Giỏ hàng</p>
            </Link>
          </button>
          <button onClick={() => setCount(!count)}>
            <Link to='/order' className='dasboardHeader__mobile--container w-[327px] h-[52px] flex items-center'>
              <div className='stroke-[#A2A2A8]'>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M18.1111 8.14286V5.57143C18.1111 4.88944 17.8536 4.23539 17.3951 3.75315C16.9367 3.27092 16.315 3 15.6667 3H3.44444C2.79614 3 2.17438 3.27092 1.71596 3.75315C1.25754 4.23539 1 4.88944 1 5.57143V13.2857C1 13.9677 1.25754 14.6218 1.71596 15.104C2.17438 15.5862 2.79614 15.8571 3.44444 15.8571H5.88889M8.33333 21H20.5556C21.2039 21 21.8256 20.7291 22.284 20.2468C22.7425 19.7646 23 19.1106 23 18.4286V10.7143C23 10.0323 22.7425 9.37825 22.284 8.89601C21.8256 8.41377 21.2039 8.14286 20.5556 8.14286H8.33333C7.68503 8.14286 7.06327 8.41377 6.60485 8.89601C6.14643 9.37825 5.88889 10.0323 5.88889 10.7143V18.4286C5.88889 19.1106 6.14643 19.7646 6.60485 20.2468C7.06327 20.7291 7.68503 21 8.33333 21ZM16.8889 14.5714C16.8889 15.2534 16.6313 15.9075 16.1729 16.3897C15.7145 16.8719 15.0928 17.1429 14.4444 17.1429C13.7961 17.1429 13.1744 16.8719 12.716 16.3897C12.2575 15.9075 12 15.2534 12 14.5714C12 13.8894 12.2575 13.2354 12.716 12.7532C13.1744 12.2709 13.7961 12 14.4444 12C15.0928 12 15.7145 12.2709 16.1729 12.7532C16.6313 13.2354 16.8889 13.8894 16.8889 14.5714Z'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <p className='ml-5 text-iconColor text-sm mr-1'>Đặt hàng</p>
            </Link>
          </button>
          <button onClick={() => setCount(!count)}>
            <Link to='/profile' className='dasboardHeader__mobile--container w-[327px] h-[52px] flex items-center'>
              <div>
                <img alt='' className='w-[24px] h-[24px]' src={Profile} />
              </div>
              <p className='ml-5 text-iconColor text-sm  mr-1'>Trang cá nhân</p>
            </Link>
          </button>
          <button
            onClick={handleLogout}
            className='dasboardHeader__mobile--container w-[327px] h-[52px] flex items-center'
          >
            <div>
              <img alt='' className='w-[24px] h-[24px]' src={Logout} />
            </div>
            <p className='ml-5 text-iconColor text-sm  mr-1'>Đăng xuất</p>
          </button>{' '}
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
