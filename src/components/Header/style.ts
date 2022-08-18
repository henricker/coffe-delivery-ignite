import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  padding: 4rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`

export const BaseButton = styled.button`
  padding: 0.8rem;
  height: 3.8rem;
  border: 0;
  display: flex;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
`

export const LocationButton = styled(BaseButton)`
  justify-content: space-between;

  gap: 0.25rem;

  background: ${(props) => props.theme.colors['secondary-light']};
  font-size: ${(props) => props.theme.fontSize[14]};

  color: ${(props) => props.theme.colors['secondary-dark']};

  > svg {
    flex-shrink: 0;
    color: ${(props) => props.theme.colors.secondary};
  }
`

export const CartButton = styled(BaseButton)`
  background: ${(props) => props.theme.colors['primary-light']};
  flex-shrink: 0;
  justify-content: center;

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

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  bottom: calc(100% - 1rem);
  left: calc(100% - 1rem);
`
