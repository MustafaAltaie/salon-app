'use client';
import React, { useState } from 'react';
import { UserIcon, EnvelopeIcon, PhoneIcon, ArrowLongRightIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

interface Props {
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
    laptop: boolean
}

const SignupForm = ({ setLogin, laptop }: Props) => {
    const [show, setShow] = useState(false);

    return (
        <form className='lg:min-w-[40%] border-[0.5px] border-[#00000077] dark:border-[#ffffff77] p-5 rounded-3xl flex flex-col gap-3 lg:gap-3'>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>
                    <UserIcon className={`${laptop ? 'w-4' : 'w-5'} mainColor`} />
                    <label className='mainColor' htmlFor="nameText">Username</label>
                </div>
                <input type="text" id='nameText' autoComplete='name' placeholder='e.g. John Anderson' />
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>
                    <EnvelopeIcon className={`${laptop ? 'w-4' : 'w-5'} mainColor`} />
                    <label className='mainColor' htmlFor="emailText">Email address</label>
                </div>
                <input type="email" id='emailText' autoComplete='email' placeholder='e.g. John@gmail.com' />
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>
                    <PhoneIcon className={`${laptop ? 'w-4' : 'w-5'} mainColor`} />
                    <label className='mainColor' htmlFor="mobileText">Mobile</label>
                </div>
                <input type="tel" id='mobileText' autoComplete='tel' placeholder='e.g. 0712345678' />
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>
                    {!show && <EyeSlashIcon className={`${laptop ? 'w-4' : 'w-5'} mainColor cursor-pointer`} onClick={() => setShow(true)} />}
                    {show && <EyeIcon className={`${laptop ? 'w-4' : 'w-5'} mainColor cursor-pointer`} onClick={() => setShow(false)} />}
                    <label className='mainColor' htmlFor="passwordText">Password</label>
                </div>
                <input type="password" id='passwordText' autoComplete='off' placeholder='Password' />
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>
                    <label className='mainColor' htmlFor="confirmText">Confirm password</label>
                </div>
                <input type="password" id='confirmText' autoComplete='off' placeholder='Confirm password' />
            </div>
            <div className='flex items-center justify-between'>
                <p className='text-lg'>Have an acount? <span className='mainColor cursor-pointer' onClick={() => setLogin(true)}>Sign in</span></p>
                <button className='flex gap-1 mainBg text-white items-end rounded-xl bg-[#e9e9e9] dark:bg-[#333] px-7 py-2'>Sign up<ArrowLongRightIcon className='w-5 lg:w-4' /></button>
            </div>
        </form>
    )
}

export default SignupForm;