import Up from '../../assets/images/Up.png'
import amous from '../../assets/images/amous.png'
import Dashboard from '../../assets/images/Dashboard.png'
import Withdraw from '../../assets/images/Withdraw.png'
import Profile from '../../assets/images/Profile.png'
import Logout from '../../assets/images/Logout.png'
import Light from '../../assets/images/Light.png'

const Navbar = () => {
  return (
    <div className='mobile:hidden'>
      <div>
        <div className='p-8'>
          <div className='w-[48px] h-[48px] flex items-center bg-active justify-center rounded-lg mb-5'>
            <div>
              <img className='w-[24px] h-[24px]' src={Dashboard} />
            </div>
          </div>
          <div className='w-[48px] h-[48px] flex items-center justify-center rounded-lg mb-5'>
            <div>
              <img className='w-[24px] h-[24px]' src={Withdraw} />
            </div>
          </div>
          <div className='w-[48px] h-[48px] flex items-center justify-center rounded-lg mb-5'>
            <div>
              <img className='w-[24px] h-[24px]' src={Profile} />
            </div>
          </div>
          <div className='w-[48px] h-[48px] flex items-center justify-center rounded-lg mb-5'>
            <div>
              <img className='w-[24px] h-[24px]' src={Logout} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
