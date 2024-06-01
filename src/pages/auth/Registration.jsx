import React from 'react'
import Headings from '../../components/utilities/Headings'
import Input from '../../components/utilities/Input'
import Button from '../../components/utilities/Button'
import { AiFillGoogleSquare } from 'react-icons/ai'
import Paragraph from '../../components/utilities/Paragraph'
import Linking from '../../components/utilities/Linking'

const Registration = () => {
  return (
    <section>
      <div className='wrap'>
        <div className='flex items-center flex-col'>
          <div className='loginbox'>
            <Headings 
                Heading={'h1'}
                className= 'text-5xl font-arizonia font-semibold capitalize text-center mt-5'
                text= 'chatlify'
            />
            <Paragraph className='text-reval-white text-center text-md font-poppins font-medium w-[90%] mt-5' text='Sign up to see photos and videos from your friends.' />
            <Button className='flex gap-x-1 items-center justify-center text-sm bg-star-blue py-2 w-full rounded-md text-white font-poppins mt-4 hover:bg-deep-blue'><AiFillGoogleSquare className='text-2xl' />Login with Google</Button>
            <Headings 
              Heading={'h4'}
              className= 'w-full flex justify-center my-4 text-reval-white font-poppins font-semibold uppercase relative after:absolute after:content-[""] after:h-[1px] after:w-[40%] after:bg-pixel-white after:left-0 after:top-2/4 before:absolute before:content-[""] before:h-[1px] before:w-[40%] before:bg-pixel-white before:right-0 before:top-2/4'
              text= 'or'
            />
              <div className='w-full'>
                <form action="">
                  <div className='flex flex-col gap-y-3'>
                    <div className=''>
                        <Input className= 'loginInputbox' type= 'email' placeholder= 'enter your email' />
                    </div>
                    <div className=''>
                        <Input className= 'loginInputbox' type= 'text' placeholder= 'Full name' />
                    </div>
                    <div className=''>
                        <Input className= 'loginInputbox' type= 'text' placeholder= 'Username' />
                    </div>
                    <div className=''>
                        <Input className= 'loginInputbox' type= 'password' placeholder= 'Password' />
                    </div>
                  </div>
                  <Paragraph className= 'text-sm text-center text-reval-white mt-4'>People who use our service may have uploaded your contact information to Instagram. Learn More</Paragraph>
                  <Paragraph className= 'text-sm text-center text-reval-white mt-4'>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</Paragraph>
                  <Button className='w-full bg-mantine-blue hover:bg-star-blue text-white font-poppins py-2 text-md mt-5 rounded-lg font-semibold' text= 'Sign up' />
                </form>
              </div>
          </div>
          <div className='loginbox mt-3 mb-10'>
            <Paragraph className= 'text-sm font-poppins text-dark-blue'>
              Have an Account? <Linking className= 'text-star-blue text-sm font-poppins font-semibold hover:text-deep-blue' text= 'Log in' />
            </Paragraph>
          </div>
        </div>
      </div>      
    </section>
  )
}

export default Registration