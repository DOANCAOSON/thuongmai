import axios, { AxiosError, HttpStatusCode } from 'axios'
import jwt_decode from 'jwt-decode'

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  // eslint-disable-next-line import/no-named-as-default-member
  return axios.isAxiosError(error)
}

export function isAxiosUnprocessableEntityError(error: unknown) {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}

export const isJsonString = (data: any) => {
  try {
    JSON.parse(data)
  } catch (error) {
    return false
  }
  return true
}
export const handleDecoded = () => {
  let storageData = localStorage.getItem('access_token')
  let decoded = {}
  if (storageData && isJsonString(storageData)) {
    storageData = JSON.parse(storageData)
    decoded = jwt_decode(storageData as string)
  }
  return { decoded, storageData }
}
