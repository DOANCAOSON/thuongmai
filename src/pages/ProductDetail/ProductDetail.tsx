/* eslint-disable @typescript-eslint/no-explicit-any */
import BigItem from 'src/components/BigItem/BigItem'
import Button from 'src/components/Button'
import { getProductDetail, getProduct } from 'src/apis/product.api'
import { useParams } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getIdFromNameId } from 'src/hooks/useFormatNumber'
import ProductItem from 'src/components/ProductItem/ProductItem'
import { useEffect, useState } from 'react'
import { createComment, deleteComment, getCommentProduct } from 'src/apis/comment.api'
import { getProfileFromLS } from 'src/utils/auth'
import { toast } from 'react-toastify'
import FileBase from 'react-file-base64'
import Frame from 'src/assets/images/Frame.jpg'

const ProductDetail = () => {
  const [showComment, setShowComment] = useState(false)
  const initialFromState = {
    title: '',
    image: [],
    product_id: ''
  }
  const [valueComment, setValueComment] = useState(initialFromState)
  const profileAccessToken = getProfileFromLS()
  const { id: nameId } = useParams()
  const id = getIdFromNameId(nameId as string)
  const { data: productDetailData, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductDetail(id as string),
    onSuccess: () => {
      window.scroll({
        top: 0,
        left: 0
      })
    }
  })
  const { data: commentData } = useQuery({
    queryKey: ['comment', id],
    queryFn: () => getCommentProduct(id as string)
  })
  const comments = commentData?.data.data
  const queryClient = useQueryClient()
  const [scrollTop, setScrollTop] = useState(0)
  const onScroll = (e: any) => {
    setScrollTop(e.target.documentElement.scrollTop)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
  }, [])
  const product = productDetailData?.data.data
  const queryConfig = {
    page: 1,
    limit: 3,
    category: product?.category
  }
  const { data: productsSimilarData } = useQuery({
    queryKey: ['productList', queryConfig],
    queryFn: () => {
      return getProduct(queryConfig)
    },
    enabled: Boolean(product),
    staleTime: 3 * 60 * 1000
  })
  const { data: productsDataNewest } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return getProduct({
        page: 1,
        limit: 4
      })
    },
    enabled: Boolean(product),
    staleTime: 3 * 60 * 1000
  })

  const deleteCommentMutation = useMutation({
    mutationFn: (id: string) => {
      return deleteComment(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comment', id] })
      toast.success('Đã xoá bình luận!')
    }
  })
  const createCommentMutation = useMutation({
    mutationFn: (body: any) => {
      return createComment(profileAccessToken?._id, body)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comment', id] })
      toast.success('Đã bình luận!')
      setValueComment(initialFromState)
    }
  })
  const handleDeleteComment = (id: any) => {
    deleteCommentMutation.mutate(id)
  }

  const handleSubmitComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newForm = { ...valueComment, product_id: id }
    createCommentMutation.mutate(newForm)
  }
  const similarProduct = productsSimilarData?.data.data
  const products = productsDataNewest?.data.data

  return (
    <div className='pb-[50px] mobile:w-[100%] p-6 flex justify-center '>
      {isLoading && (
        <div role='status' className='mx-auto '>
          <svg
            aria-hidden='true'
            className='w-[150px] h-[150px] mr-2 text-gray-200 animate-spin fill-primary'
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
      )}
      {!isLoading && (
        <div>
          <div className='h-[140px] mobile:h-[90px] mobile:w-[100%] mb-10 mobile:mb-5 rounded-[25px] w-[100%] relative'>
            <div className=' h-full overflow-hidden rounded-[25px]'>
              <img
                src='https://niemvuilaptrinh.ams3.cdn.digitaloceanspaces.com/background-css-javascript/Scrolling%20Background%20Effect.png'
                alt=''
              />
            </div>
            <h1 className='font-[700] text-[40px] absolute mobile:text-[20px] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-white'>
              {product?.category.name ? <div>{product?.category.name}</div> : null}
            </h1>
          </div>
          <section className='mobile:w-[100%] mobile:flex mobile:justify-center mobile:mb-[30px] mb-[155px]'>
            <BigItem type='big' product={product}></BigItem>
          </section>
          <section className=' mobile:w-[100%] flex gap-[55%] py-[19px] mb-[25px] '>
            <div className='flex gap-[60px] items-center mobile:gap-[30px]'>
              <button
                onClick={() => setShowComment(false)}
                className={`cursor-pointer ${showComment ? '' : 'text-violet'} `}
              >
                Sản phẩm
              </button>
              <button
                onClick={() => setShowComment(true)}
                className={`cursor-pointer ${showComment ? 'text-violet' : ''} `}
              >
                Bình luận
              </button>
            </div>
            <div className='mobile:hidden'>
              <Button color='primary' type='small'>
                Trở về
              </Button>
            </div>
          </section>
          <section
            className={`mobile:w-[100%] ${
              showComment ? 'hidden' : 'block'
            } py-[10px] mobile:flex-col flex justify-between mb-[70px]`}
          >
            <div className='w-[605px] mobile:w-[327px]'>
              <h1 className='text-[18px] font-[600] mb-[20px]'>Mô tả</h1>
              <div className=' mobile:w-[100%] mobile:h-[450px] mb-[20px]'>
                <img src={product?.image[1]} alt='' />
              </div>
              <div className='px-[30px] mobile:text-[12px] mobile:leading-[18px] text-text-color mb-5 py-[10px] font-[400] text-[16px] leading-[26px]'>
                {product?.description}
              </div>
              <div className=' mobile:w-[100%] mobile:h-[450px] mb-[20px]'>
                <img src={product?.image[2]} alt='' />
              </div>
            </div>
            <div className='w-[391px] mobile:w-[327px]'>
              <h1 className='text-[18px] font-[600] mb-[20px]'>Sản phẩm tương tự</h1>
              <div className='flex flex-col gap-y-[60px] mobile:flex-row mobile:gap-x-[30px] mobile:overflow-x-auto'>
                {similarProduct?.map((item) => (
                  <div key={item._id}>
                    <ProductItem product={item}></ProductItem>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className={`${showComment ? ' block' : 'hidden'}`}>
            <div>
              {comments.length === 0 && (
                <div className='border border-gray-200 mb-[20px] text-text-color rounded-lg bg-gray-50 p-4'>
                  Chưa có bình luận...
                </div>
              )}
              {comments &&
                comments.map((comment: any) => (
                  <div key={comment._id} className=' border-t-2 py-6 flex items-start justify-between'>
                    <div className='flex gap-x-4'>
                      <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
                        {comment.user.avatar && <img src={comment.user.avatar} alt='' />}
                        {!comment.user.avatar && <img src={Frame} alt='' />}
                      </div>
                      <div className='flex flex-col gap-y-3'>
                        <div className='font-[600]'>{comment.user.name}</div>
                        <div>{comment.title}</div>
                        <div className='flex gap-x-3'>
                          {comment?.image ? (
                            comment.image.map((item: any, index: number) => (
                              <div key={index} className='w-[80px] h-[80px]'>
                                <img src={item} alt='' />
                              </div>
                            ))
                          ) : (
                            <div></div>
                          )}
                        </div>
                      </div>
                    </div>
                    {profileAccessToken._id === comment.user._id && (
                      <div className='flex gap-x-3 text-text-color'>
                        <button>Sửa</button>
                        <button onClick={() => handleDeleteComment(comment._id)}>Xoá</button>
                      </div>
                    )}
                  </div>
                ))}
              <form onSubmit={handleSubmitComment}>
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
                      value={valueComment.title}
                      onChange={(event) => setValueComment((prev: any) => ({ ...prev, title: event.target.value }))}
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
                      <FileBase
                        type='file'
                        name='picture'
                        onDone={(base64: any) => {
                          const listBase = base64.map((item: { base64: unknown }) => {
                            return item.base64
                          })
                          setValueComment((prev) => {
                            return { ...prev, image: listBase }
                          })
                        }}
                        multiple={true}
                        accept='image/png, image/jpg, image/webp'
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
          <section className='mb-[20px] mobile:w-[327px] '>
            <h1 className='font-[600] text-[18px] leading-7 mb-[20px]'>Sản phẩm mới nhất</h1>
            <div className='gap-[30px] grid grid-cols-4 mobile:flex mobile:w-[100%] mobile:overflow-x-auto'>
              {products?.map((item) => (
                <div key={item._id}>
                  <ProductItem product={item}></ProductItem>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
      {scrollTop > 1000 && (
        <button
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth'
            })
          }}
          className='fixed bottom-10 right-10 bg-primary opacity-90 p-3 rounded-full'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            style={{ fill: 'white', transform: '' }}
          >
            <path d='m6.293 11.293 1.414 1.414L12 8.414l4.293 4.293 1.414-1.414L12 5.586z' />
            <path d='m6.293 16.293 1.414 1.414L12 13.414l4.293 4.293 1.414-1.414L12 10.586z' />
          </svg>
        </button>
      )}
    </div>
  )
}

export default ProductDetail
