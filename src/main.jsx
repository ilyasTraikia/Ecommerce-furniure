import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './app/App'
import './index.css'
import { AuthProdiver } from './context/AuthProvider';
import { Login, Signup, Home,Shop } from './routes'
import ProductPage,{loader as ProductLoader} from './routes/ProductPage';
import {action as registerAction} from './routes/Signup'
import ErrorElement from './routes/ErrorElement';
import RequireAuth from './components/RequireAuth';
import('preline')





const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    errorElement : <ErrorElement />,
    children : [
      {
              element : <RequireAuth allowedRoles={['User']} />,
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
                }
              ]
      },
      {
          element : <RequireAuth allowedRoles={['Admin']} />,
          children : [
            {
              path: "/shop",
              element:<Shop />
            },
          ]
      }
    

    ]
  },




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







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProdiver>
      <RouterProvider router={router} />
    </AuthProdiver>
  </React.StrictMode>,
)
