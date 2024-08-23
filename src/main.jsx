import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Ecomers from './Ecomers';
import NewPage from './component/NewPage.jsx';
import Product from './API/product.jsx';
import Login from './component/Login.jsx';
import SelectedCategory from './component/SelectedCategory.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Ecomers/>,
  },
  {
    path: "/QuickShop/:product_Id",
    element: <NewPage/>,
  },
  {
    path: "/Home",
    element: <Ecomers/>,
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/selectedCategory/:category_id",
    element:<SelectedCategory/>
  },
  // {
  //   path: "post",
  //   element:<PostApi/>,
  // },
  // {
  //   path: "update",
  //   element:<ApiPut/>,
  // },
  {
    path: "pro",
      element:<Product/>,
  }
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
