import styled from 'styled-components'

export const PaymentTypeContainer = styled.div`
  background: ${(props) => props.theme.colors['gray-200']};
  max-width: 40rem;
  padding: 2rem;
`

export const InfoPaymentTypeMessage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  > div {
    margin-top: 0.5rem;
  }

  > svg {
    flex-shrink: 0;
    color: ${(props) => props.theme.colors.secondary};
  }

  h2 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3rem;
    color: ${(props) => props.theme.colors['gray-800']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors['gray-700']};
    font-weight: 400;
  }
`

type IconButtonProps = {
  isActive?: boolean
}
export const IconButton = styled.button<IconButtonProps>`
  background: ${(props) =>
    props.isActive
      ? props.theme.colors['secondary-light']
      : props.theme.colors['gray-400']};
  border: none;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
  gap: 1rem;
  height: 3.18rem;
  border-radius: 6px;

  cursor: pointer;
  > svg {
    flex-shrink: 0;
    color: ${(props) => props.theme.colors.secondary};
  }

  p {
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors['gray-700']};
  }
`
