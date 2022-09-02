import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CoffeeCartProvider } from './context/coffee-cart'
import { Router } from './Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './themes/default-theme'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CoffeeCartProvider>
          <Router />
        </CoffeeCartProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
