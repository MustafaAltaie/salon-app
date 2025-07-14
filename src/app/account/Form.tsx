'use client';
import React, { useEffect, useState } from 'react';
import { UserProps } from '../../../types/User';

interface Props {
    myDetails: UserProps
    prepareObj: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleUpdate: (e: React.FormEvent<HTMLFormElement>) => void
    busy: boolean
    setMyDetails: React.Dispatch<React.SetStateAction<UserProps>>
}

const Form = ({ myDetails, prepareObj, handleUpdate, busy, setMyDetails }: Props) => {
    const [edit, setEdit] = useState(false);
    const [stored, setStored] = useState<Partial<UserProps>>({
        username: '',
        mobile: '',
    });
    const [cloned, setCloned] = useState<UserProps>();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (!mounted) setCloned(myDetails);
        setMounted(true);
        const isStored = localStorage.getItem('myAccount');
        if (!isStored) return;
        const storedDetails = JSON.parse(isStored);
        setStored(storedDetails);
    }, []);

    if (!mounted) return null;

    return (
        <form onSubmit={handleUpdate} className='w-full flex flex-col gap-3 lg:w-[50%]'>
            <div className='flex flex-col'>
                <label htmlFor="accountName" className='mainColor'>Full name</label>
                <input type="text" id='accountName' value={myDetails.username} name='username' onChange={prepareObj} className={edit ? 'border-[0.7px] border-[#00000077] dark:border-[#ffffff55] rounded-lg p-2' : ''} readOnly={!edit} />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="accountMobile" className='mainColor'>Mobile number</label>
                <input type="tel" id='accountMobile' value={myDetails.mobile} name='mobile' onChange={prepareObj} className={edit ? 'border-[0.7px] border-[#00000077] dark:border-[#ffffff55] rounded-lg p-2' : ''} readOnly={!edit} />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="accountEmail" className='mainColor'>Email address</label>
                <input type="email" id='accountEmail' value={myDetails.email} name='email' onChange={prepareObj} readOnly />
            </div>
            <div className='flex gap-5'>
                {!edit &&
                <p className='w-full p-3 mt-3 mainBg rounded-lg text-white text-center cursor-pointer' onClick={() => setEdit(true)}>Edit details</p>}
                {edit && (myDetails.username !== stored.username || myDetails.mobile !== stored.mobile) &&
                <button type='submit' disabled={busy} style={{ background: busy ? '#777' : '' }} className='w-full p-3 mt-3 mainBg rounded-lg text-white'>Save changes</button>}
                {edit &&
                <p className='w-full p-3 mt-3 mainBg rounded-lg text-white text-center cursor-pointer' onClick={() => {setEdit(false); setMyDetails(cloned!)}}>Cancel editing</p>}
            </div>
        </form>
    )
}

export default Form;