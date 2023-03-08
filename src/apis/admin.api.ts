import { Category } from 'src/types/category.type'
import { Product } from 'src/types/product.type'
import { ListUser } from 'src/types/user.type'
import http from 'src/utils/http'

// Category
export const AddCategory = (category?: Omit<Category, '_id'>) => http.post<Category>('/category/create', category)
export const deleteCategory = (id: unknown) => http.delete(`/category/delete/${id}`)
export const getCategory = (id: unknown) => http.get<Category>(`/category/get-details/${id}`)
export const updateCategory = (id: unknown, params?: Omit<Category, '_id'>) =>
  http.put<Category>(`/category/update/${id}`, params)

// Product
export const deleteProduct = (id: unknown) => http.delete(`/product/delete/${id}`)
export const addProduct = (product?: Omit<Product, '_id'>) => http.post(`/product/create/`, product)
export const getProduct = (id: unknown) => http.get<Product>(`/product/get-details/${id}`)
export const updateProduct = (id: unknown, params?: Omit<Product, '_id'>) =>
  http.put<Product>(`/product/update/${id}`, params)

// User
export const getUsers = () => http.get<ListUser>('/user/getAll')
export const deleteUser = (id: unknown) => http.delete(`/user/delete-user/${id}`)
