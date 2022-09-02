import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useState } from 'react'
import {
  IconButton,
  InfoPaymentTypeMessage,
  PaymentTypeContainer,
} from './style'

const paymentTypes = [
  {
    type: 'CARTÃO DE CRÉDITO',
    icon: <CreditCard size={18} />,
  },
  {
    type: 'CARTÃO DE DÉBITO',
    icon: <Bank size={18} />,
  },
  {
    type: 'DINHEIRO',
    icon: <Money size={18} />,
  },
]

export function PaymentType() {
  const [paymentType, setPaymentType] = useState(paymentTypes[0].type)

  return (
    <PaymentTypeContainer>
      <InfoPaymentTypeMessage>
        <CurrencyDollar size={22} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '0.5rem',
          }}
        >
          <h2>Pagamento</h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </InfoPaymentTypeMessage>
      <div
        style={{
          marginTop: '2rem',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {paymentTypes.map(({ type, icon }) => (
          <IconButton
            key={type}
            isActive={paymentType === type}
            onClick={() => setPaymentType(type)}
          >
            {icon}
            <p>{type}</p>
          </IconButton>
        ))}
      </div>
    </PaymentTypeContainer>
  )
}
