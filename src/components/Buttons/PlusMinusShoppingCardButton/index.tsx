import { Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeCartContext } from '../../../context/coffee-cart'
import {
  DecreaseQuantity,
  IncreaseQuantity,
} from '../../../reducers/coffee-cart/actions'
import { ButtonContainer } from './style'

type PlusMinusShoppingCardButtonProps = {
  id: number
  heightButton?: string | number
}

export function PlusMinusShoppingCardButton({
  id,
  ...rest
}: PlusMinusShoppingCardButtonProps) {
  const { state, dispatch } = useContext(CoffeeCartContext)

  const quantity = state.items?.find((item) => item.id === id)?.quantity || 0

  function handleDispatchIncrease() {
    dispatch(IncreaseQuantity(id))
  }

  function handleDispatchDecrease() {
    dispatch(DecreaseQuantity(id))
  }

  return (
    <ButtonContainer {...rest}>
      <button onClick={() => handleDispatchDecrease()}>
        <Minus size={14} weight="fill" />
      </button>
      <span>{quantity}</span>
      <button onClick={() => handleDispatchIncrease()}>
        <Plus size={14} weight="fill" />
      </button>
    </ButtonContainer>
  )
}
