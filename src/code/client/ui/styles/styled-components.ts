import * as styledComponents from 'styled-components'
import {ThemedStyledComponentsModule} from 'styled-components'
import {StyleTheme} from './styleTheme'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ThemeConsumer,
  withTheme,
} = styledComponents as ThemedStyledComponentsModule<StyleTheme>

export {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ThemeConsumer,
  withTheme,
}
export default styled
