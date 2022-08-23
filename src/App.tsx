import { ThemeProvider } from 'styled-components'
import { ToDoProvider } from './context'
import { Home } from './pages'
import { GlobalStyles } from './styles/globalStyles'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme.base}>
      <GlobalStyles />
      <ToDoProvider>
        <Home />
      </ToDoProvider>
    </ThemeProvider>
  )
}

export default App
