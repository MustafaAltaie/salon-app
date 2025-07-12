import React from 'react';

const Form = () => {
    return (
        <form className='w-full flex flex-col gap-3'>
            <div className='flex flex-col'>
                <label htmlFor="accountName">Full name</label>
                <input type="text" id='accountName' className='border-[0.7px] border-[#00000077] dark:border-[#ffffff55] rounded-lg p-2' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="accountMobile">Mobile number</label>
                <input type="tel" id='accountMobile' className='border-[0.7px] border-[#00000077] dark:border-[#ffffff55] rounded-lg p-2' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="accountEmail">Email address</label>
                <input type="email" id='accountEmail' className='border-[0.7px] border-[#00000077] dark:border-[#ffffff55] rounded-lg p-2' />
            </div>
            <button className='w-full p-3 mt-3 mainBg rounded-lg text-white'>Save changes</button>
        </form>
    )
}

export default Form;