type ButtonProps = {
  text: string
  isSubmitting:boolean
}
const Button = ({ text, isSubmitting }: ButtonProps) => {
  return (
    <button disabled={isSubmitting} className='w-full select-none hover:bg-sky-900 font-semibold bg-sky-700 text-white py-2 outline-double outline-sky-700 border border-sky-700 duration-200 rounded-lg disabled:bg-gray-600'>{text}</button>
  )
}

export default Button
