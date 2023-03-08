import { useContext, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import DashboardHeader from 'src/components/DashboardHeader/DashboardHeader'
import Footer from 'src/components/Footer'
import Navbar from 'src/components/Navbar'
import { AppContext } from 'src/contexts/app.context'
interface Props {
  children?: React.ReactNode
}
const DashboardLayout = ({ children }: Props) => {
  const { profile } = useContext(AppContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (profile?.role === 'admin') {
      navigate('/admin')
    }
    if (profile?.role === 'user') {
      navigate('/')
    }
  }, [profile])
  const { isAuthenticated } = useContext(AppContext)
  console.log(isAuthenticated)
  return (
    <div className='mobile:w-[100vw] w-[1348px] m-auto'>
      <DashboardHeader />
      <div className='flex gap-[30px]'>
        <Navbar></Navbar>
        <div className='w-full'>{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default DashboardLayout
