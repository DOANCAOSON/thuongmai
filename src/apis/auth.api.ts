import { AuthResponse } from 'src/types/auth.type'
import { User } from 'src/types/user.type'
import http from 'src/utils/http'

export const registerAccount = (body: { name: string; email: string; password: string; confirmPassword: string }) =>
  http.post<AuthResponse>('/user/sign-up', body)

export const LoginAccount = (body: { email: string; password: string }) =>
  http.post<AuthResponse>('/user/sign-in', body)

export const logout = () => http.post('/user/log-out')

export const updateUser = (id: unknown, params?: Omit<User, '_id'>) => http.put<User>(`/user/update-user/${id}`, params)
export const getUser = (id: unknown) => http.get<User>(`/user/get-details/${id}`)
