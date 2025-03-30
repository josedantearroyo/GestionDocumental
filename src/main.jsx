import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import './styles.css'
import "swiper/swiper-bundle.css"
import "simplebar-react/dist/simplebar.min.css"
import "flatpickr/dist/flatpickr.css"
import App from "./App.jsx"
import { ThemeProvider } from "./context/ThemeContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
        <App />
    </ThemeProvider>
  </StrictMode>
)