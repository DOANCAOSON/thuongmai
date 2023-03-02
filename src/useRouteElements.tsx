import React, { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { AppContext } from './contexts/app.context'
import AdminLayout from './layouts/AdminLayout'
import CartLayout from './layouts/CartLayout'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'
import RegisterLayout from './layouts/RegisterLayout'
import Admin from './pages/Admin'
import Order from './pages/Admin/Order'
import Product from './pages/Admin/Product'
import User from './pages/Admin/User'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import UserOrder from './pages/Order/UserOrder'
import ProductDetail from './pages/ProductDetail'
import Profile from './pages/Profile'
import Register from './pages/Register'

function ProtecedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to='login' />
}
function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

const useRouteElements = () => {
  const routeElements = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <DashboardLayout>
          <Dashboard />
        </DashboardLayout>
      )
    },
    {
      path: '',
      element: <ProtecedRoute />,
      children: [
        {
          path: '/profile',
          element: (
            <DashboardLayout>
              <Profile />
            </DashboardLayout>
          )
        },
        {
          path: '/cart/:id',
          element: (
            <DashboardLayout>
              <Cart />
            </DashboardLayout>
          )
        },
        {
          path: '/order/:id',
          element: (
            <DashboardLayout>
              <UserOrder />
            </DashboardLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: 'login',
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: 'register',
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    },
    {
      path: '/product/:id',
      element: (
        <DashboardLayout>
          <ProductDetail />
        </DashboardLayout>
      )
    },
    {
      path: '/admin',
      element: (
        <AdminLayout>
          <Admin />
        </AdminLayout>
      )
    },
    {
      path: '/admin/list-order',
      element: (
        <AdminLayout>
          <Order />
        </AdminLayout>
      )
    },
    {
      path: '/admin/list-product',
      element: (
        <AdminLayout>
          <Product />
        </AdminLayout>
      )
    },
    {
      path: '/admin/list-user',
      element: (
        <AdminLayout>
          <User />
        </AdminLayout>
      )
    }
  ])
  return routeElements
}

export default useRouteElements
