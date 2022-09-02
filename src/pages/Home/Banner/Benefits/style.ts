import styled from 'styled-components'

export const ListBenefitsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  gap: 2.5rem;

  @media screen and (max-width: 881px) {
    gap: 1rem;
    justify-content: space-around;
  }

  @media screen and (max-width: 711px) {
    flex-direction: column;
    gap: 0rem;
  }
`

export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media screen and (max-width: 881px) {
    text-align: center;
  }

  @media screen and (max-width: 711px) {
    align-items: flex-start;
    gap: 0rem;
  }
`

export const BenefitContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors['gray-700']};
  }
`

type BenefitIconContainerProps = {
  color: string
}

export const BenefitIconContainer = styled.div<BenefitIconContainerProps>`
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.color};
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  > svg {
    flex-shrink: 0;
    color: ${(props) => props.theme.colors['gray-100']};
  }
`
