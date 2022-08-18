import {
  CartButton,
  CartCount,
  HomeContainer,
  LocationButton,
  MenuContainer,
} from './style'
import Logo from '../../assets/brand/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HomeContainer>
      <img src={Logo} alt="logo" width={85.95} height={40} />
      <MenuContainer>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          Boa Viagem, CE
        </LocationButton>
        <CartButton>
          <ShoppingCart size={22} weight="fill" />
          {/**
           * For now let cartCount mocked
           */}
          <CartCount>5</CartCount>
        </CartButton>
      </MenuContainer>
    </HomeContainer>
  )
}
