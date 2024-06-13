import React, { useState } from 'react'

import Headings from '../../components/utilities/Headings'
import Input from '../../components/utilities/Input'
import Paragraph from '../../components/utilities/Paragraph'
import Button from '../../components/utilities/Button'

import { IoIosArrowDown } from 'react-icons/io'
import { FaRegEdit } from 'react-icons/fa'
import { Tooltip } from 'keep-react'
import { FaArrowLeftLong, FaCirclePlus } from 'react-icons/fa6'
import { CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import { LuPhone } from 'react-icons/lu'
import { IoVideocamOutline } from 'react-icons/io5'
import { MdErrorOutline } from 'react-icons/md'

const MessagePage = () => {

  const navigate = useNavigate();
  const [showCross, setShowCross] = useState(false)
  const [inputVal, setInputVal] = useState('')

  const handleInputCross = () => {
    setShowCross(false)
    setInputVal('')
  }

  return (
    <section className=''>
      {/* message friend list... */}
      <div className='fixed z-[1] w-[450px] h-[100vh] p-4 rounded-lg bg-dust-white shadow'>
        <FaArrowLeftLong onClick={()=>navigate(-1)} className='p-2 hover:bg-pixel-white rounded-full cursor-pointer text-4xl' />
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-3 cursor-pointer'> 
            <Headings 
              Heading={'h2'}
              className= 'text-xl font-poppins font-medium mt-2'
              text= 'shawon_224'
            />
            <IoIosArrowDown className='text-lg mt-3' />
          </div>
          {['bottom-start'].map((position) => (
            <Tooltip placement={position} key={position}>
              <Tooltip.Action className='bg-transparent text-dark-blue'><FaRegEdit className='text-xl font-medium mt-1' /></Tooltip.Action>
              <Tooltip.Content>
                <p className="text-body-5 font-medium text-white">New message</p>
              </Tooltip.Content>
            </Tooltip>
          ))}
        </div>
        <div className='relative mt-4 z-[-1]'>
          {showCross ?
          <div>
            <FaCirclePlus onClick={handleInputCross} className='absolute right-[10px] top-3 text-md text-reval-white rotate-45 cursor-pointer' />
            <Input
            onClick={()=>setShowCross(true)}
            className= 'py-2 px-5 border border-dark-blue rounded-3xl outline-none w-full'
            type= 'text' 
            placeholder= 'Search message' 
            value={inputVal}
            onChange={(e)=>setInputVal(e.target.value)}
          />
          </div>
            :
          <div>
            <CiSearch className='absolute left-[10px] top-[14px] text-lg font-medium' />
            <Input 
              onClick={()=>setShowCross(true)}
              className= 'py-2 px-8 border border-dark-blue rounded-3xl outline-none w-full'
              type= 'search' 
              placeholder= 'Search message' 
              value={inputVal}
              onChange={(e)=>setInputVal(e.target.value)}
            />
          </div>
          }
        </div>
        <div className='flex items-center justify-between mt-6'>
          <Headings 
            Heading={'h3'}
            className= 'text-sm rounded-md font-poppins font-medium'
            text= 'Messages'
          />
          <Headings 
            Heading={'h3'}
            className= 'text-sm rounded-xl font-poppins font-medium text-reval-white cursor-pointer'
            text= 'Request'
          />
        </div>

        {/* message friends loop here */}
        <ul className='flex flex-col mt-5'>
          {
            [0,12,3,4,5].map((item, index)=>(
              <li key={index} className='cursor-pointer relative'>
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
              </li>
            ))
          }
        </ul>
      </div>
      {/* message box... */}
      <div className='h-[100vh] w-[100vw] ml-[450px] px-5 fixed'>
              {/* message top bar */}
          <div className='flex items-center justify-between py-2 border-b mr-[450px]'>
            <div className='flex items-center gap-x-2'>
              <div className='w-12 h-12 bg-cloud-white rounded-full'></div>
              <Headings 
                Heading={'h3'}
                className='text-lg font-poppins font-medium text-dark-blue'
                text= 'shawon_04'
              />
            </div>
            <div className='flex items-center gap-x-4'>
              <LuPhone className='text-2xl text-dark-blue cursor-pointer ' />
              <IoVideocamOutline className='text-2xl text-dark-blue cursor-pointer ' />
              <MdErrorOutline className='text-2xl text-dark-blue cursor-pointer ' />
            </div>
          </div>
              {/* message main box */}
          {/* <div className='overflow-y-scroll'>
            <div className='flex flex-col justify-center items-center'>
              <div className='h-24 w-24 bg-red-300 rounded-full overflow-hidden mt-4'></div>
              <Headings 
                Heading={'h2'}
                className= 'text-dark-blue text-2xl font-poppins font-medium mt-1'
                text= 'shawon_04'
              />
              <Paragraph className='text-reval-white text-sm font-poppins' text= 'itsshawon' />
              <Button className= 'px-4 py-1 bg-pixel-white hover:bg-cloud-white rounded-md cursor-pointer font-poppins mt-3' text= 'view profile' />
            </div>
            <div className='flex flex-col gap-y-6 mt-16'>
              <div className='flex items-center gap-x-2'>
                <div className='h-10 w-10 bg-cloud-white rounded-full overflow-hidden'></div>
                <Paragraph className= 'px-5 py-[6px] bg-pixel-white rounded-2xl ' text= 'hey shawon' />
              </div>
              <div className='flex items-center justify-end gap-x-2'>
                <div className='h-10 w-10 bg-cloud-white rounded-full overflow-hidden'></div>
                <Paragraph className= 'px-5 py-[6px] bg-pixel-white rounded-2xl ' text= 'hey shawon' />
              </div>
              <div className='flex items-center gap-x-2'>
                <div className='h-10 w-10 bg-cloud-white rounded-full overflow-hidden'></div>
                <Paragraph className= 'px-5 py-[6px] bg-pixel-white rounded-2xl ' text= 'hey shawon' />
              </div>
              <div className='flex items-center justify-end gap-x-2'>
                <div className='h-10 w-10 bg-cloud-white rounded-full overflow-hidden'></div>
                <Paragraph className= 'px-5 py-[6px] bg-pixel-white rounded-2xl ' text= 'hey shawon' />
              </div>
              <div className='flex items-center gap-x-2'>
                <div className='h-10 w-10 bg-cloud-white rounded-full overflow-hidden'></div>
                <Paragraph className= 'px-5 py-[6px] bg-pixel-white rounded-2xl ' text= 'hey shawon' />
              </div>
              <div className='flex items-center justify-end gap-x-2'>
                <div className='h-10 w-10 bg-cloud-white rounded-full overflow-hidden'></div>
                <Paragraph className= 'px-5 py-[6px] bg-pixel-white rounded-2xl ' text= 'hey shawon' />
              </div>
              <div className='flex items-center gap-x-2'>
                <div className='h-10 w-10 bg-cloud-white rounded-full overflow-hidden'></div>
                <Paragraph className= 'px-5 py-[6px] bg-pixel-white rounded-2xl ' text= 'hey shawon' />
              </div>
              <div className='flex items-center justify-end gap-x-2'>
                <div className='h-10 w-10 bg-cloud-white rounded-full overflow-hidden'></div>
                <Paragraph className= 'px-5 py-[6px] bg-pixel-white rounded-2xl ' text= 'hey shawon' />
              </div>
              <div className='flex items-center gap-x-2'>
                <div className='h-10 w-10 bg-cloud-white rounded-full overflow-hidden'></div>
                <Paragraph className= 'px-5 py-[6px] bg-pixel-white rounded-2xl ' text= 'hey shawon' />
              </div>
              <div className='flex items-center justify-end gap-x-2'>
                <div className='h-10 w-10 bg-cloud-white rounded-full overflow-hidden'></div>
                <Paragraph className= 'px-5 py-[6px] bg-pixel-white rounded-2xl ' text= 'hey shawon' />
              </div>
              <div className='flex items-center gap-x-2'>
                <div className='h-10 w-10 bg-cloud-white rounded-full overflow-hidden'></div>
                <Paragraph className= 'px-5 py-[6px] bg-pixel-white rounded-2xl ' text= 'hey shawon' />
              </div>
              <div className='flex items-center justify-end gap-x-2'>
                <div className='h-10 w-10 bg-cloud-white rounded-full overflow-hidden'></div>
                <Paragraph className= 'px-5 py-[6px] bg-pixel-white rounded-2xl ' text= 'hey shawon' />
              </div>
              <div className='flex items-center gap-x-2'>
                <div className='h-10 w-10 bg-cloud-white rounded-full overflow-hidden'></div>
                <Paragraph className= 'px-5 py-[6px] bg-pixel-white rounded-2xl ' text= 'hey shawon' />
              </div>
              <div className='flex items-center justify-end gap-x-2'>
                <div className='h-10 w-10 bg-cloud-white rounded-full overflow-hidden'></div>
                <Paragraph className= 'px-5 py-[6px] bg-pixel-white rounded-2xl ' text= 'hey shawon' />
              </div>
            </div>
          </div> */}
              {/* message input footer */}
          <div></div>
      </div>
    </section>
  )
}

export default MessagePage