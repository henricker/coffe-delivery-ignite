import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/default-theme'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App"></div>
    </ThemeProvider>
  )
}

export default App
