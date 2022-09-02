import styled from 'styled-components'

export const CoffeListCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 250px;

  overflow-y: scroll;
`

export const CoffeCart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.8rem;

  &:not(:first-child) {
    margin-top: 1.5rem;
  }

  h2:last-child {
    font-size: 1rem;
    width: 5.5rem;
  }

  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors['gray-400']};
`

export const RemoveButton = styled.button`
  background: ${(props) => props.theme.colors['gray-400']};
  border: none;

  display: flex;
  align-items: center;

  padding: 0.5rem;

  gap: 0.25rem;

  cursor: pointer;
  border-radius: 6px;

  > svg {
    flex-shrink: 0;
    color: ${(props) => props.theme.colors.secondary};
    width: 1rem;
    height: 1rem;
  }

  p {
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors['gray-700']};
  }
`

export const CoffeeDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  h2 {
    font-size: 1rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  height: 2rem;
`
