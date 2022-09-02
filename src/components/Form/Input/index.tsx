import { FormGroup, InputStyle, OptionalText } from './style'
import { InputHTMLAttributes } from 'react'

export type InputProps = {
  isOptional?: boolean
  inputWidth?: string | number
} & InputHTMLAttributes<any>

export function Input({ isOptional, inputWidth, ...rest }: InputProps) {
  return (
    <FormGroup inputWidth={inputWidth}>
      <InputStyle {...rest} />
      {isOptional && <OptionalText>Opcional</OptionalText>}
    </FormGroup>
  )
}
