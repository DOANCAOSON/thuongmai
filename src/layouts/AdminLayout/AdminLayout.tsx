import React from 'react'
import DashboardHeader from 'src/components/DashboardHeader/DashboardHeader'
import Footer from 'src/components/Footer'
interface Props {
  children?: React.ReactNode
}
const AdminLayout = ({ children }: Props) => {
  return (
    <div>
      <DashboardHeader></DashboardHeader>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default AdminLayout
