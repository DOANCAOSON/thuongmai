import DashboardHeader from 'src/components/DashboardHeader/DashboardHeader'
import Footer from 'src/components/Footer'
interface Props {
  children?: React.ReactNode
}
const DashboardLayout = ({ children }: Props) => {
  return (
    <div>
      <DashboardHeader></DashboardHeader>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default DashboardLayout
