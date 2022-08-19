import styled from 'styled-components'

export const CoffeeListWrapper = styled.div`
  width: 100%;
  padding-left: 10rem;
  padding-right: 10rem;
`

export const CoffeeContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  > h2 {
    font-family: ${(props) => props.theme.fonts.header};
    font-weight: 800;
    font-size: ${(props) => props.theme.fontSize[32]};
  }
`

export const CoffeeListContainer = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24.4rem, auto));
  gap: 4rem 3.2rem;
`
