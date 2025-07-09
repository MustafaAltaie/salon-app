'use client';
import React, { useState } from 'react';
import { EnvelopeIcon, ArrowLongRightIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

interface Props {
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginForm = ({ setLogin }: Props) => {
    const [show, setShow] = useState(false);

    return (
        <form className='lg:top-1/2 lg:gap-3 lg:border-[0.5px] lg:border-[#00000077] lg:dark:border-[#ffffff77] lg:rounded-3xl p-5 px-5 flex flex-col gap-4'>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>
                    <EnvelopeIcon className='lg:w-4 w-5 mainColor' />
                    <label className='mainColor' htmlFor="emailText">Email address</label>
                </div>
                <input type="email" id='emailText' autoComplete='off' placeholder='e.g. John@gmail.com' />
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>
                    {!show && <EyeSlashIcon className='lg:w-4 w-5 mainColor cursor-pointer' onClick={() => setShow(true)} />}
                    {show && <EyeIcon className='lg:w-4 w-5 mainColor cursor-pointer' onClick={() => setShow(false)} />}
                    <label className='mainColor' htmlFor="mobileText">Password</label>
                </div>
                <input type="password" id='mobileText' autoComplete='off' placeholder='Password' />
            </div>
            <div className='flex flex-col gap-3 mt-2'>
                <button className='flex justify-center items-end gap-1 mainBg text-white rounded-xl bg-[#e9e9e9] dark:bg-[#333] py-2'>Sign in<ArrowLongRightIcon className='w-5 lg:w-4' /></button>
                <p className='text-lg'>Don't have an acount? <span className='mainColor cursor-pointer' onClick={() => setLogin(false)}>Sign up</span></p>
            </div>
            <p className='text-neutral-500'>New here? Create an account to book appointments, track your visits, and enjoy exclusive salon offers.</p>
        </form>
    )
}

export default LoginForm;