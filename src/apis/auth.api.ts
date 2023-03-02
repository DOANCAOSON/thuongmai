import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

export const registerAccount = (body: { name: string; email: string; password: string; confirmPassword: string }) =>
  http.post<AuthResponse>('/user/sign-up', body)

export const LoginAccount = (body: { email: string; password: string }) =>
  http.post<AuthResponse>('/user/sign-in', body)

export const logout = () => http.post('/user/log-out')
