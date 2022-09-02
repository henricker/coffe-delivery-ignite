import { useContext } from 'react'
import { CoffeeCartContext } from '../../../context/coffee-cart'
import { realCurrencyFormatter } from '../../../utils/format-real-currency'
import { CoffeeListCart } from './CoffeListCart'
import {
  ConfirmCheckoutButton,
  RowTotalValueCart,
  ShoppingCartContainer,
  ShoppingCartContent,
  TotalValuesCart,
} from './style'

export function ShoppingCart() {
  const {
    state: { deliveryPrice, totalItems, total },
  } = useContext(CoffeeCartContext)
  return (
    <ShoppingCartContainer>
      <h2>Cafés selecionados</h2>
      <ShoppingCartContent>
        <CoffeeListCart />
        <TotalValuesCart>
          <RowTotalValueCart>
            <p className="title-cart-value">Total de ítens</p>
            <p>{realCurrencyFormatter.format(totalItems)}</p>
          </RowTotalValueCart>
          <RowTotalValueCart>
            <p className="title-cart-value">Entrega</p>
            <p>{realCurrencyFormatter.format(deliveryPrice)}</p>
          </RowTotalValueCart>
          <RowTotalValueCart>
            <p className="strong-cart-value">Total</p>
            <p className="strong-cart-value">
              {realCurrencyFormatter.format(total)}
            </p>
          </RowTotalValueCart>
        </TotalValuesCart>
        <ConfirmCheckoutButton>CONFIRMAR PEDIDO</ConfirmCheckoutButton>
      </ShoppingCartContent>
    </ShoppingCartContainer>
  )
}
