import type { UseFormRegister } from 'react-hook-form'

interface Props {
  errrorMessage?: string
  placeholder?: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
}
const Input = ({ errrorMessage, placeholder, name, register }: Props) => {
  return (
    <div className='mb-[10px] '>
      <label>
        <p className='mb-[10px] mobile:text-[14px] capitalize '>{name} *</p>
        <input
          {...register(name)}
          className={`rounded-lg border h-[52px] w-full pl-[25px] ${
            errrorMessage ? 'border-[#EB5757]' : 'border-[#F1F1F3]'
          }`}
          placeholder={placeholder}
        />
      </label>
    </div>
  )
}

export default Input
