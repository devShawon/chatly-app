import React from 'react'
import Paragraph from '../utilities/Paragraph'
import { MdPhotoLibrary } from 'react-icons/md'
import Button from '../utilities/Button'

const Home = () => {
  return (
    <section className='flex'>
      <div className='w-[220px]'></div>
      <div className='py-3 w-[640px]'>
        {/* story item list ... */}
        <div className='flex items-center'>
          <div className='w-[100px] flex flex-col items-center overflow-hidden cursor-pointer'>
            <div className='w-16 h-16 rounded-full overflow-hidden'>
              <div className='w-full h-full object-cover bg-black'></div>
            </div>
            <Paragraph className= 'text-xs' text= 'shawon' />
          </div>
          <div className='w-[100px] flex flex-col items-center overflow-hidden cursor-pointer'>
            <div className='w-16 h-16 rounded-full overflow-hidden'>
              <div className='w-full h-full object-cover bg-black'></div>
            </div>
            <Paragraph className= 'text-xs' text= 'shawon' />
          </div>
          <div className='w-[100px] flex flex-col items-center overflow-hidden cursor-pointer'>
            <div className='w-16 h-16 rounded-full overflow-hidden'>
              <div className='w-full h-full object-cover bg-black'></div>
            </div>
            <Paragraph className= 'text-xs' text= 'shawon' />
          </div>
          <div className='w-[100px] flex flex-col items-center overflow-hidden cursor-pointer'>
            <div className='w-16 h-16 rounded-full overflow-hidden'>
              <div className='w-full h-full object-cover bg-black'></div>
            </div>
            <Paragraph className= 'text-xs' text= 'shawon' />
          </div>
          <div className='w-[100px] flex flex-col items-center overflow-hidden cursor-pointer'>
            <div className='w-16 h-16 rounded-full overflow-hidden'>
              <div className='w-full h-full object-cover bg-black'></div>
            </div>
            <Paragraph className= 'text-xs' text= 'shawon' />
          </div>
          
        </div>

        {/* post area ... */}
        <div className='w-[500px] mx-auto mt-7'>
          <div className='p-4 bg-white shadow-md rounded-xl'>
            <div className='flex items-center gap-x-3 relative after:absolute after:content-[""] after:w-full after:h-[1px] after:bg-pixel-white after:bottom-[-15px] left-0'>
              <div className='w-14 h-14 overflow-hidden rounded-full cursor-pointer'>
                <div className='w-full h-full object-cover bg-warning-50'></div>
              </div>
              <Paragraph className= 'w-[80%] text-reval-white text-md py-2 px-6 bg-[#f0f2f5] rounded-[50px] cursor-pointer hover:bg-pixel-white' text= "What's on your mind?" />
            </div>
            <div className='inline-flex items-center mt-7 gap-x-2 ml-5 cursor-pointer py-2 px-5 rounded-xl hover:bg-dust-white'>
              <MdPhotoLibrary className='mt-1 text-xl' />
              <Paragraph className= 'text-sm text-reval-white font-poppins font-medium' text= 'photo/video' />
            </div>
          </div>
          <div className='bg-red-500 h-[2000px]'></div>
        </div>
      </div>

        {/* right side list area ... */}
        <div className='ml-10 py-3'>
          <div className='w-full flex items-center gap-x-[70px]'>
            <div className='flex items-center gap-x-2'>
              <div className='w-10 h-10 overflow-hidden rounded-full cursor-pointer'>
                <div className='w-full h-full object-cover bg-warning-50'></div>
              </div>
              <div>
                <Paragraph className= 'text-sm' text= 'meherabhossain24' />
                <Paragraph className= 'text-sm' text= 'Meherab Hossain Shawon' />
              </div>
            </div>
            <div>
              <Button className='text-xs text-star-blue font-poppins font-medium capitalize' text= 'switch' />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Home