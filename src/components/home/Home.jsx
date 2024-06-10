import React from 'react'
import Paragraph from '../utilities/Paragraph'
import { MdPhotoLibrary } from 'react-icons/md'
import Button from '../utilities/Button'
import { IoSearchOutline } from 'react-icons/io5'
import { BsThreeDots } from 'react-icons/bs'
import Linking from '../utilities/Linking'

const Home = () => {
  return (
    <section className='flex'>
      <div className='py-3 w-[640px]'>
        {/* story item list ... */}
        <div className='flex items-center'>
          {
            [0,1,2,3,4].map((item, index)=>(
            <div key={index} className='w-[80px] flex flex-col items-center overflow-hidden cursor-pointer'>
              <div className='w-16 h-16 rounded-full overflow-hidden'>
                <div className='w-full h-full object-cover bg-black'></div>
              </div>
              <Paragraph className= 'text-xs' text= 'shawon' />
            </div>
            ))
          }
          
        </div>
        <div className='w-[500px] mx-auto mt-7'>
              {/* My post box... */}
          <div className='p-4 bg-white shadow-md rounded-xl'>
            <div className='flex items-center gap-x-3 relative after:absolute after:content-[""] after:w-full after:h-[1px] after:bg-pixel-white after:bottom-[-15px] left-0'>
              <div className='w-14 h-14 overflow-hidden rounded-full cursor-pointer'>
                <div className='w-full h-full object-cover bg-warning-50'></div>
              </div>
              <Paragraph className= 'w-[80%] text-reval-white text-md py-2 px-6 bg-errigal-white rounded-[50px] cursor-pointer hover:bg-pixel-white' text= "What's on your mind?" />
            </div>
            <div className='inline-flex items-center mt-7 gap-x-2 ml-5 cursor-pointer py-2 px-5 rounded-xl hover:bg-dust-white'>
              <MdPhotoLibrary className='mt-1 text-xl' />
              <Paragraph className= 'text-sm text-reval-white font-poppins font-medium' text= 'photo/video' />
            </div>
          </div>
              {/* post area.. */}
          <div className='bg-red-500 h-[2000px] mt-5'></div>
        </div>
      </div>

            {/* right side list area ... */}
        <div className='py-3'>
          <div className='w-full flex items-center gap-x-[70px]'>
            <div className='flex items-center gap-x-2'>
              <div className='w-12 h-12 overflow-hidden rounded-full cursor-pointer'>
                <div className='w-full h-full object-cover bg-warning-50'></div>
              </div>
              <div>
                <Paragraph className= 'text-sm font-semibold' text= 'meherabhossain24' />
                <Paragraph className= 'text-sm' text= 'Meherab Hossain Shawon' />
              </div>
            </div>
            <div>
              <Button className='text-xs text-star-blue font-poppins font-medium capitalize hover:text-dark-blue cursor-pointer' text= 'switch' />
            </div>
          </div>
          <div className='mt-8'>
            <div className='flex items-center justify-between'>
              <Paragraph className= 'text-md font-poppins text-reval-white capitalize' text= 'contacts' />
              <div className='flex items-center gap-x-5 '>
                <div className='p-2 rounded-full hover:bg-pixel-white'>
                  <IoSearchOutline className='text-lg cursor-pointer' />
                </div>
                <div className='p-2 rounded-full hover:bg-pixel-white'>
                  <BsThreeDots className='text-lg cursor-pointer' />
                </div>
              </div>
            </div>

            {/* Contact list here.. */}
            <div className='mt-5 flex flex-col'>
              {
                [0,1,2,3,4,5,6,7,8].map((index)=>(
                <div key={index} className='w-full flex items-center justify-between'>
                  <Linking className= 'p-2 w-full hover:bg-cloud-white rounded-xl '>
                    <div className='flex items-center gap-x-2'>
                      <div className='relative after:absolute after:content-[""] after:bg-green-600 after:w-3 after:h-3 after:rounded-full after:bottom-[3px] after:right-[1px] after:border-2 after:border-white'>
                        <div className='w-10 h-10 overflow-hidden rounded-full cursor-pointer'>
                          <div className='w-full h-full object-cover bg-pixel-white'></div>
                        </div>
                      </div>
                      <div>
                        <Paragraph className= 'text-sm font-poppin font-medium' text= 'Meherab Hossain Shawon' />
                      </div>
                    </div>
                  </Linking>
                </div>
                ))
              }
            </div>
          </div>
        </div>
    </section>
  )
}

export default Home