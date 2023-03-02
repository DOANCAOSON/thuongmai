import Google from '../../assets/images/Google.png'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import Input from 'src/components/Input'
import { LoginAccount } from 'src/apis/auth.api'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'

const schema = yup
  .object({
    email: yup.string().email('Incorrect email format!').required('Email already registerd'),
    password: yup
      .string()
      .required('Password already registerd')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        'Password must be at least 8 characters, 1 uppercase, 1 lowercase and 1 number!'
      )
  })
  .required()
type FormData = yup.InferType<typeof schema>
const Login = () => {
  const { setIsAuthenticated } = useContext(AppContext)
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })
  const navigate = useNavigate()

  const mutation = useMutation((body: Omit<FormData, 'cmd'>) => {
    return LoginAccount(body)
  })
  const onSubmit = (data: FormData) => {
    mutation.mutate(data, {
      onSuccess: (dataUser) => {
        if (dataUser.data.status === 'ERR') {
          const formError = dataUser.data.message
          setError('email', {
            message: formError,
            type: 'Server'
          })
          setError('password', {
            message: formError,
            type: 'Server'
          })
        }
        if (dataUser.data.status === 'OK') {
          // const newUser = omit(dataUser.data.data, ['password', 'isAdmin'])
          toast.success('Đăng nhập thành công!')
          setIsAuthenticated(true)
          navigate('/')
        }
      }
    })
  }
  return (
    <div className=' '>
      <div className='z-10 bg-white mx-auto w-[556px] mobile:w-[327px] border rounded-lg flex flex-col px-[60px] py-[50px] mobile:px-[38px]'>
        <div className='mb-[20px]'>
          <h1 className='text-[20px] leading-[30px] font-[600px] text-center mb-[10px]'> Welcome Back!</h1>
          <div className='text-center'>
            <span className='text-text-color text-[14px] mobile:text-[12px]'>Dont have an account?</span>{' '}
            <span className='text-primary cursor-pointer mobile:text-[12px]'>
              <Link to='/register'>Sign up</Link>
            </span>
          </div>
        </div>
        <div className=''>
          <button className='flex items-center gap-x-2 w-full justify-center border rounded-md p-2 mb-[10px]'>
            <div className='w-6 h-6'>
              <img src={Google} alt='' />
            </div>
            <h1 className=''>Sign up with google</h1>
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='mt-[20px]'>
          <Input
            register={register}
            errrorMessage={errors.email?.message}
            placeholder={'example@gmail.com'}
            name='email'
          ></Input>

          <Input
            register={register}
            errrorMessage={errors.password?.message}
            placeholder={'Password'}
            name='password'
          ></Input>
          <div className='text-red-300 pt-2'>{errors.email?.message ? errors.email?.message : ''}</div>
          <div className='text-[14px] text-primary float-right p-3 cursor-pointer'>Forgot password</div>
          <button className='bg-primary w-full text-white rounded-lg py-[15px] mt-[10px] '>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
