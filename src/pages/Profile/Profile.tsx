import { useEffect, useState } from 'react'
import { getProfileFromLS, setProfileFromLS } from 'src/utils/auth'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getUser, updateUser } from 'src/apis/auth.api'
import { User } from 'src/types/user.type'
import { toast } from 'react-toastify'
import Frame from '../../assets/images/Frame.jpg'
import FileBase from 'react-file-base64'
import { omit } from 'lodash'

type FormStateType = Omit<User, '_id'>
const Profile = () => {
  const profileAccessToken = getProfileFromLS()

  const queryClient = useQueryClient()
  const initialFromState: FormStateType = {
    name: '',
    email: '',
    phone: 0,
    address: '',
    avatar: ''
  }
  const [formState, setFormState] = useState<FormStateType>(initialFromState)

  useEffect(() => {
    setFormState({
      name: profileAccessToken?.name,
      email: profileAccessToken?.email,
      phone: profileAccessToken?.phone,
      address: profileAccessToken?.address,
      avatar: profileAccessToken?.avatar
    })
  }, [])

  useQuery({
    queryKey: ['user', profileAccessToken._id],
    queryFn: () => getUser(profileAccessToken._id),
    enabled: profileAccessToken._id !== undefined,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess: (data: any) => {
      setFormState(data.data.data)
    }
  })

  const [isDisabled, setDisable] = useState(true)
  const [isDisabledEmail, setDisableEmail] = useState(true)

  const updateProfileMutation = useMutation({
    mutationFn: () => {
      // console.log(formState)
      return updateUser(profileAccessToken._id, formState)
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['user', profileAccessToken._id], data)
    }
  })
  const handleChange = (name: keyof FormStateType) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, [name]: event.target.value }))
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    updateProfileMutation.mutate(undefined, {
      onSuccess: () => {
        const newProfile = { ...profileAccessToken, avatar: formState?.avatar }
        setDisable(true)
        setDisableEmail(true)
        setProfileFromLS(newProfile)
        toast.success(' Đã sửa thành công!')
      }
    })
  }

  return (
    <div className='mobile:px-5'>
      <div>
        <h1 className='font-[700] text-[25px] mobile:text-[20px]'>Thông tin tài khoản của bạn</h1>
        <span className='text-text-color'>Chỉnh sửa thông tin</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='grid gap-6 mb-6 md:grid-cols-2 mt-[40px]'>
          <div className='font-[700] text-[18px] flex justify-between'>
            <h1>Thông tin cá nhân</h1>
            <button
              onClick={(e) => {
                e.preventDefault()
                setDisable(!isDisabled)
              }}
              className='text-secondary font-[600] text-[18px]'
            >
              {isDisabled ? 'Sửa' : 'Đóng'}
            </button>
          </div>
          <div className='grid grid-cols-2 gap-x-10 mobile:grid-cols-1'>
            <div className='relative'>
              <div className='h-[250px]  w-[250px] bg-primary mx-auto rounded-[100rem] overflow-hidden'>
                {formState?.avatar ? <img src={formState?.avatar} alt='' /> : <img src={Frame} alt='' />}
              </div>
              <button className='opacity-0 hover:opacity-100 cursor-pointer rounded-full h-[250px] flex justify-center items-center w-[250px] absolute top-[50%] left-[55%] translate-x-[-50%] translate-y-[-50%]'>
                <FileBase
                  type='file'
                  name='picture'
                  className='hidden'
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onDone={(base64: any) => {
                    setFormState((prev) => {
                      // console.log({ ...prev, image: base64.base64 })
                      return { ...prev, avatar: base64.base64 }
                    })
                    setDisable(false)
                  }}
                  accept='image/png, image/jpg, image/webp'
                />
              </button>
              {/* <div>Avatar</div> */}
            </div>
            <div className='grid gap-y-5'>
              <div>
                <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 '>
                  Tên đầy đủ
                </label>
                <input
                  disabled={isDisabled}
                  type='text'
                  id='last_name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-primary block w-full p-2.5 '
                  placeholder='Nguyễn Văn ...'
                  required
                  value={formState.name}
                  onChange={handleChange('name')}
                />
              </div>
              <div>
                <label htmlFor='company' className='block mb-2 text-sm font-medium text-gray-900 '>
                  Địa chỉ
                </label>
                <input
                  disabled={isDisabled}
                  type='text'
                  id='company'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-primary block w-full p-2.5 '
                  placeholder='Flowbite'
                  required
                  value={formState.address}
                  onChange={handleChange('address')}
                />
              </div>
              <div>
                <label htmlFor='phone' className='block mb-2 text-sm font-medium text-gray-900 '>
                  Số điện thoại
                </label>
                <input
                  disabled={isDisabled}
                  type='number'
                  id='phone'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-primary block w-full p-2.5  '
                  placeholder='123-45-678'
                  pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
                  required
                  value={formState.phone}
                  onChange={handleChange('phone')}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='font-[700] text-[18px] flex justify-between mt-[40px] mb-[20px]'>
          <h1>Thông tin tài khoản</h1>
          <button
            onClick={(e) => {
              e.preventDefault()
              setDisableEmail(!isDisabledEmail)
            }}
            className='text-secondary font-[600] text-[18px]'
          >
            {isDisabledEmail ? 'Sửa' : 'Đóng'}
          </button>
        </div>
        <div className='mb-6'>
          <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 '>
            Địa chỉ email
          </label>
          <input
            disabled={isDisabledEmail}
            type='email'
            id='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-primary block w-full p-2.5'
            placeholder='john.doe@company.com'
            required
            value={formState.email}
            onChange={handleChange('email')}
          />
        </div>
        <div
          className='grid grid-cols-2 gap-x-10
      '
        >
          <div className='mb-6'>
            <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 '>
              Mật khẩu cũ
            </label>
            <input
              disabled={isDisabledEmail}
              type='password'
              id='password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-primary block w-full p-2.5 '
              placeholder='•••••••••'
              required
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='confirm_password' className='block mb-2 text-sm font-medium text-gray-900'>
              Mật khẩu mới
            </label>
            <input
              disabled={isDisabledEmail}
              type='password'
              id='confirm_password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-primary block w-full p-2.5  '
              placeholder='•••••••••'
              required
            />
          </div>
        </div>
        {!isDisabledEmail ||
          (!isDisabled && (
            <button
              type='submit'
              className='text-white  bg-primary hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center '
            >
              Submit
            </button>
          ))}
      </form>
    </div>
  )
}

export default Profile
