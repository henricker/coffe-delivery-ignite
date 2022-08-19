import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  padding: 1.5rem;
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
    font-size: ${(props) => props.theme.fontSize[20]};
    color: ${(props) => props.theme.colors['gray-800']};
    font-weight: 700;
  }

  p {
    text-align: center;
    font-size: ${(props) => props.theme.fontSize[14]};
    color: ${(props) => props.theme.colors['gray-600']};
  }
`

export const CoffeeSpecification = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0.75rem;
  gap: 0.75rem;

  div {
    background: ${(props) => props.theme.colors['primary-light']};
    border-radius: 100px;
    width: 7rem;
    height: 2rem;
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
  justify-content: space-between;

  margin-top: 2.1rem;

  width: calc(100% - 1.5rem);

  > h2 {
    font-family: ${(props) => props.theme.fonts.header};
    font-size: ${(props) => props.theme.fontSize[24]};
    font-weight: 800;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const ButtonCart = styled.button`
  background: ${(props) => props.theme.colors['secondary-dark']};
  padding: 0.7rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.colors.white};
  }
`
