import React from 'react'
import Headings from '../utilities/Headings'
import Button from '../utilities/Button'
import Paragraph from '../utilities/Paragraph'

const Suggetions = () => {
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
                text= 'Friends suggestions'
            />
        </div>
        <Paragraph className= 'text-base font-poppins mt-4' text= 'People you may know' />
        <ul className='flex flex-col-reverse mt-3'>
          {
            [0,1,2,3,4,5,6].map((item,index)=>(
              <li className='cursor-pointer relative'>
                <div className='flex items-center justify-between hover:bg-pixel-white p-3 rounded-md'>
                  <div className='flex items-center gap-x-4'>
                    <div className='w-14 h-14 bg-mantine-blue rounded-full overflow-hidden cursor-pointer'></div>
                    <div>
                      <Headings 
                        Heading={'h4'}
                        className= 'text-sm font-poppins font-medium cursor-pointer'
                        text= 'tafsanhossain'
                      />
                      <Headings 
                        Heading={'h4'}
                        className= 'text-md text-reval-white font-poppins cursor-pointer'
                        text= 'Tafsan Hossain'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col gap-y-1'>
                    <Button className= 'bg-star-blue py-1 px-2 border-none rounded-lg text-dust-white capitalize' text= 'confirm' />
                    <Button className= 'bg-cloud-white py-1 px-2 border-none rounded-lg text-dark-blue capitalize' text= 'delete' />
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

export default Suggetions