'use client';
import React, { useState } from 'react';

interface Props {
    selectedT: string[]
    setStep: React.Dispatch<React.SetStateAction<number>>
    selected: Date | undefined
    thisTime: string
    setShowTerms: React.Dispatch<React.SetStateAction<boolean>>
}

const Confirmation = ({ selectedT, selected, thisTime, setShowTerms, setStep }: Props) => {
    const [terms, setTerms] = useState(false);

    return (
        <div className='lg:w-[400px] lg:mx-auto'>
            <div>
                <div>
                    <h3 className='mainColor mb-3 font-bold'>Booking review</h3>
                    <p className='opacity-75 mb-5'>Almost done! Check your booking details and confirm your appointment.</p>
                </div>
                <div>
                    <h4 className='mainColor'>Chosen treatments</h4>
                    <ul className='list-disc ml-3'>
                        {selectedT.map(item =>
                        <li key={item} className='text-sm'>{item}</li>)}
                    </ul>
                </div>
                <div className='my-5'>
                    <h4 className='mainColor'>Chosen date</h4>
                    <p>{selected!.toDateString()}</p>
                </div>
                <div>
                    <h4 className='mainColor'>Chosen time</h4>
                    <p>{thisTime}</p>
                </div>
            </div>
            <form className='flex flex-col gap-3 border-t-[0.5px] mt-5 pt-5'>
                <div className='flex flex-col'>
                    <label htmlFor="clientName">Your full name*</label>
                    <input type="text" className='border-[0.5px] border-[#00000077] dark:border-[#ffffff77] p-2 rounded-xl' id='clientName' placeholder='e.g. John Anderson' required />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="clientNumber">Your number*</label>
                    <input type="text" className='border-[0.5px] border-[#00000077] dark:border-[#ffffff77] p-2 rounded-xl' id='clientNumber' placeholder='e.g. John@gmail.com' required />
                </div>
                <div>
                    <input type="checkbox" id='acceptTerm' className='cursor-pointer' checked={terms} onChange={() => setTerms(!terms)} />
                    <label htmlFor="acceptTerm" className='pl-2 cursor-pointer'>I have read and agree to the </label>
                    <span className='text-[#06a] dark:text-[#09d] lg:text-xs cursor-pointer' onClick={() => setShowTerms(true)}>Terms and Conditions.</span>
                </div>
                <div className='flex gap-5'>
                    <p className='mainBg w-full rounded-lg p-3 text-white text-center cursor-pointer' onClick={() => setStep(3)}>Back</p>
                    <button className={`p-3 rounded-xl w-full text-white ${terms ? 'mainBg' : 'bg-[#777] pointer-events-none'}`}>Confirm order</button>
                </div>
            </form>
        </div>
    )
}

export default Confirmation;