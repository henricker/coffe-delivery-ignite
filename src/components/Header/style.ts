import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  padding: 1rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 5.371875rem;
    height: 2.5rem;
  }
`

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`

export const BaseButton = styled.button`
  padding: 0.5rem;
  height: 2.375rem;
  border: 0;
  display: flex;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
`

export const LocationButton = styled(BaseButton)`
  width: 8.9375rem;
  gap: 0.1rem;

  background: ${(props) => props.theme.colors['secondary-light']};

  & > p {
    font-size: 0.8rem;
    line-height: 1.1375rem;
  }

  color: ${(props) => props.theme.colors['secondary-dark']};

  > svg {
    flex-shrink: 0;
    width: 1.375rem;
    height: 1.375rem;
    color: ${(props) => props.theme.colors.secondary};
  }
` as any

export const CartButton = styled(BaseButton)`
  background: ${(props) => props.theme.colors['primary-light']};
  flex-shrink: 0;
  justify-content: center;

  width: 2.375rem;
  height: 2.375rem;

  color: ${(props) => props.theme.colors['primary-dark']};
  position: relative;
`

export const CartCount = styled.div`
  position: absolute;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors['primary-dark']};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.25rem;
  height: 1.25em;

  font-size: 0.75rem;
  padding: 0.5rem;

  border-radius: 50%;

  bottom: calc(100% - 0.8rem);
  left: calc(100% - 0.8rem);
`
