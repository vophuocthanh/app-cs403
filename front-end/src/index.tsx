import { Routes } from '@generouted/react-router'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import './style.css'

function App() {
  return (
    <>
      <Routes />
      <Toaster richColors position="top-right" />
    </>
  )
}

const root = createRoot(document.getElementById('root'))

root.render(<App />)
