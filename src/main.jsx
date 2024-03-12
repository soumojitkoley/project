import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './Context/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ParallaxProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ParallaxProvider>
  </BrowserRouter>
)
