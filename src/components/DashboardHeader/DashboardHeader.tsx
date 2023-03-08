import Logo from '../../assets/images/Logo.png'
import Search from '../../assets/images/Search.png'
import Up from '../../assets/images/Up.png'
import Frame from '../../assets/images/Frame.png'
import Bar from '../../assets/images/Bar.png'
import amous from '../../assets/images/amous.png'
import Dashboard from '../../assets/images/Dashboard.png'
import Withdraw from '../../assets/images/Withdraw.png'
import Profile from '../../assets/images/Profile.png'
import Logout from '../../assets/images/Logout.png'
import Light from '../../assets/images/Light.png'
import Close from '../../assets/images/Close.png'
import PlaceHolder from '../../assets/images/PlaceHolder.png'
import PlaceHolder1 from '../../assets/images/PlaceHolder1.png'
import PlaceHolder2 from '../../assets/images/PlaceHolder2.png'
import PlaceHolder3 from '../../assets/images/PlaceHolder3.png'
import { useContext, useState } from 'react'
import { createSearchParams, Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { AppContext } from 'src/contexts/app.context'
import Button from '../Button'
import useQueryConfig from 'src/hooks/useQueryConfig'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { omit } from 'lodash'

const schema = yup
  .object({
    name: yup.string().trim().required('Chưa điền tên')
  })
  .required()
type FormData = yup.InferType<typeof schema>
const DashboardHeader = () => {
  const navigate = useNavigate()
  const queryConfig = useQueryConfig()
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: ''
    },
    resolver: yupResolver(schema)
  })
  const [count, setCount] = useState(false)
  const [modal, setmModal] = useState(false)

  const [dsearchModal, setdSearchModal] = useState(false)

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
              onFocus={() => setmModal(true)}
              type='text'
              className='text-sm mobile:text-xs w-[85%] z-1'
              placeholder='Do Fundrise now'
              {...register('name')}
              // onChange={handleChangeSearch}
            />
            <div
              className={`${
                modal === false ? 'hidden' : ''
              } mobile:w-[310px] mobile:left-[-54px] w-[843px] h-[auto] top-20 left-0 bg-textColorwhite m-auto rounded-[10px] absolute`}
            >
              <div className='p-3 mt-2'>
                <div className='flex w-[100%] justify-between items-center'>
                  <div>
                    <h1>See All 10.124 fundraisier</h1>
                  </div>
                  <button
                    onClick={() => {
                      setmModal(false)
                    }}
                    className='mobile:w-[18px] mobile:h-[18px] bg-bgClose w-[72px] h-[50px] flex items-center justify-center rounded-lg'
                  >
                    <img className='w-6 h-6 mobile:w-[12px] mobile:h-[12px]' src={Close} alt='' />
                  </button>
                </div>

                {/* itemSearch */}
                <div className='mb-5'>
                  <div className='searchTile flex items-center'>
                    <div className=''>
                      <img src={PlaceHolder} alt='' />
                    </div>
                    <div className='ml-6'>
                      <h2 className='text-textSearch mb-2 text-sm'>Education fun for durgham Family</h2>
                      <p className='text-textsearchColor text-sm'>ByDurgham Family</p>
                    </div>
                  </div>
                </div>
                <div className='mb-5'>
                  <div className='searchTile flex items-center'>
                    <div>
                      <img src={PlaceHolder1} alt='' />
                    </div>
                    <div className='ml-6'>
                      <h2 className='text-textSearch mb-2 text-sm'>Education fun for durgham Family</h2>
                      <p className='text-textsearchColor text-sm'>ByDurgham Family</p>
                    </div>
                  </div>
                </div>
                <div className='mb-5'>
                  <div className='searchTile flex items-center'>
                    <div>
                      <img src={PlaceHolder2} alt='' />
                    </div>
                    <div className='ml-6'>
                      <h2 className='text-textSearch mb-2 text-sm'>Education fun for durgham Family</h2>
                      <p className='text-textsearchColor text-sm'>ByDurgham Family</p>
                    </div>
                  </div>
                </div>
                <div className='mb-5'>
                  <div className='searchTile flex items-center'>
                    <div>
                      <img src={PlaceHolder3} alt='' />
                    </div>
                    <div className='ml-6'>
                      <h2 className='text-textSearch mb-2 text-sm'>Education fun for durgham Family</h2>
                      <p className='text-textsearchColor text-sm'>ByDurgham Family</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          <div className='cursor-pointer dashboardHeader__right--fundrising flex items-center mobile:hidden'>
            <img src={Up} className='w-[24px] h-[24px] mr-2' alt='' />
            <div className='w-[172px] h-[26px] '>
              <select className='cursor-pointer text-base p-1 ' style={{ color: '#4B5264' }}>
                <option>FundriSing For</option>
                <option>Danh sách 02</option>
                <option>Danh sách 03</option>
                <option>Danh sách 03</option>
              </select>
            </div>
          </div>
          <div className='cursor-pointer dashboardHeader__right--start mobile:hidden'>
            <Link to={isAuthenticated ? '/product' : '/login'}>
              <Button>
                <div className='w-[214px]'>{isAuthenticated ? ' Go shopping' : 'Go to login'}</div>
              </Button>
            </Link>
          </div>
          {isAuthenticated ? (
            <div className='dashboardHeader__right--avatar ml-4 cursor-pointer'>
              <div className='rounded-md flex items-center justify-center mobile:absolute mobile:right-4 mobile:top-[40px]'>
                <img alt='' className='w-[52px] h-[52px] mobile:w-[40px] mobile:h-[40px] mobile:ml-8' src={Frame} />
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
        } transition-transform pt-10 w-[400px] h-[100vh] bg-slate-200 fixed z-[1000] top-0 hidden mobile:block `}
      >
        <div className='dasboardHeader__mobile flex  items-center justify-around'>
          <div className='dasboardHeader__mobile--logo w-[40px] h-[40px]'>
            <img src={Logo} className='w-10 h-10' alt='' />
          </div>
          <div>
            <div className='dashboardHeader__right--start'>
              <div className='rounded-md text-xs w-[166px] h-[40px] bg-secondary flex items-center justify-center text-white'>
                Start a campaign
              </div>
            </div>
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
          <div className='w-[327px] h-[52px] dasboardHeader__mobile--container flex items-center'>
            <div>
              <img alt='' className='w-[18px] h-[18px]' src={Up} />
            </div>
            <p className='text-iconColor ml-2 mr-2 text-xs'>Fundrising For</p>
            <div>
              <img alt='' className='w-[10px] h-[10px]' src={amous} />
            </div>
          </div>
          <div className='dasboardHeader__mobile--container w-[327px] h-[52px] flex items-center'>
            <div>
              <img alt='' className='w-[24px] h-[24px]' src={Dashboard} />
            </div>
            <p className='ml-5 text-iconColor lg-iconColor text-sm mr-1'>Dashboard</p>
          </div>
          <div className='dasboardHeader__mobile--container w-[327px] h-[52px] flex items-center'>
            <div>
              <img alt='' className='w-[24px] h-[24px]' src={Withdraw} />
            </div>
            <p className='ml-5 text-iconColor text-sm mr-1'>Withdraw</p>
          </div>
          <div className='dasboardHeader__mobile--container w-[327px] h-[52px] flex items-center'>
            <div>
              <img alt='' className='w-[24px] h-[24px]' src={Profile} />
            </div>
            <p className='ml-5 text-iconColor text-sm  mr-1'>Profile</p>
          </div>
          <div className='dasboardHeader__mobile--container w-[327px] h-[52px] flex items-center'>
            <div>
              <img alt='' className='w-[24px] h-[24px]' src={Logout} />
            </div>
            <p className='ml-5 text-iconColor text-sm  mr-1'>Logout</p>
          </div>{' '}
          <div className='dasboardHeader__mobile--container w-[327px] h-[52px] flex items-center'>
            <div>
              <img alt='' className='w-[24px] h-[24px]' src={Light} />
            </div>
            <p className='ml-5 text-iconColor text-sm  mr-1'>Light/Dark</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
