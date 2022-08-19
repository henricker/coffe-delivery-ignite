import { Minus, Plus } from 'phosphor-react'
import { ButtonContainer } from './style'

type PlusMinusShoppingCardButtonProps = {
  onClickMinus?: () => void
  onClickPlus?: () => void
}

export function PlusMinusShoppingCardButton({
  onClickMinus,
  onClickPlus,
}: PlusMinusShoppingCardButtonProps) {
  return (
    <ButtonContainer>
      <button onClick={onClickMinus}>
        <Minus size={14} weight="fill" />
      </button>
      <span>1</span>
      <button onClick={onClickPlus}>
        <Plus size={14} weight="fill" />
      </button>
    </ButtonContainer>
  )
}
