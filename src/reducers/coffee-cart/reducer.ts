/* eslint-disable no-case-declarations */
import { coffeesData } from '../../utils/data/coffe'
import { ActionsType } from './type-actions'
import produce from 'immer'

type CoffeeType = {
  id: number
  name: string
  description: string
  image: string
  specifications: string[]
  price: number
  quantity: number
}

export type CoffeeCartReducerType = {
  items: CoffeeType[]
  totalItems: number
  deliveryPrice: number
  total: number
}

export function coffeeReducer(
  state: CoffeeCartReducerType,
  action: { type: ActionsType; payload: any },
) {
  switch (action.type) {
    case ActionsType.INCREASE_QUANTITY: {
      const coffee = state.items.find((it) => it.id === action.payload.id)
      if (!coffee) {
        const coffeeData = coffeesData.find(
          (it) => it.id === action.payload.id,
        )!

        return produce(state, (draft) => {
          draft.items.push({
            ...coffeeData,
            quantity: 1,
          })
        })
      }

      return produce(state, (draft) => {
        draft.items.forEach((it) => {
          if (it.id === action.payload.id) {
            it.quantity++
          }
        })

        draft.totalItems = draft.items
          .map((it) => it.quantity * it.price)
          .reduce((a, b) => a + b, 0)

        draft.total = draft.totalItems + draft.deliveryPrice
      })
    }
    case ActionsType.DECREASE_QUANTITY: {
      const coffee = state.items.find((it) => it.id === action.payload.id)

      if (coffee?.quantity === 1) {
        return produce(state, (draft) => {
          draft.items = state.items.filter((it) => it.id !== action.payload.id)
        })
      }

      return produce(state, (draft) => {
        draft.items.forEach((it) => {
          if (it.id === action.payload.id) {
            it.quantity--
          }
        })

        draft.totalItems = draft.items
          .map((it) => it.quantity * it.price)
          .reduce((a, b) => a + b, 0)

        draft.total = draft.totalItems + draft.deliveryPrice
      })
    }
    case ActionsType.REMOVE_COFFEE: {
      return produce(state, (draft) => {
        draft.items = state.items.filter((it) => it.id !== action.payload.id)
        draft.totalItems = draft.items
          .map((it) => it.quantity * it.price)
          .reduce((a, b) => a + b, 0)

        draft.total = draft.totalItems + draft.deliveryPrice
      })
    }

    default:
      return state
  }
}
