import React from 'react'
import Headings from '../../components/utilities/Headings'
import { IoSettings } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { FaChevronRight, FaUserCheck, FaUserCog, FaUserMinus, FaUserPlus } from 'react-icons/fa'

const Friends = () => {
  return (
    <section>
      <div className='wrap'>
        <div className='w-[400px] shadow bg-white h-[100vh] '>
          <div className=''>
            <Headings
              Heading={'h2'}
              className= 'text-4xl font-arizonia font-semibold p-5 shadow'
              text= 'flockey'
            />
          </div>
          <div className='mt-8 flex items-center justify-between'>
            <Headings 
              Heading= {'h3'}
              className= 'text-xl font-poppins capitalize ml-5'
              text= 'friends'
            />
            <div className='p-3 bg-errigal-white hover:bg-pixel-white rounded-full mr-5 cursor-pointer'>
              <IoSettings className='text-xl text-dark-blue' />
            </div>
          </div>
          <ul className='flex flex-col ml-3 mt-5'>
            <li >
              <NavLink className= 'text-lg font-medium capitalize'>
                <div className='hover:bg-pixel-white p-2 flex items-center justify-between'>
                  <div className='flex items-center gap-x-3'>
                    <div className='p-3 bg-errigal-white rounded-full'>
                      <FaUserMinus className='text-xl' />
                    </div>
                    friend requests
                  </div>
                  <FaChevronRight className='text-xl text-reval-white mr-5' />
                </div>
              </NavLink>
            </li>
            <li >
              <NavLink className= 'text-lg font-medium capitalize'>
                <div className='hover:bg-pixel-white p-2 flex items-center justify-between'>
                  <div className='flex items-center gap-x-3'>
                    <div className='p-3 bg-errigal-white rounded-full'>
                      <FaUserCheck className='text-xl' />
                    </div>
                    all friends
                  </div>
                  <FaChevronRight className='text-xl text-reval-white mr-5' />
                </div>
              </NavLink>
            </li>
            <li >
              <NavLink className= 'text-lg font-medium capitalize'>
                <div className='hover:bg-pixel-white p-2 flex items-center justify-between'>
                  <div className='flex items-center gap-x-3'>
                    <div className='p-3 bg-errigal-white rounded-full'>
                      <FaUserPlus className='text-xl' />
                    </div>
                    suggestions
                  </div>
                  <FaChevronRight className='text-xl text-reval-white mr-5' />
                </div>
              </NavLink>
            </li>
            <li >
              <NavLink className= 'text-lg font-medium capitalize'>
                <div className='hover:bg-pixel-white p-2 flex items-center justify-between'>
                  <div className='flex items-center gap-x-3'>
                    <div className='p-3 bg-errigal-white rounded-full'>
                      <FaUserPlus className='text-xl' />
                    </div>
                    suggestions
                  </div>
                </div>
              </NavLink>
            </li>
            <li >
              <NavLink className= 'text-lg font-medium capitalize'>
                <div className='hover:bg-pixel-white p-2 flex items-center justify-between'>
                  <div className='flex items-center gap-x-3'>
                    <div className='p-3 bg-errigal-white rounded-full'>
                      <FaUserCog className='text-xl' />
                    </div>
                    custon lists
                  </div>
                  <FaChevronRight className='text-xl text-reval-white mr-5' />
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Friends