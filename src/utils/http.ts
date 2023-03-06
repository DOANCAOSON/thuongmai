import axios, { type AxiosInstance } from 'axios'
import { omit } from 'lodash'
import { toast } from 'react-toastify'
import { AuthResponse } from 'src/types/auth.type'
import { clearLS, getAccessTokenFromLS, setAccesTokenToLS, setProfileFromLS } from './auth'
class Http {
  instance: AxiosInstance
  private accessToken?: string
  constructor() {
    this.accessToken = getAccessTokenFromLS()
    this.instance = axios.create({
      baseURL: 'http://localhost:5000/api/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken) {
          config.headers.authorization = this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === '/user/sign-in' || url === '/user/sign-up') {
          const dataProfile = response.data.data
          const newUser = omit(dataProfile, ['password', 'isAdmin'])
          this.accessToken = (response as AuthResponse).data?.access_token
          setAccesTokenToLS(this.accessToken)
          setProfileFromLS(newUser)
        } else if (url === '/user/log-out') {
          this.accessToken = ''
          clearLS(this.accessToken)
        }
        return response
      },
      function (error) {
        if (error.response?.status !== 422) {
          const message = error.message
          toast.error(message)
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
