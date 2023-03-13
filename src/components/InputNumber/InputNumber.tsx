import { forwardRef, InputHTMLAttributes, useState } from 'react'
export interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
}
const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(function InputNumberInner(
  { onChange, value, ...rest },
  ref
) {
  const [localValue, setLocalValue] = useState<string>(value as string)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (/^\d+$/.test(value) || value === '') {
      onChange && onChange(event)
      setLocalValue(value)
    }
  }
  return (
    <div>
      <input
        className='border h-full w-[80px] mobile:w-[50px] text-[20px] mobile:text-[14px] text-center'
        type='text'
        value={value === undefined ? localValue : value}
        onChange={handleChange}
        {...rest}
        ref={ref}
      />
    </div>
  )
})

export default InputNumber
