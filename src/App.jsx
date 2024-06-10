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
import FriendList from './components/friends/FriendList'
import FriendReq from './components/friends/FriendReq';
import FriendsHome from './components/friends/FriendsHome';
import Suggetions from './components/friends/Suggetions';
import Birthday from './components/friends/Birthday';

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
          <Route element= {<Friends />}>
            <Route path='/friends/home' element= {<FriendsHome />} />
            <Route path='/friends/list' element={<FriendList />} />
            <Route path='/friends/request' element={<FriendReq />} />
            <Route path='/friends/suggestions' element={<Suggetions />} />
            <Route path='/friends/birthday' element={<Birthday />} />
          </Route>
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