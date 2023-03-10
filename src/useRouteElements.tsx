import { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { AppContext } from './contexts/app.context'
import AdminLayout from './layouts/AdminLayout'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'
import RegisterLayout from './layouts/RegisterLayout'
import Admin from './pages/Admin'
import AddProductCat from './pages/Admin/Category/AddProductCat/AddProductCat'
import ListProductCat from './pages/Admin/Category/ListProductCat/ListProductCat'
import Order from './pages/Admin/Order'
import ProductAdd from './pages/Admin/Product/ProductAdd/ProductAdd'
import ListProduct from './pages/Admin/Product/ProductList/ListProduct'
import User from './pages/Admin/User'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import UserOrder from './pages/Order/UserOrder'
import ProductDetail from './pages/ProductDetail'
import ProductList from './pages/ProductList'
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
function IsAdmin() {
  const { profile } = useContext(AppContext)
  return profile?.role === 'admin' ? <Outlet /> : <Navigate to='/' />
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
          path: '/cart',
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
      path: '/product',
      element: (
        <DashboardLayout>
          <ProductList />
        </DashboardLayout>
      )
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
      path: '',
      element: <IsAdmin />,
      children: [
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
          path: '/admin/product/list',
          element: (
            <AdminLayout>
              <ListProduct />
            </AdminLayout>
          )
        },
        {
          path: '/admin/product/add',
          element: (
            <AdminLayout>
              <ProductAdd />
            </AdminLayout>
          )
        },
        {
          path: '/admin/product/:id',
          element: (
            <AdminLayout>
              <ProductAdd />
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
        },
        {
          path: '/admin/category/add',
          element: (
            <AdminLayout>
              <AddProductCat />
            </AdminLayout>
          )
        },
        {
          path: '/admin/category/list',
          element: (
            <AdminLayout>
              <ListProductCat />
            </AdminLayout>
          )
        },
        {
          path: '/admin/category/:id',
          element: (
            <AdminLayout>
              <AddProductCat />
            </AdminLayout>
          )
        }
      ]
    }
  ])
  return routeElements
}

export default useRouteElements
