import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from './components/dashboard';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dashboard />
  </StrictMode>,
)
