import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  padding: 1.25rem;
  background-color: red;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${(props) => props.theme.colors['gray-200']};

  border-radius: 6px 36px;

  > img {
    margin-top: -4rem;
    width: 100px;
    height: 100px;
  }

  h2.coffee-name {
    margin-top: 1rem;
    font-family: ${(props) => props.theme.fonts.header};
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors['gray-800']};
    font-weight: 700;
  }

  p {
    text-align: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors['gray-600']};
  }
`

export const CoffeeSpecification = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1rem;
  gap: 0.25rem;

  div {
    background: ${(props) => props.theme.colors['primary-light']};
    border-radius: 100px;
    /* width: 5.0625rem; */
    height: 1.3125rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: ${(props) => props.theme.fontSize[10]};
      color: ${(props) => props.theme.colors['primary-dark']};
      font-weight: 700;
    }
  }
`

export const PriceAndShoppingCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.4375rem;

  margin-top: 2.1rem;

  width: calc(100% - 1.5rem);

  > h2 {
    font-family: ${(props) => props.theme.fonts.header};
    font-size: 1.5rem;
    font-weight: 800;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`

export const ButtonCart = styled.button`
  background: ${(props) => props.theme.colors['secondary-dark']};
  padding: 0.7rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;

  height: 2.375rem;

  svg {
    color: ${(props) => props.theme.colors.white};
  }
`
