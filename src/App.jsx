import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from './pages/home/HomePage';
import Login from './pages/auth/Login';
import Registration from './pages/auth/Registration';


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route path='/' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/home' element={<HomePage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App