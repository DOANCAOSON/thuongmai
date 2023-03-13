import React from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { getProductDetail } from 'src/apis/product.api'
import BigItem from 'src/components/BigItem'

const Evaluate = () => {
  const location = useLocation()
  const productId = (location.state as { productId: string | null })?.productId
  console.log(productId)
  const { data: productDetailData } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProductDetail(productId as string),
    onSuccess: () => {
      window.scroll({
        top: 1000,
        left: 0
      })
    }
  })
  const product = productDetailData?.data.data
  return (
    <div>
      <section>
        <div>
          <div className='border border-gray-200 mb-[20px] text-text-color rounded-lg bg-gray-50 p-4'>
            Chưa có đánh giá...
          </div>
          <form>
            <div className='w-full mb-4 border border-gray-200 rounded-lg bg-gray-50  '>
              <div className='px-4 py-2 bg-white rounded-t-lg '>
                <label htmlFor='comment' className='sr-only'>
                  Bình luận của bạn
                </label>
                <textarea
                  id='comment'
                  rows={4}
                  className='w-full px-0 text-sm text-gray-900 bg-white border-0  focus:ring-0 '
                  placeholder='Viết bình luận...'
                  required
                  defaultValue={''}
                />
              </div>
              <div className='flex items-center justify-between px-3 py-2 border-t '>
                <button
                  type='submit'
                  className='inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-blue-200 -900 hover:bg-primary'
                >
                  Bình luận
                </button>
                <div className='flex pl-0 space-x-1 sm:pl-2'>
                  <button
                    type='button'
                    className='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100   -600'
                  >
                    <svg
                      aria-hidden='true'
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span className='sr-only'>Upload image</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Evaluate
