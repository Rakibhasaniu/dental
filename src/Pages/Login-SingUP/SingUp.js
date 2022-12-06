import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookSquare, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../AuthContext/UserContext';
import useJWTtoken from '../../hook/useJWTtoken';
import useTitle from '../../hook/useTitle';

const SingUp = () => {
    useTitle('Registration')
    //location part 
    const navigat = useNavigate()
    const location = useLocation()
    const prevLocation = location?.state?.from?.pathname || '/';




    // dirtyFields 
    const { register, formState: { errors, isDirty, dirtyFields }, handleSubmit } = useForm({ mode: "onChange", defaultValues: { password: '' } });

    const { user, singUpUser, singInUser, userProfile, logOutUser, emailVerification, autoGoogleLogin } = useContext(AuthContext);
    // console.log(user);
    const [createdUserEmail, setCreateUserEmail] = useState('')
    const [token] = useJWTtoken(createdUserEmail)

    //token call 
    if (token) {
        toast.info('Jwt token valid 1 day')
        navigat(prevLocation, { replace: true })
    }

    // ----frome input fild handel btn------------
    const handlelogin = data => {

        // console.log(data);
        const { email, name, password, img } = data;


        //user create email or password sing up
        singUpUser(email, password)
            .then(result => {
                console.log(result?.user);
                toast.success('Registration successfully')

                userProfile(name, img)
                    .then(result => {

                        toast.info('update user profile')

                        emailVerification()
                            .then(result => {
                                toast.success('send email verifiy link to visite')
                                // ---navigate
                                userInformation(name, img, email)
                            }).catch(err => {
                                toast.error(err.message)
                                console.log(err)
                            })

                    }).catch(err => {
                        toast.error(err.message)
                        console.log(err)
                    })
            }).catch(err => {
                toast.error(err.message)
                console.log(err)
            })


    }
    // MongoDb set user information
    const userInformation = (name, img, email) => {
        const user = { name, img, email };
        fetch(`https://doctors-portal-server-site-zeta.vercel.app/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreateUserEmail(email)

            })
    }

    // console.log(dirtyFields);
    const autoSingInGoogle = () => {
        autoGoogleLogin()
            .then(result => {
                const user = result?.user;
                userInformation(user?.displayName, user?.photoURL, user?.email)
                setCreateUserEmail(user?.email)
                toast.success('User Auto Login With Google !')
            }).catch(err => console.log(err))
    }


    //Get fetch JWT token access
    // const getJwtToken = email => {
    //     fetch(`https://doctors-portal-server-site-zeta.vercel.app/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.accessToken) {
    //                 localStorage.setItem('accessToken', data.accessToken);
    //                 navigat(prevLocation, { replace: true })
    //             }
    //         })
    // }

    return (
        <>

            <div className="w-[100%] flex justify-center align-middle items-center">
                <form className='bg-gradient-to-r from-primary to-secondary lg:w-[385px] rounded-lg  p-10 my-20' onSubmit={handleSubmit(handlelogin)}>
                    <h2 className='text-center text-3xl text-bold text-white'>Sing Up</h2>

                    <div className="grid lg:grid-cols-2 gap-2">
                        <div className="block">
                            <label className="label">
                                <span className="label-text text-slate-500">Full Name</span>
                            </label>
                            <input type='name' placeholder='full name'
                                {...register("name",
                                    {
                                        required: "you full name",

                                    }
                                )}
                                className="input input-bordered w-full" />
                            {/* ------error email message------ */}
                            {errors.name && <p role="alert" className='mt-2 ml-1 text-[#ef1010] text-bold text-[13px] '>
                                <span className='text-[12px] mr-1'>❌</span>
                                {errors.name?.message}
                            </p>}
                        </div>
                        {/* -----img uplode------ */}

                        <div className="block">
                            <label className="label">
                                <span className="label-text text-slate-500">Use image</span>
                            </label>

                            <input type='img' placeholder=' User image'
                                {...register("img",
                                    {
                                        required: "your profile image",
                                    }
                                )}
                                className="input input-bordered w-full" />
                            {/* ------error email message------ */}
                            {errors.img && <p role="alert" className='mt-2 ml-1 text-[#ef1010] text-bold text-[13px] '>
                                <span className='text-[12px] mr-1'>❌</span>
                                {errors.img?.message}
                            </p>}
                        </div>


                    </div>

                    {/* ------------EMAIL--------- */}

                    <label className="label">
                        <span className="label-text text-slate-500">Email</span>
                    </label>
                    <input type='email' placeholder='email'
                        {...register("email",
                            {
                                required: "Email Address is required",

                            }
                        )}
                        className="input input-bordered w-full" />
                    {/* ------error email message------ */}
                    {errors.email && <p role="alert" className='mt-2 ml-1 text-[#ef1010] text-bold text-[13px]'>
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
                        <p role="alert" className=' ml-1 text-[#ef1010] text-bold text-[13px] mt-2'>
                            <span className='text-[9px] mr-1'>❌</span>
                            {errors?.password?.message}
                        </p>
                        :
                        dirtyFields.password && <h1 className='text-[14px] ml-1 mt-2 text-[#87069e]'>✅ your password be strong</h1>

                    }


                    <Link className="label-text ml-[3px] mt-[2px] text-slate-500 hover:text-black">forget password</Link>

                    <input className='btn w-full bg-slate-600 text-white mt-6 mx-auto flex justify-center' type="submit" />

                    <div className="down-text mt-5">
                        <p className='text-sm text-[#000000] text-center'>Already have an account?
                            <Link to={'/login'} className='text-red-700 ml-1'> login</Link>
                        </p>
                        <div className="divider">OR</div>
                        <div className="flex gap-5 justify-center">
                            <Link className="block">
                                <FaFacebookSquare className='text-2xl hover:text-[#383a3a] text-[#0d28c5]'></FaFacebookSquare>
                                <p className='text-[10px] text-black hover:text-[#0d28c5] text-center'>facbook</p>
                            </Link>
                            <Link onClick={autoSingInGoogle} className="block">
                                <FaGoogle className='text-2xl text-[#0a0a0a] hover:text-[#0201019e]'></FaGoogle>
                                <p className='text-[10px] text-black hover:text-[#0201019e]'>google</p>
                            </Link>
                            <Link className="block">
                                <FaGithub className='text-2xl text-[#8a288a] hover:text-[#000]'></FaGithub>
                                <p className='text-[10px] text-black'>gitHub</p>
                            </Link>
                        </div>
                    </div>
                </form>

            </div>
        </>
    );
};

export default SingUp;