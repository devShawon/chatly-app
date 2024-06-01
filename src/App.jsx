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
import Rootlayout from './components/layouts/Rootlayout';
import Error from './pages/error/Error';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element= {<Rootlayout />}>
          <Route path='/home' element={<HomePage />} />
        </Route>
          <Route path='/' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='*' element={<Error />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App