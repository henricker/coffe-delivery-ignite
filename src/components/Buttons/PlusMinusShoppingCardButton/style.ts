import styled from 'styled-components'

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  background: ${(props) => props.theme.colors['gray-400']};
  padding: 0.5rem 0.53rem;
  border-radius: 6px;
  height: 4rem;

  button {
    cursor: pointer;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      color: ${(props) => props.theme.colors['secondary-dark']};
      background: ${(props) => props.theme.colors['gray-400']};
    }
  }

  span {
    font-size: ${(props) => props.theme.fontSize[16]};
  }
`
