import { useState } from 'react'
import Google from '../../assets/images/Google.png'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link } from 'react-router-dom'

const schema = yup
  .object({
    fullName: yup.string().required('Full name already registerd'),
    email: yup.string().email('Incorrect email format!').required('Email already registerd'),
    password: yup
      .string()
      .required('Password already registerd')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        'Password must be at least 8 characters, 1 uppercase, 1 lowercase and 1 number!'
      ),
    confirm_password: yup
      .string()
      .label('confirm password')
      .required('Confirm password already registerd')
      .oneOf([yup.ref('password'), null], 'Passwords must match')
  })
  .required()
type FormData = yup.InferType<typeof schema>
const Register = () => {
  const [term, setTerm] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })
  const onSubmit = (data: FormData) => {
    if (term === true) {
      console.log(data)
    }
  }
  return (
    <div className=' '>
      <div className='z-10 bg-white mx-auto w-[556px] mobile:w-[327px] border rounded-lg flex flex-col px-[60px] py-[50px] mobile:px-[38px]'>
        <div className='mb-[20px]'>
          <h1 className='text-[20px] leading-[30px] font-[600px] text-center mb-[10px]'> Sign Up</h1>
          <div className='text-center'>
            <span className='text-text-color text-[14px] mobile:text-[12px]'>Already heve an account?</span>{' '}
            <span className='text-primary cursor-pointer mobile:text-[12px]'>
              <Link to='/login'>Sign in</Link>
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
          <div className='text-text-color text-[14px] text-center mobile:text-[12px]'>Or sign up with email</div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='mt-[20px]'>
          <div className='mb-[10px]'>
            <label>
              <p className='mb-[10px] mobile:text-[14px]'>Full name *</p>
              <input
                {...register('fullName')}
                className={`rounded-lg border h-[52px] w-full pl-[25px] ${
                  errors.fullName ? 'border-[#EB5757]' : 'border-[#F1F1F3]'
                }`}
                placeholder={errors.fullName ? errors.fullName?.message : 'Example name'}
              />
            </label>
          </div>
          <div className='mb-[10px] '>
            <label>
              <p className='mb-[10px] mobile:text-[14px]'>Email *</p>
              <input
                {...register('email')}
                className={`rounded-lg border h-[52px] w-full pl-[25px] ${
                  errors.email ? 'border-[#EB5757]' : 'border-[#F1F1F3]'
                }`}
                placeholder={errors.email ? errors.email?.message : 'example@gmail.com'}
              />
            </label>
          </div>
          <div className='mb-[10px]'>
            <label>
              <p className='mb-[10px] mobile:text-[14px]'>Password *</p>
              <input
                {...register('password')}
                className={`rounded-lg border h-[52px] w-full pl-[25px] ${
                  errors.password ? 'border-[#EB5757]' : 'border-[#F1F1F3]'
                }`}
                placeholder={errors.password ? errors.password?.message : 'Create a password'}
              />
            </label>
          </div>
          <div className='mb-[10px]'>
            <label>
              <p className='mb-[10px] mobile:text-[14px]'>Confirm Password *</p>
              <input
                {...register('confirm_password')}
                className={`rounded-lg border h-[52px] w-full pl-[25px] ${
                  errors.confirm_password ? 'border-[#EB5757]' : 'border-[#F1F1F3]'
                }`}
                placeholder={errors.confirm_password ? errors.confirm_password?.message : 'Confirm password'}
              />
            </label>
          </div>

          <div>
            <label className='container'>
              <p className='pr-[35px] leading-5 mobile:text-[12px] mobile:pr-[0]'>
                I agree to the{' '}
                <a href='á' className='text-violet'>
                  Tearms of Use
                </a>{' '}
                and have read and understand the{' '}
                <a href='á' className='text-violet'>
                  Privacy policy
                </a>
                .
              </p>
              <input type='checkbox' onChange={(e) => setTerm(e.target.checked)} />
              <span className={term ? 'checkmark' : 'uncheckmark'}></span>
            </label>
          </div>
          <button className='bg-primary w-full text-white rounded-lg py-[15px] mt-[10px] '>Create my account</button>
        </form>
      </div>
    </div>
  )
}

export default Register
