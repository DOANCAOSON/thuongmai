export interface SuccessResponse<Data> {
  message: string
  data: Data
}
export interface ResponseApi<Data> {
  status: string
  message: string
  data?: Data
}
