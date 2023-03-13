import axios, { type AxiosInstance } from 'axios'
import omit from 'lodash/omit'
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
