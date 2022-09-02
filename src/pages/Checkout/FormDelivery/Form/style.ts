import styled from 'styled-components'

export const FormContainer = styled.div`
  background: ${(props) => props.theme.colors['gray-200']};
  padding: 2rem;
  max-width: 40rem;
`

export const InfoAddressMessage = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  > div {
    margin-top: 0.5rem;
  }

  > svg {
    flex-shrink: 0;
    color: ${(props) => props.theme.colors['primary-dark']};
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
    font-weight: 1.11375rem;
  }
`

export const FormContent = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`
