import styled from 'styled-components'

export const ShoppingCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9375rem;
`

export const ShoppingCartContent = styled.div`
  background: ${(props) => props.theme.colors['gray-200']};
  padding: 2.5rem;
  border-radius: 6px 44px;
  width: 100%;
`

export const TotalValuesCart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;
`

export const RowTotalValueCart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  p.title-cart-value {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors['gray-700']};
    line-height: 1.1375rem;
  }

  p.strong-cart-value {
    font-weight: 700;
    color: ${(props) => props.theme.colors['gray-800']};
    font-size: 1.25rem;
    line-height: 1.625rem;
  }
`

export const ConfirmCheckoutButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  padding: 1rem 0px;

  margin-top: 1.5rem;

  border: none;
  border-radius: 6px;

  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
`
