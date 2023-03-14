import axios, { type AxiosInstance } from 'axios'
import omit from 'lodash/omit'
import { refreshToken } from 'src/apis/auth.api'
import { clearLS, getAccessTokenFromLS, setAccesTokenToLS, setProfileFromLS } from './auth'
import { handleDecoded } from './utils'
class Http {
  instance: AxiosInstance
  private accessToken?: string
  constructor() {
    this.accessToken = getAccessTokenFromLS()
    this.instance = axios.create({
      baseURL: 'http://localhost:5000/api/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        token: `Beare ${this.accessToken}`
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
    this.instance.interceptors.request.use(
      async (config) => {
        // Do something before request is sent
        const currentTime = new Date()
        const { decoded } = handleDecoded()
        if (decoded?.exp < currentTime.getTime() / 1000) {
          const data = await refreshToken()
          config.headers.authorization = `Beare ${data?.access_token}`
        }
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === '/user/sign-in' || url === '/user/sign-up') {
          const dataProfile = response.data.data
          const newUser = omit(dataProfile, ['password', 'isAdmin'])
          this.accessToken = response.data?.access_token
          setAccesTokenToLS(this.accessToken as string)
          setProfileFromLS(newUser)
        } else if (url === '/user/log-out') {
          this.accessToken = ''
          clearLS()
        }
        return response
      },
      function (error) {
        if (error.response?.status !== 422) {
          const message = error.message
          console.log(message)
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
