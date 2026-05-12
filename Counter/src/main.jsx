import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Connect React to the HTML element with id="root" and show the App component.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* StrictMode helps React warn about possible problems during development. */}
    <App />
  </StrictMode>,
)
