import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './app/App'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import './index.css'
import { AuthProdiver } from './context/AuthProvider';
import { PurchaseProvider } from './context/PurchaseProvider';
import { Login, Signup, Home,Shop,Cart } from './routes'
import ProductPage,{loader as ProductLoader} from './routes/ProductPage';
import {action as registerAction} from './routes/Signup'
import ErrorElement from './routes/ErrorElement';
import RequireAuth from './components/RequireAuth';
import PersistLogin from './components/PersistLogin';
import('preline')





const router = createBrowserRouter([
  // Protected routes
  {
    element : <PersistLogin /> ,
    children : [
      {
        path: "/",
        element:<App />,
        errorElement : <ErrorElement />,
        children : [
                    {
                      index:true,
                      element:<Home />
                    },
    
    
    
                    {
                      path:"/shop/:productId/preview",
                      element:<ProductPage />,
                      loader:ProductLoader
                      // errorElement : <div>Oops! There was an error.</div>
                    },
                    {
                       path: "/shop",
                      element:<Shop />
                    } ,
                    {
                      path: "/cart",
                     element:<Cart />
                   } 
                   ]
      },
    
                ]
  },




 // UnProtected routes
  {
    path:"/login",
    element:<Login />
  },
  
  {
    path:"/register",
    element:<Signup />,
    action:registerAction,
    errorElement : <ErrorElement />,
    
  }
]);





if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProdiver>
      <PurchaseProvider>
        <RouterProvider router={router} />
      </PurchaseProvider>
    </AuthProdiver>
  </React.StrictMode>,
)
