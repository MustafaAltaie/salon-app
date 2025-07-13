import React from 'react';
import { UserProps } from '../../../types/User';

interface Props {
    myDetails: UserProps
    prepareObj: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleUpdate: (e: React.FormEvent<HTMLFormElement>) => void
    busy: boolean
}

const Form = ({ myDetails, prepareObj, handleUpdate, busy }: Props) => {
    return (
        <form onSubmit={handleUpdate} className='w-full flex flex-col gap-3'>
            <div className='flex flex-col'>
                <label htmlFor="accountName">Full name</label>
                <input type="text" id='accountName' value={myDetails.username} name='username' onChange={prepareObj} className='border-[0.7px] border-[#00000077] dark:border-[#ffffff55] rounded-lg p-2' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="accountMobile">Mobile number</label>
                <input type="tel" id='accountMobile' value={myDetails.mobile} name='mobile' onChange={prepareObj} className='border-[0.7px] border-[#00000077] dark:border-[#ffffff55] rounded-lg p-2' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="accountEmail">Email address</label>
                <input type="email" id='accountEmail' value={myDetails.email} name='email' onChange={prepareObj} className='border-[0.7px] border-[#00000077] dark:border-[#ffffff55] rounded-lg p-2' />
            </div>
            <button type='submit' disabled={busy} style={{ background: busy ? '#777' : '' }} className='w-full p-3 mt-3 mainBg rounded-lg text-white'>Save changes</button>
        </form>
    )
}

export default Form;