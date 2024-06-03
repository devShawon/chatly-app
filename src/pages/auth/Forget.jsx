import React from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup';

import Headings from '../../components/utilities/Headings';
import Paragraph from '../../components/utilities/Paragraph';
import Button from '../../components/utilities/Button';
import Input from '../../components/utilities/Input';
import { GoLock } from "react-icons/go";
import { ToastWrapper, toast } from 'keep-react';

const Forget = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required("Email address required."),
          }),
        onSubmit: values => {
            console.log(values);
            sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success('Email link send ...')
            })
            .catch((error) => {
                toast.error('no user found ...')
            });
        }
      });

  return (
    <section>
        <ToastWrapper />
        <Headings 
            Heading={'h1'}
            className= 'text-4xl font-arizonia font-semibold px-40 py-3 border-b'
            text= 'flockey'
        />
        <div className='wrap'>
            <div className='flex items-center flex-col'>
                <div className='loginbox relative mb-10'>
                    <div className='p-4 border-[3px] rounded-full border-dark-blue'>
                        <GoLock className='text-6xl' />
                    </div>
                    <Paragraph className= 'text-base font-poppins font-medium mt-3' text= 'Trouble logging in?'/>
                    <Paragraph className='text-sm text-center text-reval-white my-3' text= "Enter your email and we'll send you a link to get back into your account." />
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
                            <Button 
                                type= 'submit' 
                                className='w-full bg-mantine-blue text-white font-poppins py-2 text-md mt-5 rounded-lg font-medium flex justify-center hover:bg-star-blue' 
                                text= 'send login link'
                            />
                        </form> 
                        <Headings 
                            Heading={'h4'}
                            className= 'or text-dark-blue'
                            text= 'or'
                        />
                    </div>
                    <div>
                        <Headings 
                            Heading={'h3'}
                            className= 'font-poppins text-xs text-dark-blue font-normal cursor-pointer hover:underline mb-[100px]'
                            text= 'Create new account'
                            onClick={()=>navigate('/registration')}
                        />
                    </div>
                    <Paragraph 
                        className= 'absolute bottom-0 left-0 w-full bg-dust-white text-center py-3 border border-pixel-white cursor-pointer hover:bg-white' 
                        text= 'back to login' 
                        onClick={()=>navigate('/')}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Forget