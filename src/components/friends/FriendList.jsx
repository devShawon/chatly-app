import React, { useState } from 'react'

import Headings from '../utilities/Headings'
import { BsThreeDots } from 'react-icons/bs'
import { RiMessengerLine, RiUserForbidFill } from 'react-icons/ri'
import Paragraph from '../utilities/Paragraph'
import { FaUserTimes } from 'react-icons/fa'
import Input from '../utilities/Input'
import { CiSearch } from 'react-icons/ci'
import { FaCirclePlus } from 'react-icons/fa6'

const FriendList = () => {

  const [boxShow, setBoxShow] = useState(false)
  const [showCross, setShowCross] = useState(false)

  return (
    <section className='ml-auto pr-[190px] pl-10 border-l'>
      <div className='w-[500px] pt-14'>
        <div className='p-5 shadow'>
          <Headings
            Heading={'h5'}
            className= 'text-base font-poppins text-dark-blue'
            text= 'your'
          />
          <Headings
            Heading={'h2'}
            className= 'text-xl font-poppins font-medium text-dark-blue'
            text= 'All friends'
          />
          <div className='relative mt-3'>
            {showCross ?
            <div>
              <FaCirclePlus onClick={()=>setShowCross(false)} className='absolute right-[10px] top-[14px] text-md text-reval-white rotate-45 cursor-pointer' />
              <Input 
              onClick={()=>setShowCross(true)}
              className= 'py-2 px-5 border border-dark-blue rounded-3xl outline-none w-full'
              type= 'text' 
              placeholder= 'search friends' 
            />
            </div>
              :
            <div>
              <CiSearch className='absolute left-[10px] top-[14px] text-lg font-medium' />
              <Input 
                onClick={()=>setShowCross(true)}
                className= 'py-2 px-8 border border-dark-blue rounded-3xl outline-none w-full'
                type= 'search' 
                placeholder= 'search friends' 
              />
            </div>
            }
          </div>
        </div>
        <ul className='flex flex-col-reverse mt-6'>
          {
            [0,1,2,3,4,5,6].map((item,index)=>(
              <li className='cursor-pointer relative'>
                <div className='flex items-center justify-between hover:bg-pixel-white p-3 rounded-md'>
                  <div className='flex items-center gap-x-4'>
                    <div className='w-12 h-12 bg-mantine-blue rounded-full overflow-hidden cursor-pointer'></div>
                    <div>
                      <Headings 
                        Heading={'h4'}
                        className= 'text-xs font-poppins cursor-pointer'
                        text= 'tafsanhossain'
                      />
                      <Headings 
                        Heading={'h4'}
                        className= 'text-md text-dark-blue font-medium font-poppins cursor-pointer'
                        text= 'Tafsan Hossain'
                      />
                    </div>
                  </div>
                </div>
                <div onClick={()=>setBoxShow(!boxShow)} className='p-2 hover:bg-pixel-white rounded-full cursor-pointer absolute right-2 top-[20%]'>
                  <BsThreeDots className='text-xl' />
                  {
                    boxShow &&
                    <div className='w-[270px] absolute right-2/4 top-3/4 bg-errigal-white p-3 rounded-lg'>
                      <div className='flex flex-col'>
                        <div className='flex items-center gap-x-2 p-2 hover:bg-pixel-white rounded-lg cursor-pointer'>
                          <RiMessengerLine className='text-2xl mt-1 text-reval-white' />
                          <Paragraph className= 'text-lg font-medium text-reval-white' text= 'Message shawon' />
                        </div>
                        <div className='flex items-center gap-x-2 p-2 hover:bg-pixel-white rounded-lg cursor-pointer'>
                          <RiUserForbidFill className='text-xl mt-1 text-reval-white' />
                          <Paragraph className= 'text-lg font-medium text-reval-white' text= "Block shawon's profile" />
                        </div>
                        <div className='flex items-center gap-x-2 p-2 hover:bg-pixel-white rounded-lg cursor-pointer'>
                          <FaUserTimes className='text-xl mt-1 text-reval-white' />
                          <Paragraph className= 'text-lg font-medium text-reval-white' text= "Unfriend shawon" />
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
    
  )
}

export default FriendList