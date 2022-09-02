import styled from 'styled-components'

type InputStyleProps = {
  isOptional?: boolean
  inputWidth?: string | number
}

type FromGroudProps = Pick<InputStyleProps, 'inputWidth'>

export const InputStyle = styled.input<InputStyleProps>`
  display: block;
  width: 100%;
  background: ${(props) => props.theme.colors['gray-300']};
  padding: 0.75rem;
  border: 0;
  border-radius: 4px;
  height: 3rem;
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.colors['gray-600']};
    line-height: 1.1375rem;
    font-size: 0.875rem;
    font-weight: 400;
  }
  z-index: 1;

  color: ${(props) => props.theme.colors['gray-600']};
  line-height: 1.1375rem;
  font-size: 0.875rem;
  font-weight: 400;
`

export const FormGroup = styled.div<FromGroudProps>`
  width: 100%;
  position: relative;
  width: ${(props) => (props.inputWidth ? props.inputWidth : '20rem')};
`

export const OptionalText = styled.small`
  position: absolute;
  z-index: 2;

  right: 5%;
  top: 36%;
  color: ${(props) => props.theme.colors['gray-600']};
  font-size: 0.75rem;
`
