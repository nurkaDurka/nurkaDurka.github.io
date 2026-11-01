import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import Sidebar from './components/Sidebar';


createRoot(document.getElementById('root')).render(
  <>
    <Sidebar />
  </>
)
