import styled from 'styled-components'
import BannerBackground from '../../../assets/banner/banner-background.svg'

export const BannerWrapper = styled.div`
  padding-left: 10rem;
  padding-right: 10rem;
  background-image: url(${BannerBackground});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`
export const BannerContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }

  @media screen and (max-width: 1020px) {
    flex-direction: column-reverse;
    gap: 2rem;

    img {
      width: 40rem;
    }
  }
`

export const PresentationContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
  max-width: 588px;
`

export const TextBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 3rem;
    font-family: ${(props) => props.theme.fonts.header};
    line-height: 3.9rem;
    color: ${(props) => props.theme.colors['gray-900']};
    font-weight: 800;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors['gray-800']};
  }

  @media screen and (max-width: 881px) {
    h2,
    p {
      text-align: center;
    }
  }
`
