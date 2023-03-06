import { Category } from './category.type'

export interface Product {
  name: string
  image: string[]
  price: number
  countInStock: number
  rating?: number
  description: string
  _id: string
  selled?: number
  category: Category
  discount: number
  createdAt: string
  updatedAt: string
}

export interface ProductList {
  data: Product[]
  message: string
  status: string
  totalPage: number
  total: number
  pageCurrent: number
}

export interface ProductListComfig {
  page?: number
  limit?: number
  filter?: string
  sort_by?: 'createdAt' | 'countInStock' | 'selled' | 'price'
  order?: 'desc' | 'asc'
  category?: string
  name?: string
}
