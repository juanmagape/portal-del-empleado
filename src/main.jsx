import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './components/nav.jsx'
import SideBar from './components/sidebar.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'lineicons/dist/lineicons.css';

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
