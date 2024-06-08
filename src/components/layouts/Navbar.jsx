import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Modal } from 'keep-react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userValue } from '../../slices/userSlice';

import Headings from '../utilities/Headings'
import Button from '../utilities/Button';
import Linking from '../utilities/Linking';
import { MdGroups, MdHome } from "react-icons/md";
import { GoSearch } from 'react-icons/go';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RiMessengerLine } from 'react-icons/ri';
import { LuActivitySquare, LuPlusSquare } from 'react-icons/lu';
import { FaBars, FaUserAlt, FaUserFriends } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { CiDark, CiSaveDown2 } from 'react-icons/ci';
import { BiMessageAltError } from 'react-icons/bi';

const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showItem, setShowItem] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    navigate('/')
    localStorage.removeItem('loginUser')
    dispatch(userValue(null))
  }

  return (
    <section className='fixed'>
      <div className='wrap'>
        <div className='w-[220px] h-[100vh] flex flex-col justify-between gap-y-5 py-8 pl-5 shadow border-r'>
          <div className='flex flex-col gap-y-10'>
            <Headings
              Heading={'h2'}
              className= 'text-4xl font-arizonia font-semibold ml-3'
              text= 'flockey'
            />

            {/* Navlist start here ... */}
            <ul className='flex flex-col gap-y-1'>
              <li>
                <NavLink to= '/home' className= 'navlistitem text-md font-poppins font-normal capitalize'>
                  <MdHome className='text-2xl' />
                  home
                  </NavLink>
              </li>
              <li>
                <NavLink to= 'search' className= 'navlistitem text-md font-poppins font-normal capitalize'>
                  <GoSearch className='text-2xl' />
                  search
                </NavLink>
              </li>
              <li>
                <NavLink to= '/message' className= 'navlistitem text-md font-poppins font-normal capitalize'>
                  <RiMessengerLine className='text-2xl' />
                  messages
                </NavLink>
              </li>
              <li>
                <NavLink to= '/friends' className= 'navlistitem text-md font-poppins font-normal capitalize'>
                  <FaUserFriends className='text-2xl' />
                  friends
                </NavLink>
              </li>
              <li>
                <NavLink to= '/notification' className= 'navlistitem text-md font-poppins font-normal capitalize'>
                  <IoMdNotificationsOutline className='text-2xl' />
                  notification
                </NavLink>
              </li>
              <li>
                <NavLink to= '/group' className= 'navlistitem text-md font-poppins font-normal capitalize'>
                  <MdGroups className='text-3xl p-1 border border-dark-blue rounded-full' />
                  group
                </NavLink>
              </li>
              <li >
                <NavLink to= '/profile' className= 'navlistitem text-md font-poppins font-normal capitalize'>
                  <div className='w-[30px] h-[30px] bg-red-500 rounded-full'></div>
                  profile
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='relative'>
            <div onClick={()=>setShowItem(!showItem)} className='navlistitem'>
              <FaBars className='text-xl' />
              <Headings 
                Heading={'h3'}
                className= 'text-md font-poppins font-normal capitalize'
                text= 'more'
              />
            </div>

            {/* More item list start here ... */}
            {
              showItem &&
              <div className='w-[230px] bg-[#f4f4f4] absolute bottom-[120%] left-0 shadow rounded-xl py-4 px-3'>
                <ul className='flex flex-col gap-y-1'>
                  <li>
                    <Linking to='/settings' className= 'navlistitem text-sm font-poppins font-normal capitalize'>
                      <IoSettingsOutline className='text-xl' />
                      settings
                    </Linking>
                  </li>
                  <li>
                    <Linking className= 'navlistitem text-sm font-poppins font-normal capitalize'>
                      <FaUserAlt className='text-md' />
                      users
                    </Linking>
                  </li>
                  <li>
                    <Linking className= 'navlistitem text-sm font-poppins font-normal capitalize'>
                      <LuActivitySquare className='text-lg' />
                      your activity
                    </Linking>
                  </li>
                  <li>
                    <Linking className= 'navlistitem text-sm font-poppins font-normal capitalize'>
                      <CiSaveDown2 className='text-lg' />
                      saved
                    </Linking>
                  </li>
                  <li>
                    <Linking className= 'navlistitem text-sm font-poppins font-normal capitalize'>
                      <CiDark className='text-xl' />
                      switch appearance
                    </Linking>
                  </li>
                  <li>
                    <Linking className= 'navlistitem text-sm font-poppins font-normal capitalize'>
                      <BiMessageAltError className='text-lg' />
                      Report a problem
                    </Linking>
                  </li>
                  <li>
                    <Linking className= 'navlistitem text-sm font-poppins font-normal capitalize'>switch accounts</Linking>
                  </li>
                  <li onClick={()=>setIsOpen(true)}>
                    <Linking to= '#' className= 'navlistitem text-sm font-poppins font-normal'>Log out</Linking>
                  </li>
                </ul>
              </div>
            }
          </div>
        </div>
      </div>

      {/* modal here */}
      <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
        <Modal.Body className="space-y-3">
          <Modal.Content>
              <p className="text-body-4 font-normal text-metal-600">
                Log out of your account?
              </p>
          </Modal.Content>
          <Modal.Footer>
            <div className='w-full flex items-center justify-end gap-x-12 mr-7'>
              <Button onClick={handleLogout} text='Yes' />
              <Button onClick={()=>setIsOpen(false)} text= 'No' />
            </div>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </section>
  )
}

export default Navbar