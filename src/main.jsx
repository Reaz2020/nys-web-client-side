import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'





//- - - - - - - - -  nehal - - - - -
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import Error from './components/Error.jsx';

import Login from './pages/Login.jsx';



// import Footer from '../components/Footer.jsx';

//- - - - - - - - -  nehal   - - - - -

const router = createBrowserRouter([
  
  
  {
    path:'/', element:   <Home/>,
    errorElement: <Error/>,
    children:[
      
      {  path:'/about', element: <About/> },
      {  path:'/', 
        loader:()=> fetch('https://fakestoreapi.com/products'),
        element: <Products/> },

      {  path:'/products', 
      loader:()=> fetch('https://fakestoreapi.com/products'),
      element: <Products/> },

      {  path:'product/:productId', 
        loader:({params})=> fetch(`https://fakestoreapi.com/products/${params.productId}`),
     
        element: <ProductDetails/> },
      {  path:'/login', element: <Login></Login> },
   
    ]
  }
  
  
  ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
