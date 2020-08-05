import React , {InputHTMLAttributes} from 'react'

require('./styles.css')

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string
  label: string
  name: string
}

const Input: React.FC<inputProps> = ({label, name, type, ...rest}) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} {...rest} />
    </div>
  )
}

export default Input