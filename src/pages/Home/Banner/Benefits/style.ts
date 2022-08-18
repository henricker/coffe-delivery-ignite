import styled from 'styled-components'

export const ListBenefitsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
`

export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const BenefitContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    font-size: ${(props) => props.theme.fontSize[16]};
    font-weight: 400;
    color: ${(props) => props.theme.colors['gray-700']};
  }
`

type BenefitIconContainerProps = {
  color: string
}

export const BenefitIconContainer = styled.div<BenefitIconContainerProps>`
  width: 4rem;
  height: 4rem;
  background-color: ${(props) => props.color};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  > svg {
    flex-shrink: 0;
    color: ${(props) => props.theme.colors['gray-100']};
  }
`
