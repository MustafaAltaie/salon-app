'use client';
import React, { useState } from 'react';
import { EnvelopeIcon, ArrowLongRightIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

interface Props {
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
    laptop: boolean
}

const LoginForm = ({ setLogin, laptop }: Props) => {
    const [show, setShow] = useState(false);

    return (
        <form className='border-[0.5px] border-[#00000077] dark:border-[#ffffff77] p-4 rounded-3xl flex flex-col gap-4 lg:gap-3'>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>
                    <EnvelopeIcon className={`${laptop ? 'w-4' : 'w-5'} mainColor`} />
                    <label className='mainColor' htmlFor="emailText">Email address</label>
                </div>
                <input type="email" id='emailText' autoComplete='off' placeholder='e.g. John@gmail.com' />
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>
                    {!show && <EyeSlashIcon className={`${laptop ? 'w-4' : 'w-5'} mainColor cursor-pointer`} onClick={() => setShow(true)} />}
                    {show && <EyeIcon className={`${laptop ? 'w-4' : 'w-5'} mainColor cursor-pointer`} onClick={() => setShow(false)} />}
                    <label className='mainColor' htmlFor="mobileText">Password</label>
                </div>
                <input type="password" id='mobileText' autoComplete='off' placeholder='Password' />
            </div>
            <div className='flex flex-col gap-3 mt-2'>
                <button className='flex justify-center gap-1 mainBg text-white rounded-xl bg-[#e9e9e9] dark:bg-[#333] py-2'>Sign in<ArrowLongRightIcon className='w-5 lg:w-4' /></button>
                <p className='text-lg'>Don't have an acount? <span className='mainColor cursor-pointer' onClick={() => setLogin(false)}>Sign up</span></p>
            </div>
            <p className='text-neutral-500'>New here? Create an account to book appointments, track your visits, and enjoy exclusive salon offers.</p>
        </form>
    )
}

export default LoginForm;