'use client';
import React, { useEffect, useRef, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface Props {
    review: boolean
    setReview: React.Dispatch<React.SetStateAction<boolean>>
}

const ReviewForm = ({ review, setReview }: Props) => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [mouted, setMouted] = useState(false);

    useEffect(() => {
        if (!formRef.current) return;
        if (mouted) return;
        if (review) {
            setMouted(true);
            formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [review, setMouted]);

    return (
        <form ref={formRef} className={`transition-all duration-700 px-10 overflow-y-hidden lg:w-[500px] lg:mx-auto ${review ? 'max-h-70 mb-10' : 'max-h-0'}`}>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col'>
                    <div className='flex justify-between items-start'>
                        <label htmlFor="nameText">Full name</label>
                        <XMarkIcon className='w-5 cursor-pointer' onClick={() => setReview(false)} />
                    </div>
                    <input className='border-[0.5px] rounded-lg p-2 border-[#00000077] dark:border-[#ffffff77]' type="text" id='nameText' placeholder='e.g. John Ericson' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="nameText">Rate</label>
                    <input className='border-[0.5px] rounded-lg p-2 border-[#00000077] dark:border-[#ffffff77]' min={1} max={5} type="number" id='nameText' placeholder='1 - 5' />
                </div>
                <div>
                    <input type="checkbox" id='showNameCheck' />
                    <label htmlFor='showNameCheck' className='pl-2 cursor-pointer'>Show my picture</label>
                </div>
                <button className='p-2 mt-2 bg-[#a70] text-white rounded-xl'>Submit my rate</button>
            </div>
        </form>
    )
}

export default ReviewForm;