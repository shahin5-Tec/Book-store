import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Books from "./components/Books.jsx";
import About from "./components/About.jsx";
import BookDetails from "./components/BookDetails.jsx";
import LoadingPage from "./components/LoadingPage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/books',
        element:<Books/>,
        loader:()=>fetch('https://api.itbook.store/1.0/new'),
      },
      {
        path:'/book/:bookId',
        element:<BookDetails/>,
        loader:({params})=>fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
      },
      {
        path:'/about',
        element:<About/>,
      },
      {
        path:'/loading',
        element:<LoadingPage/>
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
