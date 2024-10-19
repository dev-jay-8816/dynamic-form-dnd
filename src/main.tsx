import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'react-toastify/dist/ReactToastify.css';



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { FormProvider } from './contexts/form.context.tsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormProvider>
      <App />
      <ToastContainer
        autoClose={2000}
        newestOnTop
        position='top-right'
      />
    </FormProvider>
  </StrictMode>,
)
