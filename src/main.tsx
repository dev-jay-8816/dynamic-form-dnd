import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { FormProvider } from './contexts/form.context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </StrictMode>,
)
