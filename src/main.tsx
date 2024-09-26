import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { searchCompanies } from './api/API.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.tsx'

console.log(searchCompanies('AA'))
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
