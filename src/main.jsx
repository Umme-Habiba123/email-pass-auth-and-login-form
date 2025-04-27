import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Layout/Root.jsx'

import Login from './Login/Login.jsx'
import Register from './Components/Home/Register/Register.jsx'
import Home from './Components/Home/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {
       index:true,
       Component:Home
      },
      {
        path:'Login',
        Component:Login
      },
      {
        path:'Register',
        Component:Register
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
