import { FormDelivery } from './FormDelivery'
import { ShoppingCart } from './ShoppingCart'
import { CheckoutContainer, CheckoutContent } from './style'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutContent>
        <FormDelivery />
        <ShoppingCart />
      </CheckoutContent>
    </CheckoutContainer>
  )
}
