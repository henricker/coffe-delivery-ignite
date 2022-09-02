import {
  ButtonsContainer,
  CoffeCart,
  CoffeeDetails,
  CoffeListCartContainer,
  RemoveButton,
} from './style'
import { PlusMinusShoppingCardButton } from '../../../../components/Buttons/PlusMinusShoppingCardButton'
import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeCartContext } from '../../../../context/coffee-cart'
import { realCurrencyFormatter } from '../../../../utils/format-real-currency'
import { RemoveCoffee } from '../../../../reducers/coffee-cart/actions'
export function CoffeeListCart() {
  const {
    state: { items },
    dispatch,
  } = useContext(CoffeeCartContext)

  function handleRemoveItem(id: number) {
    dispatch(RemoveCoffee(id))
  }

  return (
    <CoffeListCartContainer
      style={
        items.length === 0
          ? { alignItems: 'center', justifyContent: 'center' }
          : {}
      }
    >
      {items.length > 0 ? (
        items.map((item) => (
          <CoffeCart key={item.image}>
            <img
              src={item.image}
              width={50}
              height={50}
              alt="Café no carrinho de compras"
            />
            <CoffeeDetails>
              <h2>{item.name}</h2>
              <ButtonsContainer>
                <PlusMinusShoppingCardButton
                  heightButton={'2rem'}
                  id={item.id}
                />
                <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                  <Trash />
                  <p>REMOVER</p>
                </RemoveButton>
              </ButtonsContainer>
            </CoffeeDetails>
            <h2>{realCurrencyFormatter.format(item.price)}</h2>
          </CoffeCart>
        ))
      ) : (
        <h2>Carrinho vazio</h2>
      )}
    </CoffeListCartContainer>
  )
}
