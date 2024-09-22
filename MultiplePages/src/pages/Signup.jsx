import React, { useState } from 'react';
import { SiSimplelogin } from "react-icons/si";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { GoogleLogin } from '@react-oauth/google';


function Signup() {
  
	let navigate = useNavigate();

    const [formData, setFormdata] = useState({
        email: '',
        password: ''
    });

    const changeHandler = (event) => {
        setFormdata((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(formData);
        toast.success('Login successful');
        navigate('/');
    }

	const handleGoogleSuccess = (response) => {
        console.log(response);
        toast.success('Google sign-in successful');
        navigate('/');
    };

    const handleGoogleFailure = (error) => {
        console.error('Google sign-in failed:', error);
        toast.error('Google sign-in failed');
    };


    return (
        <div className='w-full h-full flex justify-center items-center font-bold text-white '>
            <div className='w-[50%] h-full flex flex-col justify-center items-center mt-8'>
                <div className='mt-[-8vw] mb-[4vw]'>
                    <h1 className='text-center text-5xl font-bold mb-1'>Join the millions learning to code with us in free</h1>
                    <h2 className='text-center text-sm'>Build skills for today, tomorrow and beyond. Education to future-proof your career</h2>
                    {/* <h2 className='text-center text-xs'>Education to future-proof your career</h2> */}
                </div>
                <form onSubmit={submitHandler} className='flex flex-col'>
                    {/* Email */}
                    <label className='font-semibold' htmlFor="email">
                        Enter your email <sup className='font-bold'>*</sup>
                    </label>
                    <input 
                        type="email"
                        name="email"  // Ensuring correct name attribute
                        placeholder='Enter your email'
                        id='email'
                        required
                        className='px-16 py-2 rounded-lg mt-2 mb-4 text-black bg-zinc-300'
                        onChange={changeHandler}
                        value={formData.email}
                    />

                    {/* Password */}
                    <label className='font-semibold' htmlFor="password">
                        Enter your password <sup className='font-bold'>*</sup>
                    </label>
                    <input 
                        type="password"
                        name="password"  // Ensuring correct name attribute
                        placeholder='Enter password'
                        id='password'
                        required
                        className='px-16 py-2 rounded-lg mt-2 text-black bg-zinc-300'
                        onChange={changeHandler}
                        value={formData.password}
                    />

                    <p className='text-xs font-normal ml-[66%] mt-1 text-[#a8f4f4]'>Forgot password?</p>

                    <div className='mt-7 flex gap-2 items-center'>
                        <div className='w-[10vw] h-[2px] bg-white rounded-full'></div>
                        <SiSimplelogin className='size-[3vw]' />
                        <div className='w-[10vw] h-[2px] bg-white rounded-full'></div>
                    </div>

                    {/* Submit */}
                    <input type="submit" value="Login" className='w-[15vw] h-[6vh] bg-[#822beb] text-white text-xl font-semibold rounded-lg ml-[4.3vw] mt-1 cursor-pointer'/>
					<div className='mt-7 flex gap-2 items-center opacity-[0.5] mb-3'>
                        <div className='w-[10vw] h-[0.5px] bg-white rounded-full'></div>
                        <p>or</p>
                        <div className='w-[10vw] h-[0.5px] bg-white rounded-full'></div>
                    </div>
                    
					
						
						<GoogleLogin 
                            onSuccess={handleGoogleSuccess} 
                            onFailure={handleGoogleFailure} 
                            render={renderProps => (
                                <div onClick={renderProps.onClick} className='flex items-center '>
                                    <div className='mt-1 '>Sign in with Google</div>
                                </div>
                            )}
							className='mt-[1vw] opacity-[0.5]  '
                        />
					

                </form>
            </div>

            <div className='w-[50%] h-full flex justify-center items-center'>
                <img 
                    src="src\assets\frontpage-bgimage-removebg-min_1.jpg"
                    alt="Contact" 
                    className='w-[80%] h-[80%] object-cover mb-[-9vw] animate-bounce '
					loading='lazy' 
                />
            </div>
        </div>
	
    );
  
}

export default Signup
