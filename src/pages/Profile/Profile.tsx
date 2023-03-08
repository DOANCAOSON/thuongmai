import React from 'react'
import { useState, useEffect } from 'react'
import Edit from '../../assets/images/Edit.png'
import Email from '../../assets/images/Email.png'
import Lock from '../../assets/images/Lock.png'
import EyeOff from '../../assets/images/EyeOff.png'

const Profile = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    lastname: '',
    address: '',
    number: '',
    checkpassword: ''
  }

  const fakerValue = {
    name: 'Sơn',
    email: 'Hoyyga2@gamil.com',
    password: '0972985422ad',
    lastname: 'Đoàn',
    address: '144/9 Tố Hữu Hòa Cường Nam Hải Châu Đà Nẵng',
    number: '0935892858',
    checkpassword: '0972985422ad'
  }
  const [formValues, setFormValues] = useState(fakerValue)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [isDisabled, setDisable] = useState(true)
  console.log(isDisabled)

  //
  // formValues để đưa dữ liệu qua sever
  //  đã lấy dữ liệu thành công
  console.log(formValues)

  const handleEditProfile = () => {
    console.log('bam dc')
    setDisable(!isDisabled)
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors])

  const validate = (values: any) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!values.name) {
      errors.name = 'Username is required!'
    }
    if (!values.lastname) {
      errors.lastname = 'Lastname is required!'
    }
    if (!values.lastname) {
      errors.address = 'Adress is required!'
    }

    if (!values.lastname) {
      errors.number = Number
    }
    if (!values.email) {
      errors.email = 'Email is required!'
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!'
    }
    if (!values.password) {
      errors.password = 'Password is required'
    } else if (values.password.length < 4) {
      errors.password = 'Password must be more than 4 characters'
    } else if (values.password.length > 10) {
      errors.password = 'Password cannot exceed more than 10 characters'
    }
    return errors
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='mobile:p-8 mobile:mt-10'>
        <div className='mb-[80px]'>
          <div className='text-2xl text-textSearch font-bold'>Account InForMation</div>
          <div className='text-text-color text-xs'>Update your account information</div>
        </div>
        <div className='mb-10'>
          <div className='flex w-[1074px]  justify-between mobile:justify-start mobile:text-base'>
            <div className='text-xl text-textSearch font-bold mr-10'>PreSonal Information</div>
            <div onClick={handleEditProfile} className='flex items-center '>
              <div className='mr-2'>
                <img src={Edit} alt='' />
              </div>
              <div className='w-[20px]'>
                <div>{isDisabled ? 'Edit' : 'Save'}</div>
                {/* <div className={`${isDisabled === true ? 'hidden' : ''}`}>Save</div> */}
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 mobile:grid-cols-1 '>
          <div className='mb-8'>
            <div className='mb-2'>
              <label className='text-text-color text-sm' htmlFor=''>
                First Name
              </label>
            </div>
            <div
              className={`${formErrors.name === 'Username is required!' ? 'border-boderErr border-[1px] ' : ''} 
               ${formValues.name ? 'border-borderNone' : ''}
              w-[80%] mobile:w-[100%] h-[50px] bt-[50px] border-2 rounded`}
            >
              <input
                disabled={isDisabled}
                name='name'
                value={formValues.name}
                className='h-[100%]  w-[100%] pl-6 text-textBlack '
                type='text'
                placeholder='MahFuzul lslam'
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='mb-8'>
            <div className='mb-2'>
              <label htmlFor='' className='text-text-color text-sm'>
                Last
              </label>
            </div>
            <div
              className={`
              ${formErrors.lastname === 'Lastname is required!' ? 'border-boderErr border-[1px]' : ''}
               ${formValues.lastname ? 'border-borderNone' : ''}
              
              w-[80%]  mobile:w-[100%]  h-[50px] bt-[50px] border-2 rounded `}
            >
              <input
                disabled={isDisabled}
                name='lastname'
                className='h-[100%]  w-[100%] pl-6 text-textBlack '
                type='text'
                value={formValues.lastname}
                placeholder='Nabil'
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='mb-8'>
            <div className='mb-2'>
              <label htmlFor='' className='text-text-color text-sm'>
                Địa chỉ
              </label>
            </div>
            <div
              className={`
              ${formErrors.address === 'Adress is required!' ? 'border-boderErr border-[1px]' : ''}
               ${formValues.address ? 'border-borderNone' : ''}
              w-[80%]  mobile:w-[100%]  h-[50px] bt-[50px] border-2 rounded `}
            >
              <input
                disabled={isDisabled}
                name='address'
                className='h-[100%]  w-[100%] pl-6 text-textBlack '
                type='text'
                value={formValues.address}
                placeholder='Địa Chỉ'
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div className='mb-2'>
              <label htmlFor='' className='text-text-color text-sm'>
                Mobile Number
              </label>
            </div>
            <div
              className={`
              ${formErrors.number === Number ? 'border-boderErr border-[1px]' : ''} 
                ${formValues.number ? 'border-borderNone' : ''}
              w-[80%]  mobile:w-[100%]  h-[50px] bt-[50px] border-2 rounded `}
            >
              <input
                disabled={isDisabled}
                name='number'
                className='h-[100%]  w-[100%] pl-6 text-textBlack '
                type='text'
                value={formValues.number}
                onChange={handleChange}
                placeholder='Số điện thoại'
              />
            </div>
          </div>
        </div>

        <div className='mb-10 mt-10'>
          <div className=' flex w-[873px] justify-between mobile:justify-start mobile:text-base mobile:w-[400px] justify-between'>
            <div className='text-xl text-textSearch font-bold mobile:mr-[130px]'>Credentials</div>
            <div onClick={handleEditProfile} className='flex items-center '>
              {/* <div className='mr-2'>
                <img src={Edit} alt='' />
              </div>
              <div>{isDisabled ? 'Edit' : 'Save'}</div> */}
            </div>
          </div>
        </div>
        <div className='mb-6'>
          <div>
            <div className='mb-3'>
              <label htmlFor='' className='text-text-color text-sm'>
                Email
              </label>
            </div>
            <div
              className={`
              ${formErrors.email === 'Email is required!' ? 'border-boderErr border-[1px]' : ''}
                ${formValues.email ? 'border-borderNone' : ''}
              ${
                formErrors.email === 'This is not a valid email format!' ? 'border-boderErr border-[1px]' : ''
              } flex items-center border-2 rounded-sm  mobile:w-[100%]  h-[50px] w-[90%]`}
            >
              <div className='ml-4 mr-4 w-[24px] h-[24px]'>
                <img src={Email} alt='' />
              </div>
              <div className='w-[100%] '>
                <input
                  disabled={isDisabled}
                  name='email'
                  value={formValues.email}
                  className={`w-[100%] bg-textColorwhite`}
                  type='email'
                  placeholder='nhapgamil@gmail.com'
                  onChange={handleChange}
                />
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div>
          <div className='grid grid-cols-2 mobile:grid-cols-1'>
            <div className='w-[100%] mobile:w-[100%] mobile:mb-[28px] '>
              <div className='mb-2'>
                <label htmlFor=''>New Password</label>
              </div>
              <div
                className={`
                ${formErrors.password === 'Password is required' ? 'border-boderErr border-[1px]' : ''}
                ${formValues.password ? 'border-borderNone' : ''}
                
                w-[80%]  mobile:w-[100%]  h-[50px] bt-[50px] border-2 rounded flex  items-center  `}
              >
                <div className='ml-4 mr-4 w-[24px] h-[24px]'>
                  <img src={Lock} alt='' />
                </div>
                <div className='mr-8'>
                  <input
                    disabled={isDisabled}
                    className='w-[100%]'
                    type='password'
                    name='password'
                    value={formValues.password}
                    placeholder='**********'
                    onChange={handleChange}
                  />
                </div>
                <div className='ml-4 mr-4 w-[24px] h-[24px]'>
                  <img src={EyeOff} alt='' />
                </div>
              </div>
            </div>

            <div className='w-[100%] mobile:w-[100%]'>
              <div className='mb-2'>
                <label htmlFor=''>Confirm Password</label>
              </div>
              <div
                className={`
                ${formErrors.password === 'Password is required' ? 'border-boderErr border-[1px]' : ''}
                 ${formValues.checkpassword ? 'border-borderNone' : ''}
                w-[80%]  mobile:w-[100%]  h-[50px] bt-[50px] border-2 rounded flex  items-center  `}
              >
                <div className='ml-4 mr-4 w-[24px] h-[24px]'>
                  <img src={Lock} alt='' />
                </div>
                <div className='mr-8'>
                  <input
                    disabled={isDisabled}
                    type='password'
                    name='checkpassword'
                    value={formValues.checkpassword}
                    placeholder='**********'
                    onChange={handleChange}
                  />
                </div>
                <div className='ml-4 mr-4 w-[24px] h-[24px]'>
                  <img src={EyeOff} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex justify-center mt-10 mb-[300px]`}>
          <button className={`${isDisabled === true ? 'hidden' : ''} h-[40px] w-[80px] bg-primary text-textColorwhite`}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Profile
