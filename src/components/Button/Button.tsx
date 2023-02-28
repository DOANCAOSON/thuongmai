interface Props {
  type?: string
  color?: string
  children?: React.ReactNode
}

const Button = ({ type, color, children }: Props) => {
  return (
    <button
      className={` ${
        color === 'primary' ? 'bg-primary ' : 'bg-violet'
      } text-4 font-[600] text-white h-[52px] rounded-[10px] ${type === 'big' ? 'w-full' : ''} ${
        type === 'small' ? 'w-[191px]' : ''
      }`}
    >
      {children}
    </button>
  )
}

export default Button
