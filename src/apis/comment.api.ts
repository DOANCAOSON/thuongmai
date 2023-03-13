/* eslint-disable @typescript-eslint/no-explicit-any */
import http from 'src/utils/http'

export const getCommentProduct = (product_id: string) => http.get(`/comment/get-comment/${product_id}`)
export const deleteComment = (comment_id: string) => http.delete(`/comment/${comment_id}`)
export const createComment = (id: string, body: any) => http.post(`/comment/${id}`, body)
