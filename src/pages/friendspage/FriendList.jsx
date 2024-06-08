import React from 'react'
import Headings from '../../components/utilities/Headings'
import Linking from '../../components/utilities/Linking'

const FriendList = () => {
  return (
    <section className='w-full mx-auto'>
      <div className='w-[500px] h-24 mx-auto mt-20'>
        <div>
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
        </div>
        <ul className='flex flex-col-reverse gap-y-5 mt-6'>
          {
            [0,1,2,3,4,5,6,7,8,9,].map((item,index)=>(
              <li className='flex items-center justify-between'>
                <div className='flex items-center gap-x-4'>
                  <div className='w-12 h-12 bg-errigal-white rounded-full overflow-hidden cursor-pointer'></div>
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
                <Linking to= '/message' className= 'py-1 px-3 bg-mantine-blue hover:bg-star-blue rounded-lg text-white' text= 'message' />
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default FriendList