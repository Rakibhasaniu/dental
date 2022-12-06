import React, { useContext } from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookSquare, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../AuthContext/UserContext';
import { toast } from 'react-toastify';
import useJWTtoken from '../../hook/useJWTtoken';
import useTitle from '../../hook/useTitle';

const Login = () => {
    useTitle('Login')
    const { user, singInUser, emailVerification, autoGoogleLogin, forGetPass } = useContext(AuthContext);
    //location part 
    const navigat = useNavigate()
    const location = useLocation()
    const prevLocation = location?.state?.from?.pathname || '/';
    // dirtyFields tru
    const { register, formState: { errors, isDirty, dirtyFields }, handleSubmit } = useForm({ mode: "onChange", defaultValues: { password: '' } });
    // current user useState
    const [userEmail, setUserEmail] = useState('');
    //AuthContext 


    // Jwt token access or navigate
    const [logInUserEmail, setLogInUserEmail] = useState('');
    const [token] = useJWTtoken(logInUserEmail)


    if (token) {
        toast.info("jwt token valid 1 day")
        navigat(prevLocation, { replace: true })
    }





    // ----frome input fild handel btn------------
    const handlelogin = data => {

        const { email, password } = data;
        // sing in with email or password 
        singInUser(email, password)
            .then(result => {
                setLogInUserEmail(result?.user?.email)

                toast.success("You are successfully logIN")
            }).catch(err => toast.error(err))

    }
    // console.log(dirtyFields);

    //reste password email notification 
    const restePasswords = () => {
        console.log('forget password', userEmail);
        forGetPass(userEmail)
            .then(() => {
                toast.success("please chack you email or set password .")
            }).catch(err => toast.error(err))
    }


    // console.log(dirtyFields);
    const autoSingInGoogle = () => {
        autoGoogleLogin()
            .then(result => {
                console.log(result?.user?.email);
                setLogInUserEmail(result?.user?.email)

                toast.success('User Auto Login With Google !')
                // navigat(prevLocation, { replace: true })
            }).catch(err => console.log(err))
    }


    return (
        <>

            <div className="w-[100%] flex justify-center align-middle items-center">
                <form className='bg-gradient-to-r from-primary to-secondary lg:w-[385px] rounded-lg  p-10 my-20' onSubmit={handleSubmit(handlelogin)}>
                    <h2 className='text-center text-3xl text-bold text-white'>Login</h2>
                    <label className="label">
                        <span className="label-text text-slate-500">Email</span>
                    </label>
                    <input type='email' placeholder='email'
                        {...register("email",
                            {
                                required: "Email Address is required",
                                onBlur: (event) => setUserEmail(event.target.value)
                            }
                        )}

                        className="input input-bordered w-full" />
                    {/* ------error email message------ */}
                    {errors.email && <p role="alert" className='mt-2 ml-1 text-[#ef1010] text-bold'>
                        <span className='text-[12px] mr-1'>❌</span>
                        {errors.email?.message}
                    </p>}

                    <label className="label mt-1">
                        <span className="label-text text-slate-500">password</span>
                    </label>
                    <input type='password' placeholder='password'
                        {...register("password",
                            {
                                required: "password is required",
                                minLength: { value: 6, message: "password must be 6 characters or longer" },
                                maxLength: { value: 16, message: "password must be under the 16 characters !" }
                            }
                        )} className="input input-bordered w-full" />
                    {/* ------error password message------ */}


                    {errors?.password ?
                        <p role="alert" className=' ml-1 text-[#ef1010]     text-bold text-[13px] mt-2'>
                            <span className='text-[9px] mr-1'>❌</span>
                            {errors?.password?.message}
                        </p>
                        :
                        dirtyFields.password && <h1 className='text-[14px] ml-1 mt-2 text-[#1267e6]'>✅ your password be strong</h1>

                    }


                    <Link onClick={restePasswords} className="label-text ml-[3px] mt-[2px] text-slate-500 hover:text-black">forget password</Link>

                    <input className='btn w-full bg-slate-600 text-white mt-6 mx-auto flex justify-center' type="submit" />

                    <div className="down-text mt-5">
                        <p className='text-sm text-[#000000] text-center'>New to Doctor Portal
                            <Link to={'/singUp'} className='text-red-700 ml-1'> Create New Account</Link>
                        </p>
                        <div className="divider">OR</div>
                        <div className="flex gap-5 justify-center">
                            <Link className="block">
                                <FaFacebookSquare className='text-2xl hover:text-[#383a3a] text-[#0d28c5]'></FaFacebookSquare>
                                <p className='text-[10px] text-black hover:text-[#0d28c5] text-center'>facbook</p>
                            </Link>
                            <Link className="block">
                                <FaGoogle onClick={autoSingInGoogle} className='text-2xl text-[#0a0a0a] hover:text-[#0201019e]'></FaGoogle>
                                <p className='text-[10px] text-black hover:text-[#0201019e]'>google</p>
                            </Link>
                            <Link className="block">
                                <FaGithub className='text-2xl text-[#7d8080] hover:text-[#000]'></FaGithub>
                                <p className='text-[10px] text-black'>gitHub</p>
                            </Link>
                        </div>
                    </div>
                </form>

            </div>
        </>
    );
};

export default Login;