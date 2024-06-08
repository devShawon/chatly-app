import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from './pages/homepage/HomePage';
import Login from './pages/auth/Login';
import Registration from './pages/auth/Registration';
import Rootlayout from './components/layouts/Rootlayout';
import ErrorPage from './pages/errorpage/ErrorPage';
import Forget from './pages/auth/Forget';
import IsLoggedin from './components/privateRoute/IsLoggedin';
import MessagePage from './pages/messagepage/MessagePage';
import Friends from './pages/friendspage/Friends';
import Notification from './pages/notification/Notification';
import Group from './pages/group/Group';
import Profile from './pages/profile/Profile';
import Settings from './pages/settings/Settings';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<IsLoggedin />}>
          <Route element= {<Rootlayout />}>
            <Route path='/home' element={<HomePage />} />
            <Route path='/message' element={<MessagePage />} />
            <Route path='/notification' element={<Notification />} />
            <Route path='/group' element={<Group />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/settings' element={<Settings />} />
          </Route>
            <Route path='/friends' element={<Friends />} />
        </Route>
          <Route path='/' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/reset-password' element={<Forget />} />
          <Route path='*' element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App