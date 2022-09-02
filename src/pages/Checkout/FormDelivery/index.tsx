import { FormDeliveryContainer } from './style'
import { Form } from './Form'
import { PaymentType } from './PaymentType'

export function FormDelivery() {
  return (
    <FormDeliveryContainer>
      <h2 className="complete-checkout-form-text">Complete seu pedido</h2>
      <Form />
      <PaymentType />
    </FormDeliveryContainer>
  )
}
