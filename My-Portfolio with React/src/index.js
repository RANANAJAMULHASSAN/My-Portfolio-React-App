import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Education } from './Pages/Education';
import { Project } from './Pages/Project';
import { Skills } from './Pages/Skills';
import { ContactUs } from './Pages/ContactUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
const allRout= createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'Contact',
      element:<ContactUs/>
    },
    {
      path:'Education',
      element:<Education/>
    },
    {
      path:'Skills',
      element:<Skills/>
    },
   
    {
      path:'Project',
      element:<Project/>
    },
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allRout}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
