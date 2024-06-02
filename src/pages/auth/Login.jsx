import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { ToastWrapper, toast } from 'keep-react';

import Headings from '../../components/utilities/Headings'
import Input from '../../components/utilities/Input'
import Button from '../../components/utilities/Button'
import { AiFillGoogleSquare } from "react-icons/ai";
import Paragraph from '../../components/utilities/Paragraph';
import Linking from '../../components/utilities/Linking';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import Loginvalidation from '../../components/validation/Loginvalidation'
import { ThreeDots } from 'react-loader-spinner';

const Login = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    const [showPass, setShowPass] = useState(false)
    const [loader, setLoader] = useState(false)

    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
        },   
        validationSchema: Loginvalidation,
        onSubmit: values => {
            setLoader(true)
            signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
            const user = userCredential.user
                if(user.emailVerified == true){
                    console.log(userCredential);
                    toast.success('Login seccessful...')
                    setLoader(false)
                    setTimeout(() => {
                        navigate('/home')
                    }, 1000);
                }else{
                    setLoader(false)
                    toast.error('Email not verify...')
                }
            })
            .catch((error) => {
                toast.error('invalid credential ...')
                setLoader(false)
            });
        },
      });

  return (
    <section>
        <ToastWrapper />
        <div className='wrap'>
            <div className='flex items-center flex-col'>
                    <div className='loginbox'>
                        <Headings 
                            Heading={'h1'}
                            className= 'text-5xl font-arizonia font-semibold text-center mt-5 mb-12'
                            text= 'flockey'
                        />
                        <div className='w-full'>
                            <form action="" onSubmit={formik.handleSubmit}>
                                <div className=''>
                                    <Input 
                                        id= 'email'
                                        name='email'
                                        type= 'email' 
                                        className= 'loginInputbox' 
                                        placeholder= 'enter your email'
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <p className='text-red-600 text-xs ml-1 mt-1'>{formik.errors.email}</p>
                                    ) : null}
                                </div>
                                <div className='relative'>
                                    <Input 
                                        id= 'password'
                                        name= 'password'
                                        className= 'loginInputbox mt-3' 
                                        type= {showPass ? 'text' : 'password'}
                                        placeholder= 'password' 
                                        onChange= {formik.handleChange}
                                        value= {formik.values.password}
                                    />
                                    {formik.touched.password && formik.errors.password ? (
                                        <p className='text-red-600 text-xs ml-1 mt-1'>{formik.errors.password}</p>
                                    ) : null}
                                    {
                                        showPass ?
                                        <FaRegEyeSlash onClick={()=>setShowPass(false)} className='absolute top-[30%] right-2 text-reval-white cursor-pointer' />
                                            :
                                        <FaRegEye onClick={()=>setShowPass(true)} className='absolute top-[30%] right-2 text-reval-white cursor-pointer' />
                                    }
                                </div>
                                <Button type= 'submit' className='w-full bg-mantine-blue text-white font-poppins py-2 text-lg mt-5 rounded-lg font-semibold flex justify-center' text= {
                                    loader ? <ThreeDots
                                        visible={true}
                                        height="40"
                                        width="40"
                                        color="#fff"
                                        radius="9"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                    />
                                    :
                                    'Log in'
                                } />
                            </form> 
                            <Headings 
                                Heading={'h4'}
                                className= 'or text-dark-blue'
                                text= 'or'
                            />
                        </div>
                        <div className='flex gap-x-2 justify-center items-center mt-6 cursor-pointer group'>
                            <AiFillGoogleSquare className='text-tory-blue text-2xl group-hover:text-dark-blue'/>
                            <Headings 
                                Heading={'h3'}
                                className= 'text-tory-blue font-poppins font-medium group-hover:text-dark-blue'
                                text= 'Login with Google'
                            />
                        </div>
                        <Headings 
                            Heading={'h3'}
                            className= 'mt-6 font-poppins text-xs text-dark-blue font-normal cursor-pointer hover:underline'
                            text= 'Forgot Password?'
                        />
                    </div>
                    <div className='loginbox mt-3'>
                        <Paragraph className= 'text-sm font-poppins text-dark-blue'>
                            Don't have an Account? <Linking onClick={()=>navigate('/registration')} className= 'text-mantine-blue text-sm font-poppins font-semibold' text= 'Sign Up' />
                        </Paragraph>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Login