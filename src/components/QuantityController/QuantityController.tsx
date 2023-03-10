import { useState } from 'react'
interface Props {
  max?: number
  onIncrease?: (value: number) => void
  onDecrease?: (value: number) => void
  onType?: (value: number) => void
  classNameWrapper?: string
  value: string | number
}
const QuantityController = ({ max, onIncrease, onDecrease, onType, classNameWrapper = '', value }: Props) => {
  const [valueInput, setValueInput] = useState<string>('1')
  //   console.log(valueInput)
  //   const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { value } = e.target
  //     if (/^\d+$/.test(value) || value === '') {
  //       setValueInput(value)
  //     }
  //   }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let _value = Number(e.target.value)
    if (max !== undefined && _value > max) {
      _value = max
    } else if (_value < 1) {
      _value = 1
    }
    onType && onType(_value)
  }
  const decrease = () => {
    let _value = Number(value) - 1
    if (_value < 1) {
      _value = 1
    }
    onDecrease && onDecrease(_value)
  }
  const increase = () => {
    let _value = Number(value) + 1
    if (max)
      if (_value > max) {
        _value = max
      }
    onIncrease && onIncrease(_value)
  }
  return (
    <div className={'flex text-text-color justify-center' + classNameWrapper}>
      <button className='text-[30px] border p-2' onClick={decrease}>
        -
      </button>
      <input className='border w-[80px] text-[20px] text-center' type='text' value={value} onChange={handleChange} />
      <button className='text-[30px] border p-2' onClick={increase}>
        +
      </button>
    </div>
  )
}

export default QuantityController
