export interface Product {
  name: string
  image: string[]
  type: string
  price: number
  countInStock: number
  rating: number
  description: string
  _id: string
  selled: number
  discount: number
  createdAt: string
  updatedAt: string
}

export interface ProductList {
  data: Product[]
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
}
