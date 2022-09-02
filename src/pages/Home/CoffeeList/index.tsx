import { useEffect, useState } from 'react'
import { coffeesData } from '../../../utils/data/coffe'
import { Coffee } from './Coffee'
import { CoffeeContent, CoffeeListContainer, CoffeeListWrapper } from './style'

type CoffeeType = {
  id: number
  name: string
  description: string
  image: string
  specifications: string[]
  price: number
}

export function CoffeeList() {
  const [coffees, setCoffees] = useState<CoffeeType[]>([])

  useEffect(() => {
    setCoffees(coffeesData)
  }, [])

  return (
    <CoffeeListWrapper>
      <CoffeeContent>
        <h2>Nossos cafés</h2>
        <CoffeeListContainer>
          {coffees.map((item) => (
            <li key={item.name}>
              <Coffee coffee={item} />
            </li>
          ))}
        </CoffeeListContainer>
      </CoffeeContent>
    </CoffeeListWrapper>
  )
}
