import React from 'react'
import { useRoutes } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'
import RegisterLayout from './layouts/RegisterLayout'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'

const useRouteElements = () => {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <DashboardLayout>
          <Dashboard />
        </DashboardLayout>
      )
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routeElements
}

export default useRouteElements
