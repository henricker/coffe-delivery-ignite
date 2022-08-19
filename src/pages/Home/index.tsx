import { Banner } from './Banner'
import { CoffeeList } from './CoffeeList'
import { HomeContainer } from './style'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <CoffeeList />
    </HomeContainer>
  )
}
