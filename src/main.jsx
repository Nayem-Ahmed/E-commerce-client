import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import ShopContextProvider from './Context/ShopContext.jsx'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProviders from './Providers/AuthProviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>

    <ShopContextProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </ShopContextProvider>
    </AuthProviders>
  </React.StrictMode>,
)
