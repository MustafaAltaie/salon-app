'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import './Deals.css';

interface DealProps {
    id: string
    title: string
    descrition: string
    image: string
}

const Deals = () => {
    const [deals] = useState<DealProps[]>([
        {
            id: '1',
            title: 'haircuts and washing',
            descrition: "Sit back, relax, and let us take care of the rest. From a refreshing wash to a perfectly tailored cut, every step is designed to leave you feeling confident and renewed.",
            image: '/images/deals/1.png',
        },
        {
            id: '2',
            title: 'haircut + beard combo',
            descrition: "Fresh cut, clean lines, and a beard that means business — our haircut and beard combo is designed to keep you looking sharp and feeling confident.",
            image: '/images/deals/2.png',
        },
        {
            id: '3',
            title: 'haircut for men',
            descrition: "A great haircut does more than clean up your look — it boosts confidence and defines your personal style. Our mens haircut service is all about precision, and attention to detail.",
            image: '/images/deals/3.png',
        },
        {
            id: '4',
            title: 'beard style cut',
            descrition: "Your beard deserves more than just a trim — it deserves style. Our beard styling service is tailored to shape, define, and enhance your natural features.",
            image: '/images/deals/4.png',
        },
        {
            id: '5',
            title: 'Skin purification treatment',
            descrition: "Give your skin the deep refresh it deserves. Our advanced facial purification treatment is designed to cleanse beneath the surface — targeting clogged pores, excess oil, and dullness.",
            image: '/images/deals/5.png',
        },
        {
            id: '6',
            title: 'hair blow-dry & styling',
            descrition: "Sometimes all it takes is a good blowout to feel brand new. Our blow-dry and styling service is designed to smooth, shape, and bring your hair to life with volume.",
            image: '/images/deals/6.png',
        },
    ]);

    return (
        <section>
            <div className='dealsWrapper flex flex-col'>
                {/* card */}
                {deals.map((item, index) =>
                <div key={item.id} className='border-t-[0.5px] flex items-center bg-[#aa98dd] dark:bg-[#64a]'>
                    <div className='dealImageWrapper w-1/2 p-7'>
                        <div className={`border-[0.5px] overflow-hidden ${index%2 === 0 ? 'rounded-tr-[50px] rounded-br-[50px]' : 'rounded-tl-[50px] rounded-bl-[50px]'}`}>
                            <Image
                                src={item.image}
                                alt='Deals'
                                width={200}
                                height={200}
                                loading='lazy'
                            />
                        </div>
                    </div>
                    <div className={`dealDetailsWrapper w-1/2 ${index%2 === 0 ? 'pl-[20px]' : 'pr-[20px]'}`}>
                        <div className={`${index%2 === 0 ? 'text-right' : 'text-left'}`}>
                            <p className='font-bold opacity-80 dark:opacity-90'>{item.title}</p>
                            <h6 className='opacity-70 dark:opacity-50'>{item.descrition}</h6>
                        </div>
                    </div>
                </div>)}
            </div>
        </section>
    )
}

export default Deals;