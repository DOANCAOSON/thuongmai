/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { changeStatusPurchase, getPurchases } from 'src/apis/purchase.api'
import { purchasesStatus } from 'src/constants/perchase'
import { FormatNumber, generateNameId } from 'src/hooks/useFormatNumber'
import { getProfileFromLS } from 'src/utils/auth'

const UserOrder = () => {
  const profileAccessToken = getProfileFromLS()
  const queryClient = useQueryClient()
  const { data: purchaseData, isLoading } = useQuery({
    queryKey: ['purchases-wait', profileAccessToken?._id],
    queryFn: () => {
      return getPurchases(profileAccessToken?._id, { status: purchasesStatus.all })
    }
  })
  const navigate = useNavigate()
  const purchaseIsOrder = purchaseData?.data.data
  const updatePurchaseMutation = useMutation({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: (body: any) => {
      return changeStatusPurchase(profileAccessToken?._id, body)
    },
    onSuccess: () => {
      toast.success('Đã nhận hàng!')
    }
  })
  const handleConfirm = (productId: string, purchaseId: string, status: number) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const body: any = { product_id: productId, purchase_id: purchaseId, status: status }
    updatePurchaseMutation.mutate(body, {
      onSuccess: () => {
        queryClient.invalidateQueries(['purchases-wait', profileAccessToken?._id])
      }
    })
  }
  return (
    <div>
      <h1 className='font-[700] mobile:px-[20px] text-[24px]'>Trạng thái giao hàng</h1>
      {isLoading && (
        <div className='text-center mt-20'>
          <div role='status'>
            <svg
              aria-hidden='true'
              className='inline w-[100px] h-[100px] mr-2 text-gray-200 animate-spin  fill-primary'
              viewBox='0 0 100 101'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                fill='currentColor'
              />
              <path
                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                fill='currentFill'
              />
            </svg>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      )}
      {!isLoading && (
        <div>
          <div className='mobile:px-6'>
            <div className='flex mb-7'></div>
            <div className='w-[100%]'>
              <table className='product-list shadow-md'>
                <thead className='mobile:hidden'>
                  <tr>
                    <th>Tên</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                    <th>Trạng thái </th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody className='mobile:hidden'>
                  {purchaseIsOrder &&
                    purchaseIsOrder.map((purchase: any) => (
                      <tr key={purchase?._id}>
                        <td className=''>
                          <div className='mr-4'>{purchase?.product?.name}</div>
                        </td>
                        <td className=''>
                          <Link
                            to={`/product/${generateNameId({
                              name: purchase.product?.name,
                              id: purchase.product?._id
                            })}`}
                          >
                            <div className='h-[100px] w-[80px] block m-auto'>
                              <img src={purchase?.product?.image[0]} alt='' />
                            </div>
                          </Link>
                        </td>
                        <td>
                          <div className='mr-4'>{purchase?.buy_count}</div>
                        </td>
                        <td>
                          {FormatNumber(
                            Math.ceil(
                              Number(purchase?.product?.price) -
                                (Number(purchase?.product?.price) * Number(purchase?.product?.discount)) / 100
                            ) * purchase.buy_count
                          )}
                          đ
                        </td>
                        <td>
                          {purchase?.status === 1 && <button className='text-yellow-500'>Chờ xác nhận</button>}
                          {purchase?.status === 3 && <button className='text-blue-400'>Chờ lấy hàng</button>}
                          {purchase?.status === 2 && <button className='text-pink-400'>Đang gửi</button>}
                          {purchase?.status === 4 && <button className='text-primary'>Đã nhận</button>}
                        </td>
                        <td>
                          {purchase?.status === 4 && (
                            <div className='flex flex-col'>
                              <button className='text-secondary hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'>
                                <Link
                                  to={`/product/${generateNameId({
                                    name: purchase.product?.name,
                                    id: purchase.product?._id
                                  })}`}
                                >
                                  Mua lại
                                </Link>
                              </button>
                              <button
                                onClick={() => {
                                  navigate('/evaluate', {
                                    state: {
                                      productId: purchase?.product?._id
                                    }
                                  })
                                }}
                                className='text-black hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'
                              >
                                Đánh giá
                              </button>
                            </div>
                          )}
                          {purchase?.status === 2 && (
                            <button
                              onClick={() =>
                                handleConfirm(purchase?.product?._id, purchase?._id, purchasesStatus.delivered)
                              }
                              className='text-red-400 hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'
                            >
                              Đã nhận và đánh giá
                            </button>
                          )}
                          {purchase?.status !== 2 && purchase?.status !== 4 && (
                            <button
                              onClick={() => {
                                toast.warn('Đặt hàng xin đừng boom mà!')
                              }}
                              className='hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'
                            >
                              Huỷ
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div className='hidden mobile:block'>
                {purchaseIsOrder &&
                  purchaseIsOrder.map((purchase: any) => (
                    <div
                      key={purchase._id}
                      className='flex shadow-md p-2 rounded-md items-start mb-4 pl-4 justify-between'
                    >
                      <Link
                        to={`/product/${generateNameId({
                          name: purchase.product?.name,
                          id: purchase.product?._id
                        })}`}
                      >
                        <div className='h-[100px] w-[80px]'>
                          <img src={purchase.product.image[0]} alt='' />
                        </div>
                      </Link>
                      <div className='w-[60%] grid gap-y-2'>
                        <div className='mr-4 w-full'>{purchase.product.name}</div>
                        <div>
                          {FormatNumber(
                            Math.ceil(
                              Number(purchase?.product.price) -
                                (Number(purchase?.product?.price) * Number(purchase?.product?.discount)) / 100
                            )
                          )}
                          đ
                        </div>
                        <div>
                          {purchase?.status === 1 && <button className='text-yellow-500'>Chờ xác nhận</button>}
                          {purchase?.status === 3 && <button className='text-blue-400'>Chờ lấy hàng</button>}
                          {purchase?.status === 2 && <button className='text-pink-400'>Đang gửi</button>}
                          {purchase?.status === 4 && <button className='text-primary'>Đã nhận</button>}
                        </div>
                        <div>
                          {purchase?.status === 4 && (
                            <button className='text-secondary hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'>
                              <Link
                                to={`/product/${generateNameId({
                                  name: purchase.product?.name,
                                  id: purchase.product?._id
                                })}`}
                              >
                                Mua lại
                              </Link>
                            </button>
                          )}
                          {purchase?.status === 2 && (
                            <button
                              onClick={() =>
                                handleConfirm(purchase?.product?._id, purchase?._id, purchasesStatus.delivered)
                              }
                              className='text-red-400 hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'
                            >
                              Xác nhận
                            </button>
                          )}
                          {purchase?.status !== 2 && purchase?.status !== 4 && (
                            <button
                              onClick={() => {
                                toast.warn('Đặt hàng xin đừng boom mà!')
                              }}
                              className='hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'
                            >
                              Huỷ
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              {purchaseIsOrder.length === 0 && (
                <div className='my-4 p-4 shadow-md w-full text-[16px] flex gap-x-2'>
                  Chưa có sản phẩm ưu thích?{' '}
                  <div className='hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'>
                    <Link to={'/product'} className='text-primary'>
                      Mua ngay
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className='hidden mobile:block'></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserOrder
