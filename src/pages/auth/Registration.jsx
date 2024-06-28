import React, { useState } from 'react'
import { useFormik } from 'formik';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile  } from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";
import { Link, useNavigate } from 'react-router-dom';

import Headings from '../../components/utilities/Headings'
import Input from '../../components/utilities/Input'
import Button from '../../components/utilities/Button'
import { AiFillGoogleSquare } from 'react-icons/ai'
import Paragraph from '../../components/utilities/Paragraph'
import Linking from '../../components/utilities/Linking'
import Regvalid from '../../components/validation/Regvalid';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { RotatingLines } from 'react-loader-spinner';
import { ToastWrapper, toast } from 'keep-react';

const Registration = () => {
  const auth = getAuth();
  const db = getDatabase();
  const navigate = useNavigate();

  const [passErr, setPassErr] = useState ('')
  const [showPass, setShowPass] = useState (false)
  const [confirmShowPass, setConfirmShowPass] = useState(false)
  const [loader, setLoader] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      full_name: '',
      password: '',
      confirm_pass: ''
    },
    validationSchema: Regvalid,
    onSubmit: (values, actions) => {
      if(values.password != values.confirm_pass){
        setPassErr('The password you entered do not match.')
      }else{
        setPassErr(null)
        setLoader(true)
      }
      createUserWithEmailAndPassword(auth, values.email, values.password) // Create user accout method ..
      .then((userCredential) => {
        const user = userCredential.user
        sendEmailVerification(auth.currentUser)    // Email verification link send method ..
        .then(() => {
          updateProfile(auth.currentUser, {   // user's Profile name update method
            displayName: values.full_name,
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            set(push(ref(db, 'users')), {   // Realtime data set ..
              displayName: values.full_name,
              email: user.email,
              profile_picture : user.photoURL
            }).then(()=>{
              setLoader(false)
              actions.resetForm();
              toast.success('Registration Successful ...')
              setTimeout(() => {
                navigate('/')
              }, 2000);
            })
          }).catch((error) => {
            setLoader(false)
            console.log(error);
          });
        });
      })
      .catch((error) => {
        setLoader(false)
        console.log(error);
      });
    },
  });

  return (
    <section>
      {
        loader && 
        <div className='w-full h-[200%] absolute top-0 left-0 z-[9999] flex items-center justify-center bg-[#00000060]'>
          <RotatingLines
            visible={true}
            height="90"
            width="90"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      }
      <ToastWrapper />
      <div className='wrap'>
        <div className='flex items-center flex-col'>
          <div className='loginbox'>
            <Headings 
              Heading={'h1'}
              className= 'text-5xl font-arizonia font-semibold text-center mt-5'
              text= 'flockey'
            />
            <Paragraph className='text-reval-white text-center text-md font-poppins font-medium w-[90%] mt-5' text='Sign up to see photos and videos from your friends.' />
            <Button className='flex gap-x-1 items-center justify-center text-sm bg-star-blue py-2 w-full rounded-md text-white font-poppins mt-4 hover:bg-deep-blue'><AiFillGoogleSquare className='text-2xl' />Login with Google</Button>
            <Headings 
              Heading={'h4'}
              className= 'or'
              text= 'or'
            />
            <div className='w-full'>
              <form action="" onSubmit={formik.handleSubmit}>
                <div className='flex flex-col gap-y-3'>
                  <div className=''>
                  <Input 
                    id= 'full_name'
                    name= 'full_name'
                    type= 'text' 
                    className= 'loginInputbox' 
                    placeholder= 'Full Name' 
                    onChange={formik.handleChange}
                    value={formik.values.full_name}
                  />
                  {formik.touched.full_name && formik.errors.full_name ? (
                    <Paragraph className='text-red-600 text-xs ml-1 mt-1' text={formik.errors.full_name} />
                  ) : null}
                  </div>
                  <div className=''>
                    <Input 
                      id= 'email'
                      name= 'email'
                      className= 'loginInputbox' 
                      type= 'email' 
                      placeholder= 'enter your email' 
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <Paragraph className='text-red-600 text-xs ml-1 mt-1' text={formik.errors.email} />
                    ) : null}
                  </div>
                  <div className='relative'>
                    <Input 
                      id= 'password'
                      name= 'password'
                      type= {showPass ? 'text' : 'password'} 
                      className= 'loginInputbox' 
                      placeholder= 'Password' 
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <Paragraph className='text-red-600 text-xs ml-1 mt-1' text={formik.errors.password} />
                    ) : null}
                    {
                      showPass ?
                      <FaRegEyeSlash onClick={()=>setShowPass(false)} className='absolute top-[30%] right-2 text-reval-white cursor-pointer' />
                        :
                      <FaRegEye onClick={()=>setShowPass(true)} className='absolute top-[30%] right-2 text-reval-white cursor-pointer' />
                    }
                  </div>
                  <div className='relative'>
                    < Input 
                      id="confirm_pass" 
                      name='confirm_pass'
                      type= {confirmShowPass ? 'text' : 'password'}
                      className="loginInputbox"
                      placeholder="Confirm Password" 
                      onChange={formik.handleChange}
                      value={formik.values.confirm_pass}
                    />
                    <Paragraph className= 'text-red-600 text-xs ml-1 mt-1' text={passErr} />
                    {formik.touched.confirm_pass && formik.errors.confirm_pass ? (
                      <Paragraph className='text-red-600 text-xs ml-1 mt-1' text={formik.errors.confirm_pass} />
                    ) : null}
                    {
                      confirmShowPass ?
                      <FaRegEyeSlash onClick={()=>setConfirmShowPass(false)} className='absolute top-[30%] right-2 text-reval-white cursor-pointer' />
                        :
                      <FaRegEye onClick={()=>setConfirmShowPass(true)} className='absolute top-[30%] right-2 text-reval-white cursor-pointer' />
                    }
                  </div>
                </div>
                <Paragraph className= 'text-sm text-center text-reval-white mt-4'>People who use our service may have uploaded your contact   information to connecto. Learn More</Paragraph>
                <Paragraph className= 'text-sm text-center text-reval-white mt-4'>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</Paragraph>
                <Button type='submit' className='w-full bg-mantine-blue hover:bg-star-blue text-white font-poppins py-2 text-md mt-5 rounded-lg font-semibold' text= 'Sign up' />
              </form>
            </div>
          </div>
          <div className='loginbox mt-3 mb-10'>
            <Paragraph className= 'text-sm font-poppins text-dark-blue'>
              Have an Account? <Link onClick={()=>navigate('/')} className= 'text-star-blue text-sm font-poppins font-semibold hover:text-deep-blue'>Log in</Link>
            </Paragraph>
          </div>
        </div>
      </div>      
    </section>
  )
}

export default Registration