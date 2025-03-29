import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './routers/AppRouter'
import { ThemeProvider } from './context/ThemeContext.jsx';
import './styles.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </StrictMode>,
)
