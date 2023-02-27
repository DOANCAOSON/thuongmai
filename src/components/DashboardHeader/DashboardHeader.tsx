import Logo from '../../assets/images/Logo.png'
import Search from '../../assets/images/Search.png'
import Up from '../../assets/images/Up.png'
import Frame from '../../assets/images/Frame.png'

const DashboardHeader = () => {
  return (
    <div>
      <div className='dashboardHeader flex m-8'>
        <div className='dashboardHeader__left flex w-[50%]'>
          <div className='dashboardHeader__left--logo mr-8'>
            <img src={Logo} />
          </div>
          <div className='dashboardHeader__left--search flex items-center '>
            <input type='text' className='text-sm' placeholder='Do Fundrise now' />
            <div className='bg-bgPrimary w-[72px] h-[40px] rounded-full  flex'>
              <img src={Search} style={{ width: '18px', height: '18px', margin: 'auto' }} />
            </div>
          </div>
        </div>
        <div className='dashboardHeader__right flex items-center w-[50%] justify-end'>
          <div className='dashboardHeader__right--fundrising flex items-center'>
            <img src={Up} className='w-[24px] h-[24px] mr-2' />
            <div className='w-[172px] h-[26px]'>
              <select className='text-base p-1' style={{ color: '#4B5264' }}>
                <option>FundriSing For</option>
                <option>Danh sách 02</option>
                <option>Danh sách 03</option>
                <option>Danh sách 03</option>
              </select>
            </div>
          </div>
          <div className='dashboardHeader__right--start'>
            <div className='rounded-md w-[214px] h-[52px] bg-secondary flex items-center justify-center text-white text-base'>
              Start a campaign
            </div>
          </div>
          <div className='dashboardHeader__right--avatar ml-4'>
            <div className='rounded-md w-[52px] h-[52px]  flex items-center justify-center'>
              <img src={Frame} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
