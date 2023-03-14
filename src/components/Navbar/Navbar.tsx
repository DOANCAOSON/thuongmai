import { useMutation } from 'react-query'
import { logout } from 'src/apis/auth.api'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'
import { toast } from 'react-toastify'
import { Link, useLocation } from 'react-router-dom'
import { clearLS } from 'src/utils/auth'

const Navbar = () => {
  const { isAuthenticated, reset } = useContext(AppContext)

  const logOutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      reset()
      clearLS()
      toast.success('Đăng xuất thành công!')
    }
  })
  const handleLogout = () => {
    logOutMutation.mutate()
  }
  const location = useLocation()

  return (
    <div className='mobile:hidden'>
      <div>
        <div className='p-8'>
          <Link to='/'>
            <button
              className={`hover:stroke-primary ${
                location.pathname === '/' || location.pathname === '/product'
                  ? 'stroke-primary bg-[#F1FBF7] '
                  : 'stroke-[#A2A2A8]'
              } mb-5  hover:bg-[#F1FBF7] w-[48px] h-[48px] flex items-center  justify-center rounded-lg `}
            >
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M3 6.5C3 3.87479 3.02811 3 6.5 3C9.97189 3 10 3.87479 10 6.5C10 9.12521 10.0111 10 6.5 10C2.98893 10 3 9.12521 3 6.5Z'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M14 6.5C14 3.87479 14.0281 3 17.5 3C20.9719 3 21 3.87479 21 6.5C21 9.12521 21.0111 10 17.5 10C13.9889 10 14 9.12521 14 6.5Z'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M3 17.5C3 14.8748 3.02811 14 6.5 14C9.97189 14 10 14.8748 10 17.5C10 20.1252 10.0111 21 6.5 21C2.98893 21 3 20.1252 3 17.5Z'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M14 17.5C14 14.8748 14.0281 14 17.5 14C20.9719 14 21 14.8748 21 17.5C21 20.1252 21.0111 21 17.5 21C13.9889 21 14 20.1252 14 17.5Z'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </Link>
          <Link to='/cart'>
            <button
              className={`${
                location.pathname === '/cart' ? 'stroke-primary bg-[#F1FBF7] ' : 'stroke-[#A2A2A8]'
              } hover:stroke-primary relative mb-5 hover:bg-[#F1FBF7] w-[48px] h-[48px] flex items-center  justify-center rounded-lg `}
            >
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g clipPath='url(#clip0_2752_5418)'>
                  <path
                    d='M4.46098 11H2.1C1.49249 11 1 10.5026 1 9.88889V2.11111C1 1.49746 1.49249 1 2.1 1H21.9C22.5075 1 23 1.49746 23 2.11111V9.88889C23 10.5026 22.5075 11 21.9 11H19.8207'
                    strokeWidth='2'
                  />
                  <path
                    d='M19.4286 6H4.57143C4.25583 6 4 6.24551 4 6.54839V22.4516C4 22.7545 4.25583 23 4.57143 23H19.4286C19.7442 23 20 22.7545 20 22.4516V6.54839C20 6.24551 19.7442 6 19.4286 6Z'
                    strokeWidth='2'
                  />
                  <path
                    d='M15 16.3794C15 16.8153 14.8949 17.2259 14.6848 17.6114C14.4825 17.9886 14.179 18.3029 13.7744 18.5543C13.3775 18.7973 12.9066 18.9398 12.3619 18.9817V20H11.6148V18.9691C10.8366 18.8937 10.2101 18.6423 9.73537 18.2149C9.2607 17.779 9.0156 17.1924 9 16.4549H10.751C10.7977 17.0583 11.0856 17.4229 11.6148 17.5486V15.1474C11.0545 14.9966 10.6031 14.8457 10.2607 14.6949C9.9183 14.544 9.62258 14.301 9.37358 13.9657C9.1245 13.6304 9 13.1737 9 12.5954C9 11.8663 9.24128 11.2713 9.72375 10.8103C10.214 10.3493 10.8443 10.0853 11.6148 10.0183V9H12.3619V10.0183C13.109 10.0853 13.7043 10.3284 14.1479 10.7474C14.5992 11.1665 14.8522 11.7447 14.9066 12.4823H13.144C13.1206 12.2393 13.0389 12.0297 12.8988 11.8537C12.7665 11.6693 12.5876 11.5394 12.3619 11.464V13.84C12.9455 13.9993 13.4047 14.1543 13.7393 14.3051C14.0817 14.4476 14.3774 14.6864 14.6264 15.0217C14.8755 15.3486 15 15.8011 15 16.3794ZM10.7043 12.5074C10.7043 12.784 10.7821 13.0103 10.9378 13.1863C11.0934 13.3539 11.3191 13.4922 11.6148 13.6011V11.4263C11.3346 11.4682 11.1128 11.5813 10.9494 11.7657C10.786 11.9501 10.7043 12.1973 10.7043 12.5074ZM12.3619 17.5737C12.6576 17.515 12.8872 17.3851 13.0506 17.184C13.2218 16.9829 13.3074 16.7398 13.3074 16.4549C13.3074 16.1783 13.2256 15.9562 13.0622 15.7886C12.8988 15.621 12.6654 15.4827 12.3619 15.3737V17.5737Z'
                    fill='#A2A2A8'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_2752_5418'>
                    <rect width='24' height='24' fill='white' />
                  </clipPath>
                </defs>
              </svg>
              {/* {purchasesInCart?.length > 0 ? (
                <div className='w-5 h-5 shadow-lg bg-white text-[#A2A2A8] absolute flex rounded-full justify-center items-center  font-[600] top-0 right-0'>
                  {purchasesInCart?.length}
                </div>
              ) : null} */}
            </button>
          </Link>
          <Link to='/order'>
            <button
              className={`${
                location.pathname === '/order' ? 'stroke-primary bg-[#F1FBF7] ' : 'stroke-[#A2A2A8]'
              } hover:stroke-primary  mb-5 hover:bg-[#F1FBF7] w-[48px] h-[48px] flex items-center  justify-center rounded-lg `}
            >
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M18.1111 8.14286V5.57143C18.1111 4.88944 17.8536 4.23539 17.3951 3.75315C16.9367 3.27092 16.315 3 15.6667 3H3.44444C2.79614 3 2.17438 3.27092 1.71596 3.75315C1.25754 4.23539 1 4.88944 1 5.57143V13.2857C1 13.9677 1.25754 14.6218 1.71596 15.104C2.17438 15.5862 2.79614 15.8571 3.44444 15.8571H5.88889M8.33333 21H20.5556C21.2039 21 21.8256 20.7291 22.284 20.2468C22.7425 19.7646 23 19.1106 23 18.4286V10.7143C23 10.0323 22.7425 9.37825 22.284 8.89601C21.8256 8.41377 21.2039 8.14286 20.5556 8.14286H8.33333C7.68503 8.14286 7.06327 8.41377 6.60485 8.89601C6.14643 9.37825 5.88889 10.0323 5.88889 10.7143V18.4286C5.88889 19.1106 6.14643 19.7646 6.60485 20.2468C7.06327 20.7291 7.68503 21 8.33333 21ZM16.8889 14.5714C16.8889 15.2534 16.6313 15.9075 16.1729 16.3897C15.7145 16.8719 15.0928 17.1429 14.4444 17.1429C13.7961 17.1429 13.1744 16.8719 12.716 16.3897C12.2575 15.9075 12 15.2534 12 14.5714C12 13.8894 12.2575 13.2354 12.716 12.7532C13.1744 12.2709 13.7961 12 14.4444 12C15.0928 12 15.7145 12.2709 16.1729 12.7532C16.6313 13.2354 16.8889 13.8894 16.8889 14.5714Z'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </Link>
          <Link to='/profile'>
            <button
              className={`${
                location.pathname === '/profile' ? 'stroke-primary bg-[#F1FBF7] ' : 'stroke-[#A2A2A8]'
              } hover:stroke-primary mb-5  hover:bg-[#F1FBF7] w-[48px] h-[48px] flex items-center  justify-center rounded-lg`}
            >
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <circle cx='12' cy='9' r='3' strokeWidth='2' strokeLinecap='round' />
                <circle cx='12' cy='12' r='11' strokeWidth='2' />
                <path
                  d='M19 20C18.5871 18.8525 17.6773 17.8384 16.4117 17.1152C15.146 16.392 13.5953 16 12 16C10.4047 16 8.85398 16.392 7.58835 17.1152C6.32271 17.8384 5.41289 18.8525 5 20'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
            </button>
          </Link>
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className='hover:stroke-primary mb-5 stroke-[#A2A2A8] hover:bg-[#F1FBF7] w-[48px] h-[48px] flex items-center  justify-center rounded-lg '
            >
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M5 6.64513V5.551C5 3.43076 5 2.37064 5.67965 1.77328C6.35931 1.17591 7.41066 1.31197 9.51337 1.58408L16.77 2.52318C19.2611 2.84556 20.5067 3.00675 21.2533 3.85626C22 4.70577 22 5.9617 22 8.47356V15.5264C22 18.0383 22 19.2942 21.2533 20.1437C20.5067 20.9933 19.2611 21.1544 16.77 21.4768L9.51337 22.4159C7.41066 22.688 6.35931 22.8241 5.67965 22.2267C5 21.6294 5 20.5692 5 18.449V17.5726'
                  strokeWidth='2'
                />
                <path
                  className='hover:fill-primary fill-[#A2A2A8]'
                  d='M15 12L15.8107 11.4145L16.2335 12L15.8107 12.5855L15 12ZM1 13C0.447715 13 0 12.5523 0 12C0 11.4477 0.447715 11 1 11V13ZM11.4773 5.41451L15.8107 11.4145L14.1893 12.5855L9.85599 6.58549L11.4773 5.41451ZM15.8107 12.5855L11.4773 18.5855L9.85599 17.4145L14.1893 11.4145L15.8107 12.5855ZM15 13H1V11H15V13Z'
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
