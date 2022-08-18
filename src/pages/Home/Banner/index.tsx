import {
  BannerContentContainer,
  BannerWrapper,
  PresentationContentContainer,
  TextBannerContainer,
} from './style'
import BannerCupOfCoffe from '../../../assets/banner/banner-cup-of-coffee.png'
import { Benefits } from './Benefits'

export function Banner() {
  return (
    <BannerWrapper>
      <BannerContentContainer>
        <PresentationContentContainer>
          <TextBannerContainer>
            <h2>Encontre o café perfeito para qualquer hora do dia</h2>
            <p>
              Com Coffee Delivery você recebe seu café onde estiver, a qualquer
              hora
            </p>
          </TextBannerContainer>
          <Benefits />
        </PresentationContentContainer>
        <img
          src={BannerCupOfCoffe}
          alt="Cup of coffee"
          width={476}
          height={360}
        />
      </BannerContentContainer>
    </BannerWrapper>
  )
}
