// const user = {
//   name: 'Nguyen Thanh Binh',
//   email: 'thanhbinh@gmail.com',
//   password: '$2b$10$cu4Y6fUcg2rhhIJ2rzQheefBfC6jSSGK64Pxmo0tpLQDXL1DmjPgG',
//   isAdmin: false,
//   role: 'user',
//   _id: '63feb1fb56ebf1df004d824c',
//   createdAt: '2023-03-01T02:01:31.445Z',
//   updatedAt: '2023-03-01T02:01:31.445Z',
//   __v: 0
// }

export interface User {
  name: string
  email: string
  password: string
  isAdmin: boolean
  role: string
  _id: string
  createdAt: string
  updatedAt: string
}
