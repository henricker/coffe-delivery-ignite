import 'styled-components'
import { defaultTheme } from '../themes/default-theme'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
