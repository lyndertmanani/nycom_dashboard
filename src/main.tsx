import React from 'react'
import { createRoot } from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.tsx'
import "./css/index.css"

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <NextUIProvider className="  text-foreground bg-slate-200 h-screen ">
    <App />
  </NextUIProvider>
</React.StrictMode>,
)
