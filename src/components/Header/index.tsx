import {
  CartButton,
  CartCount,
  HomeContainer,
  LocationButton,
  MenuContainer,
} from './style'
import Logo from '../../assets/brand/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeCartContext } from '../../context/coffee-cart'
import { Link } from 'react-router-dom'

export function Header() {
  const { state } = useContext(CoffeeCartContext)

  const totalItems = state.items
    .map((item) => item.quantity)
    .reduce((a, b) => a + b, 0)

  return (
    <HomeContainer>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <MenuContainer>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          <p>Boa Viagem, CE</p>
        </LocationButton>
        <Link to="/checkout">
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
            {totalItems > 0 && <CartCount>{totalItems}</CartCount>}
          </CartButton>
        </Link>
      </MenuContainer>
    </HomeContainer>
  )
}
