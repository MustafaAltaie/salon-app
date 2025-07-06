'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface Props {
    laptop: boolean
}

interface StafProps {
    id: string
    name: string
    position: string
    image: string
}

const Section2 = ({ laptop }: Props) => {
    const [staf] = useState<StafProps[]>([
        {
            id: '1',
            name: 'John Berkdar',
            position: 'Massage Therapist',
            image: '/images/staf/1.jpg',
        },
        {
            id: '2',
            name: 'Nina Forslund',
            position: 'Makeup Artist',
            image: '/images/staf/2.jpg',
        },
        {
            id: '3',
            name: 'Sara Anderson',
            position: 'Hair dresser',
            image: '/images/staf/3.jpg',
        },
        {
            id: '4',
            name: 'Jessica Wistler',
            position: 'Hair dresser',
            image: '/images/staf/4.jpg',
        },
    ]);

    return (
        <section className='text-center bg-[#EEE8DC]'>
            <div className='bg-[#252525] py-10 px-18'>
                <h2 className='text-[#bba593]' style={{ fontFamily: '"Luxurious Script", cursive' }}>Ready for a fresh look?</h2>
                <h6 className={`text-[#bba593] mt-1 mb-3 ${laptop && 'px-70'}`}>Booking your next appointment has never been easier. Whether you're planning a quick trim, a fresh color, or a full day of pampering, our simple booking system lets you choose the perfect time, service, and stylist — all in just a few taps.</h6>
                <h6 className='border-[0.5px] border-[#bba593] text-[#bba593] py-1 px-3 w-fit mx-auto'>Book now. Shine later</h6>
            </div>
            <div className={`bg-[#EEE8DC] py-10 ${laptop && 'w-[500px] mx-auto'}`}>
                <h2 className='text-black' style={{ fontFamily: '"Luxurious Script", cursive' }}>Meet the artists</h2>
                <h6 className='text-black'>Passionate about beauty. Experts in precision</h6>
                <div className='flex flex-wrap gap-[10px] px-5'>
                    {staf.map(worker =>
                    <div key={worker.id} className='mt-5 flex flex-col items-center' style={{ width: 'calc(100%/4 - 30px/4)' }}>
                        <Image
                            className='rounded-full w-[80px] h-[80px] object-cover'
                            src={worker.image}
                            alt='Staf'
                            width={100}
                            height={100}
                        />
                        <h6 className='text-[#244ae4]'>{worker.name}</h6>
                        <h6 className='text-black'>{worker.position}</h6>
                    </div>)}
                </div>
            </div>
        </section>
    )
}

export default Section2;