'use client';
import React, { useState } from 'react';
import { UserIcon, EnvelopeIcon, PhoneIcon, ArrowLongRightIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

interface Props {
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
    prepareSave: (e:React.ChangeEvent<HTMLInputElement>) => void
    handleSignup: (e:React.FormEvent<HTMLFormElement>) => void
}

const SignupForm = ({ setLogin, prepareSave, handleSignup }: Props) => {
    const [show, setShow] = useState(false);

    return (
        <form onSubmit={handleSignup} className='lg:min-w-[40%] lg:border-[0.5px] lg:border-[#00000077] lg:dark:border-[#ffffff77] lg:py-3 px-5 rounded-3xl flex flex-col gap-3 lg:gap-3'>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>
                    <UserIcon className='lg:w-4 w-5 mainColor' />
                    <label className='mainColor' htmlFor="nameText">Username</label>
                </div>
                <input type="text" required id='nameText' name='username' autoComplete='name' placeholder='e.g. John Anderson' onChange={prepareSave} />
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>
                    <EnvelopeIcon className='lg:w-4 w-5 mainColor' />
                    <label className='mainColor' htmlFor="emailText">Email address</label>
                </div>
                <input type="email" id='emailText' required name='email' autoComplete='email' placeholder='e.g. John@gmail.com' onChange={prepareSave} />
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>
                    <PhoneIcon className='lg:w-4 w-5 mainColor' />
                    <label className='mainColor' htmlFor="mobileText">Mobile</label>
                </div>
                <input type="tel" required id='mobileText' name='mobile' autoComplete='tel' placeholder='e.g. 0712345678' onChange={prepareSave} />
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>
                    {!show && <EyeSlashIcon className='lg:w-4 w-5 mainColor cursor-pointer' onClick={() => setShow(true)} />}
                    {show && <EyeIcon className='lg:w-4 w-5 mainColor cursor-pointer' onClick={() => setShow(false)} />}
                    <label className='mainColor' htmlFor="passwordText">Password</label>
                </div>
                <input type="password" required id='passwordText' name='password' autoComplete='off' placeholder='Password' onChange={prepareSave} />
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>
                    <label className='mainColor' htmlFor="confirmText">Confirm password</label>
                </div>
                <input type="password" required id='confirmText' name='confirmed' autoComplete='off' placeholder='Confirm password' onChange={prepareSave} />
            </div>
            <div className='flex justify-between'>
                <p className='text-lg'>Have an acount? <span className='mainColor cursor-pointer' onClick={() => setLogin(true)}>Sign in</span></p>
                <button className='flex gap-1 mainBg text-white items-end rounded-xl bg-[#e9e9e9] dark:bg-[#333] px-7 py-2'>Sign up<ArrowLongRightIcon className='w-5 lg:w-4' /></button>
            </div>
        </form>
    )
}

export default SignupForm;