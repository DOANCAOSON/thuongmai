import { Category } from 'src/types/category.type'
import http from 'src/utils/http'

export const getCategories = () => http.get<Category[]>('/category/get-all')
