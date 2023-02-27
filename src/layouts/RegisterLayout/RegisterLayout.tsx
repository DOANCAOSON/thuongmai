// import Footer from '../../components/Footer'
// import RegisterHeader from '../../components/RegisterHeader'

import Footer from 'src/components/Footer'
import RegisterHeader from 'src/components/RegisterHeader'

interface Props {
  children?: React.ReactNode
}
const RegisterLayout = ({ children }: Props) => {
  return (
    <div className='m-[40px] mobile:m-[0px] '>
      <RegisterHeader></RegisterHeader>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default RegisterLayout
