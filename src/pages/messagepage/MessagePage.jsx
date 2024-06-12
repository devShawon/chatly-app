import React, { useState } from 'react'
import Headings from '../../components/utilities/Headings'
import { IoIosArrowDown } from 'react-icons/io'
import { FaArrowLeft, FaRegEdit } from 'react-icons/fa'
import { Tooltip } from 'keep-react'
import { FaArrowLeftLong, FaCirclePlus } from 'react-icons/fa6'
import Input from '../../components/utilities/Input'
import { CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'

const MessagePage = () => {

  const navigate = useNavigate();
  const [showCross, setShowCross] = useState(false)

  return (
    <section className='wrap'>
      <div className='h-20 bg-red-300 ml-[400px]'>
        <div className='fixed top-0 left-0 z-[1] w-[400px] h-[100vh] p-4 rounded-lg bg-dust-white shadow'>
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
              <FaCirclePlus onClick={()=>setShowCross(false)} className='absolute right-[10px] top-3 text-md text-reval-white rotate-45 cursor-pointer' />
              <Input
              onClick={()=>setShowCross(true)}
              className= 'py-2 px-5 border border-dark-blue rounded-3xl outline-none w-full'
              type= 'text' 
              placeholder= 'Search message' 
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
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default MessagePage