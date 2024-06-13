import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Modal, Tooltip } from 'keep-react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userValue } from '../../slices/userSlice';

import Headings from '../utilities/Headings'
import Button from '../utilities/Button';
import { MdGroups, MdHome } from "react-icons/md";
import { GoSearch } from 'react-icons/go';
import { IoIosArrowDown, IoMdNotificationsOutline } from 'react-icons/io';
import { RiMessengerLine } from 'react-icons/ri';
import { LuActivitySquare } from 'react-icons/lu';
import { FaBars, FaRegEdit, FaUserAlt, FaUserFriends } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { CiDark, CiSaveDown2, CiSearch } from 'react-icons/ci';
import { BiMessageAltError } from 'react-icons/bi';
import { FaCirclePlus } from 'react-icons/fa6';
import Input from '../utilities/Input';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showItem, setShowItem] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showCross, setShowCross] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const [inputVal, setInputVal] = useState('')

  const handleLogout = () => {
    navigate('/')
    localStorage.removeItem('loginUser')
    dispatch(userValue(null))
  }

  const handleInputCross = (e) => {
    setShowCross(false)
    setInputVal('')
  }
  return (
    <section className='bg-dust-white fixed'>
      <div className='wrap'>
        <div className='w-[220px] h-[100vh] flex flex-col justify-between gap-y-5 py-8 pl-5 shadow-x border-r relative'>
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
              <li onClick={()=>setIsSearch(!isSearch)} className='relative'>
                <div className= 'navlistitem text-md font-poppins font-normal capitalize'>
                  <GoSearch className='text-2xl' />
                  search
                </div>
              </li>
              <li>
                <NavLink to= '/message' className= 'navlistitem text-md font-poppins font-normal capitalize'>
                  <RiMessengerLine className='text-2xl' />
                  messages
                </NavLink>
              </li>
              <li>
                <NavLink to= '/friends/home' className= 'navlistitem text-md font-poppins font-normal capitalize'>
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
              <div className='w-[230px] bg-[#f4f4f4] absolute bottom-[120%] left-0 shadow rounded-xl py-4 px-3 z-[99999]'>
                <ul className='flex flex-col gap-y-1'>
                  <li>
                    <Link to='/settings' className= 'navlistitem text-sm font-poppins font-normal capitalize'>
                      <IoSettingsOutline className='text-xl' />
                      settings
                    </Link>
                  </li>
                  <li>
                    <Link className= 'navlistitem text-sm font-poppins font-normal capitalize'>
                      <FaUserAlt className='text-md' />
                      users
                    </Link>
                  </li>
                  <li>
                    <Link className= 'navlistitem text-sm font-poppins font-normal capitalize'>
                      <LuActivitySquare className='text-lg' />
                      your activity
                    </Link>
                  </li>
                  <li>
                    <Link className= 'navlistitem text-sm font-poppins font-normal capitalize'>
                      <CiSaveDown2 className='text-lg' />
                      saved
                    </Link>
                  </li>
                  <li>
                    <Link className= 'navlistitem text-sm font-poppins font-normal capitalize'>
                      <CiDark className='text-xl' />
                      switch appearance
                    </Link>
                  </li>
                  <li>
                    <Link className= 'navlistitem text-sm font-poppins font-normal capitalize'>
                      <BiMessageAltError className='text-lg' />
                      Report a problem
                    </Link>
                  </li>
                  <li>
                    <Link className= 'navlistitem text-sm font-poppins font-normal capitalize'>switch accounts</Link>
                  </li>
                  <li onClick={()=>setIsOpen(true)}>
                    <Link to= '#' className= 'navlistitem text-sm font-poppins font-normal'>Log out</Link>
                  </li>
                </ul>
              </div>
            }
          </div>

          {/* search area here */}
          { isSearch  ?
            <div className='absolute top-0 left-16 z-[999] w-[400px] h-[100vh] overflow-y-scroll p-4 rounded-lg bg-cloud-white transition-all duration-300'>
              <div className='flex items-center justify-between'> 
                <Headings 
                  Heading={'h2'}
                  className= 'text-xl font-poppins font-medium capitalize'
                  text= 'search'
                />
                <RxCross2 onClick={()=>setIsSearch(false)} className='text-4xl text-dark-blue p-2 hover:bg-pixel-white rounded-full cursor-pointer' />
              </div>
              <div className='relative mt-8 after:absolute after:content-[""] after:w-full after:h-[1px] after:bg-pixel-white after:bottom-[-25px] left-0'>
                {showCross ?
                <div>
                  <FaCirclePlus onClick={handleInputCross} className='absolute right-[10px] top-[14px] text-md text-reval-white rotate-45 cursor-pointer' />
                  <Input
                  onClick={()=>setShowCross(true)}
                  className= 'py-2 px-5 border border-dark-blue rounded-lg outline-none w-full'
                  type= 'text' 
                  placeholder= 'search' 
                  value={inputVal}
                  onChange={(e)=>setInputVal(e.target.value)}
                />
                </div>
                  :
                <div>
                  <CiSearch className='absolute left-[10px] top-[14px] text-lg font-medium' />
                  <Input 
                    onClick={()=>setShowCross(true)}
                    className= 'py-2 px-8 border border-dark-blue rounded-lg outline-none w-full'
                    type= 'search' 
                    placeholder= 'search' 
                    value={inputVal}
                    onChange={(e)=>setInputVal(e.target.value)}
                  />
                </div>
                }
              </div>
              <div className='flex justify-between mt-10'>
                <Headings 
                  Heading= {'h3'}
                  className= 'text-xs text-dark-blue font-poppins font-medium cursor-pointer'
                  text= 'Recent'
                />
                <Headings 
                  Heading= {'h3'}
                  className= 'text-xs text-star-blue font-poppins font-medium cursor-pointer'
                  text= 'Clear all'
                />
              </div>
            </div>
              :
            <div className='absolute top-0 left-0 z-[999] w-0 h-[100vh] overflow-y-scroll p-0 rounded-lg bg-cloud-white transition-all duration-300'>
              <div className='flex items-center justify-between'> 
                <Headings 
                  Heading={'h2'}
                  className= 'text-xl font-poppins font-medium capitalize'
                  text= 'search'
                />
                <RxCross2 onClick={()=>setIsSearch(false)} className='text-4xl text-dark-blue p-2 hover:bg-pixel-white rounded-full cursor-pointer' />
              </div>
              <div className='relative mt-8 after:absolute after:content-[""] after:w-full after:h-[1px] after:bg-pixel-white after:bottom-[-25px] left-0'>
                {showCross ?
                <div>
                  <FaCirclePlus onClick={()=>setShowCross(false)} className='absolute right-[10px] top-[14px] text-md text-reval-white rotate-45 cursor-pointer' />
                  <Input
                  onClick={()=>setShowCross(true)}
                  className= 'py-2 px-5 border border-dark-blue rounded-lg outline-none w-full'
                  type= 'text' 
                  placeholder= 'search' 
                />
                </div>
                  :
                <div>
                  <CiSearch className='absolute left-[10px] top-[14px] text-lg font-medium' />
                  <Input 
                    onClick={()=>setShowCross(true)}
                    className= 'py-2 px-8 border border-dark-blue rounded-lg outline-none w-full'
                    type= 'search' 
                    placeholder= 'search friends' 
                  />
                </div>
                }
              </div>
              <div className='flex justify-between mt-10'>
                <Headings 
                  Heading= {'h3'}
                  className= 'text-xs text-dark-blue font-poppins font-medium cursor-pointer'
                  text= 'Recent'
                />
                <Headings 
                  Heading= {'h3'}
                  className= 'text-xs text-star-blue font-poppins font-medium cursor-pointer'
                  text= 'Clear all'
                />
              </div>
            </div>
          }
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