import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import SignUp from './pages/Sign-up';
import Home from './components/Home';
import Folders from './components/Folders';
import Settings from './components/Settings';
import Logout from './components/Logout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path:"/home", element: <Home/> },
      { path:"/folders", element: <Folders/> },
      { path:"settings", element: <Settings/> },
      { path:"logout", element: <Logout/> },
    ]
    
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);