import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Books from "./components/Books.jsx";
import About from "./components/About.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/books',
        element:<Books/>,
      },
      {
        path:'/about',
        element:<About/>
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
