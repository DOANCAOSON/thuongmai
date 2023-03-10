import { Purchase, Status } from 'src/types/purchase.type'
import http from 'src/utils/http'

export const getPurchases = (id: string, params: Status) =>
  http.post<Purchase[]>(`/purchase/get-purchase/${id}`, params)

export const addToCart = (id: string, params: Purchase) => http.post<Purchase>(`/purchase/add-to-cart/${id}`, params)
