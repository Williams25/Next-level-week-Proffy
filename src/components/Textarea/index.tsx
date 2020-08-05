import React , {TextareaHTMLAttributes} from 'react'

require('./styles.css')

interface textareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  name: string
}

const Textarea: React.FC<textareaProps> = ({label, name, ...rest}) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} >
      </textarea>
    </div>
  )
}

export default Textarea