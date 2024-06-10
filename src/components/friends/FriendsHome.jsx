import React from 'react'
import { RiAlignItemBottomFill } from 'react-icons/ri'
import Headings from '../utilities/Headings'

const FriendsHome = () => {
  return (
    <div className='w-full flex flex-col items-center ml-[350px] mt-[200px]'>
        <RiAlignItemBottomFill className='text-8xl text-reval-white' />
        <Headings 
          Heading={'h2'}
          className= 'text-xl font-poppins font-semibold'
          text= 'Select one to show preview.'
        />
      </div>
  )
}

export default FriendsHome