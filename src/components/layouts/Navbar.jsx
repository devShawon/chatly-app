import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Modal } from 'keep-react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userValue } from '../../slices/userSlice';

import Headings from '../utilities/Headings'
import Button from '../utilities/Button';
import { MdHome } from "react-icons/md";
import { GoSearch } from 'react-icons/go';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RiMessengerLine } from 'react-icons/ri';
import { LuActivitySquare, LuPlusSquare } from 'react-icons/lu';
import { FaBars } from 'react-icons/fa';
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
    <section>
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
              <li className='navlistitem'>
                <MdHome className='text-2xl' />
                <NavLink className= 'text-md font-poppins font-normal capitalize'>home</NavLink>
              </li>
              <li className='navlistitem'>
                <GoSearch className='text-2xl' />
                <NavLink className= 'text-md font-poppins font-normal capitalize'>search</NavLink>
              </li>
              <li className='navlistitem'>
                <RiMessengerLine className='text-2xl' />
                <NavLink className= 'text-md font-poppins font-normal capitalize'>messages</NavLink>
              </li>
              <li className='navlistitem'>
                <IoMdNotificationsOutline className='text-2xl' />
                <NavLink className= 'text-md font-poppins font-normal capitalize'>notification</NavLink>
              </li>
              <li className='navlistitem'>
                <LuPlusSquare className='text-2xl' />
                <NavLink className= 'text-md font-poppins font-normal capitalize'>create</NavLink>
              </li>
              <li className='navlistitem'>
                <div className='w-[30px] h-[30px] bg-red-500 rounded-full'></div>
                <NavLink className= 'text-md font-poppins font-normal capitalize'>profile</NavLink>
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
              <div className='w-[260px] bg-[#f4f4f4] absolute bottom-full left-0 shadow rounded-xl py-4 px-3'>
                <ul className='flex flex-col gap-y-1'>
                  <li className='navlistitem'>
                    <IoSettingsOutline className='text-2xl' />
                    <NavLink className= 'text-base font-poppins font-normal capitalize'>settings</NavLink>
                  </li>
                  <li className='navlistitem'>
                    <LuActivitySquare className='text-2xl' />
                    <NavLink className= 'text-base font-poppins font-normal capitalize'>your activity</NavLink>
                  </li>
                  <li className='navlistitem'>
                    <CiSaveDown2 className='text-2xl' />
                    <NavLink className= 'text-base font-poppins font-normal capitalize'>saved</NavLink>
                  </li>
                  <li className='navlistitem'>
                    <CiDark className='text-2xl' />
                    <NavLink className= 'text-base font-poppins font-normal capitalize'>switch appearance</NavLink>
                  </li>
                  <li className='navlistitem'>
                    <BiMessageAltError className='text-2xl' />
                    <NavLink className= 'text-base font-poppins font-normal'>Report a problem</NavLink>
                  </li>
                  <li className='p-3 hover:bg-dust-white cursor-pointer'>
                    <NavLink className= 'text-base font-poppins font-normal'>Switch accounts</NavLink>
                  </li>
                  <li onClick={()=>setIsOpen(true)} className='p-3 hover:bg-dust-white cursor-pointer'>
                    <NavLink className= 'text-base font-poppins font-normal'>Log out</NavLink>
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