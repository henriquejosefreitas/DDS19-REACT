import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { MemoryRouter, RouterProvider } from 'react-router-dom'

import MyRouter from './MyRouter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={MyRouter}/>
  </StrictMode>,
)
