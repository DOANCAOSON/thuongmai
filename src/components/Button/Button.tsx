import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  type?: string
  color?: string
  children?: React.ReactNode
}

const Button = ({ type, color, children }: Props) => {
  const navigate = useNavigate()
  const checkType = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    if (e.currentTarget.textContent === 'Trở về') {
      navigate('/')
    }
    if (e.currentTarget.textContent === 'Thêm vào giỏ') {
      alert('Đã thêm vào giỏ')
    }
  }
  return (
    <button
      onClick={(e) => checkType(e)}
      className={` ${
        color === 'primary' ? 'bg-primary ' : 'bg-violet'
      } text-4 font-[600] w-full text-white h-[52px] rounded-[10px] ${type === 'big' ? 'w-full' : ''} ${
        type === 'small' ? 'w-[191px]' : ''
      }`}
    >
      {children}
    </button>
  )
}

export default Button
