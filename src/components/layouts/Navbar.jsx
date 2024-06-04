import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import Headings from '../utilities/Headings'
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

  const [showItem, setShowItem] = useState(false)

  return (
    <section>
      <div className='wrap'>
        <div className='w-[250px] h-[100vh] flex flex-col justify-between gap-y-5 py-8 pl-5 shadow border-r'>
          <div className='flex flex-col gap-y-10'>
            <Headings
              Heading={'h2'}
              className= 'text-4xl font-arizonia font-semibold ml-3'
              text= 'flockey'
            />
            <ul className='flex flex-col gap-y-1'>
              <li className='flex items-center gap-x-2 p-3 hover:bg-dust-white cursor-pointer'>
                <MdHome className='text-2xl' />
                <NavLink className= 'text-md font-poppins font-normal capitalize'>home</NavLink>
              </li>
              <li className='flex items-center gap-x-2 p-3 hover:bg-dust-white cursor-pointer'>
                <GoSearch className='text-2xl' />
                <NavLink className= 'text-md font-poppins font-normal capitalize'>search</NavLink>
              </li>
              <li className='flex items-center gap-x-2 p-3 hover:bg-dust-white cursor-pointer'>
                <RiMessengerLine className='text-2xl' />
                <NavLink className= 'text-md font-poppins font-normal capitalize'>messages</NavLink>
              </li>
              <li className='flex items-center gap-x-2 p-3 hover:bg-dust-white cursor-pointer'>
                <IoMdNotificationsOutline className='text-2xl' />
                <NavLink className= 'text-md font-poppins font-normal capitalize'>notification</NavLink>
              </li>
              <li className='flex items-center gap-x-2 p-3 hover:bg-dust-white cursor-pointer'>
                <LuPlusSquare className='text-2xl' />
                <NavLink className= 'text-md font-poppins font-normal capitalize'>create</NavLink>
              </li>
              <li className='flex items-center gap-x-2 p-3 hover:bg-dust-white cursor-pointer'>
                <div className='w-[30px] h-[30px] bg-red-500 rounded-full'></div>
                <NavLink className= 'text-md font-poppins font-normal capitalize'>profile</NavLink>
              </li>
            </ul>
          </div>
          <div className='relative'>
            <div onClick={()=>setShowItem(true)} className='flex items-center gap-x-4 p-3 hover:bg-dust-white cursor-pointer'>
              <FaBars className='text-xl' />
              <Headings 
                Heading={'h3'}
                className= 'text-md font-poppins font-normal capitalize'
                text= 'more'
              />
            </div>
            {
              showItem &&
              <div className='w-[260px] bg-[#f4f4f4] absolute bottom-full left-0 shadow rounded-xl py-4 px-3'>
                <ul className='flex flex-col gap-y-1'>
                  <li className='flex items-center gap-x-2 p-3 hover:bg-dust-white cursor-pointer'>
                    <IoSettingsOutline className='text-2xl' />
                    <NavLink className= 'text-base font-poppins font-normal capitalize'>settings</NavLink>
                  </li>
                  <li className='flex items-center gap-x-2 p-3 hover:bg-dust-white cursor-pointer'>
                    <LuActivitySquare className='text-2xl' />
                    <NavLink className= 'text-base font-poppins font-normal capitalize'>your activity</NavLink>
                  </li>
                  <li className='flex items-center gap-x-2 p-3 hover:bg-dust-white cursor-pointer'>
                    <CiSaveDown2 className='text-2xl' />
                    <NavLink className= 'text-base font-poppins font-normal capitalize'>saved</NavLink>
                  </li>
                  <li className='flex items-center gap-x-2 p-3 hover:bg-dust-white cursor-pointer'>
                    <CiDark className='text-2xl' />
                    <NavLink className= 'text-base font-poppins font-normal capitalize'>switch appearance</NavLink>
                  </li>
                  <li className='flex items-center gap-x-2 p-3 hover:bg-dust-white cursor-pointer'>
                    <BiMessageAltError className='text-2xl' />
                    <NavLink className= 'text-base font-poppins font-normal'>Report a problem</NavLink>
                  </li>
                  <li className='p-3 hover:bg-dust-white cursor-pointer'>
                    <NavLink className= 'text-base font-poppins font-normal'>Switch account</NavLink>
                  </li>
                  <li className='p-3 hover:bg-dust-white cursor-pointer'>
                    <NavLink className= 'text-base font-poppins font-normal'>Log out</NavLink>
                  </li>
                </ul>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar