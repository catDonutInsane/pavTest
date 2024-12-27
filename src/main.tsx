import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { DataProvider } from './components/context/Context.tsx'

createRoot(document.getElementById('root')!).render(
  <DataProvider>
    <App />
    </DataProvider>
  
)
