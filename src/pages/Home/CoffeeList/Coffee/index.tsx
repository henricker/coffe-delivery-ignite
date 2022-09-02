import { ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { PlusMinusShoppingCardButton } from '../../../../components/Buttons/PlusMinusShoppingCardButton'
import { realCurrencyFormatter } from '../../../../utils/format-real-currency'
import {
  ButtonCart,
  ButtonsContainer,
  CoffeeContainer,
  CoffeeSpecification,
  PriceAndShoppingCartContainer,
} from './style'

type CoffeeTypeProps = {
  coffee: {
    id: number
    name: string
    description: string
    image: string
    specifications: string[]
    price: number
  }
}

export function Coffee({ coffee }: CoffeeTypeProps) {
  return (
    <CoffeeContainer>
      <img src={coffee.image} alt="coffee" width={120} height={120} />
      <CoffeeSpecification>
        {coffee.specifications.map((item) => (
          <div key={item}>
            <p>{item}</p>
          </div>
        ))}
      </CoffeeSpecification>
      <h2 className="coffee-name">{coffee.name}</h2>
      <p>{coffee.description}</p>
      <PriceAndShoppingCartContainer>
        <h2>{realCurrencyFormatter.format(coffee.price)}</h2>
        <ButtonsContainer>
          <PlusMinusShoppingCardButton id={coffee.id} />
          <Link to="/checkout">
            <ButtonCart>
              <ShoppingCart size={22} weight="fill" />
            </ButtonCart>
          </Link>
        </ButtonsContainer>
      </PriceAndShoppingCartContainer>
    </CoffeeContainer>
  )
}
