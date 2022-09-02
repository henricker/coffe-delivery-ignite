import { ActionsType } from './type-actions'

export function IncreaseQuantity(id: number) {
  return { type: ActionsType.INCREASE_QUANTITY, payload: { id } }
}

export function DecreaseQuantity(id: number) {
  return { type: ActionsType.DECREASE_QUANTITY, payload: { id } }
}

export function RemoveCoffee(id: number) {
  return { type: ActionsType.REMOVE_COFFEE, payload: { id } }
}
