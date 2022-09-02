import { createContext, Dispatch, ReactNode, useReducer } from 'react'
import {
  CoffeeCartReducerType,
  coffeeReducer,
} from '../reducers/coffee-cart/reducer'
import { ActionsType } from '../reducers/coffee-cart/type-actions'

type CoffeeCartContextType = {
  state: CoffeeCartReducerType
  dispatch: Dispatch<{
    type: ActionsType
    payload: any
  }>
}

export const CoffeeCartContext = createContext({} as CoffeeCartContextType)

export const CoffeeCartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(coffeeReducer, {
    deliveryPrice: 3.5,
    items: [],
    total: 0,
    totalItems: 0,
  })
  return (
    <CoffeeCartContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CoffeeCartContext.Provider>
  )
}
