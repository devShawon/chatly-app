import React from 'react'
import Headings from '../utilities/Headings'
import Button from '../utilities/Button'
import { BsThreeDots } from 'react-icons/bs'

const Birthday = () => {
  return (
    <section className='ml-auto pr-[190px] pl-10 border-l'>
      <div className='w-[500px] pt-14 '>
        <div className='shadow p-5'>
            <Headings
                Heading={'h5'}
                className= 'text-sm font-poppins text-dark-blue'
                text= 'Friends'
            />
            <Headings
                Heading={'h2'}
                className= 'text-2xl font-poppins font-medium text-dark-blue'
                text= 'Birthday'
            />
        </div>
        <ul className='flex flex-col-reverse mt-3'>
          {
            [0,1,2,3,4,5,6].map((item,index)=>(
              <li className='cursor-pointer relative'>
                <div className='flex items-center justify-between hover:bg-pixel-white p-3 rounded-md'>
                  <div className='flex items-center gap-x-4'>
                    <div className='w-12 h-12 bg-mantine-blue rounded-full overflow-hidden cursor-pointer'></div>
                    <div>
                      <Headings 
                        Heading={'h4'}
                        className= 'text-md font-poppins font-medium cursor-pointer'
                        text= 'Meherab Hossain'
                      />
                      <Headings 
                        Heading={'h4'}
                        className= 'text-xs text-reval-white font-poppins cursor-pointer'
                        text= 'june 11, 2002'
                      />
                    </div>
                  </div>
                    <div className='p-2 hover:bg-cloud-white rounded-full cursor-pointer absolute right-2 top-[30%]'>
                        <BsThreeDots className='text-xl' />
                    </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Birthday