import React from 'react'
import { createRoot } from 'react-dom/client'
import PujasPage from './PujasPage'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PujasPage />
  </React.StrictMode>,
)
