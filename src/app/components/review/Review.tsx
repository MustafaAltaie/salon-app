import React, { useState } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';

interface Props {
    laptop: boolean
}

interface ReviewProps {
    id: string
    name: string
    date: string
    comment: string
    image: string
    rate: number
}

const Review = ({ laptop }: Props) => {
    const [reviews] = useState<ReviewProps[]>([
        {
            id: '1',
            name: 'David Ericson',
            date: '7/6/2025',
            comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio in repellat blanditiis velit.',
            image: '/images/staf/1.jpg',
            rate: 4,
        },
        {
            id: '2',
            name: 'Marie Magnus',
            date: '7/6/2025',
            comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio in.',
            image: '/images/staf/2.jpg',
            rate: 4,
        },
        {
            id: '3',
            name: 'Sara Anderson',
            date: '7/6/2025',
            comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. repellat blanditiis velit, dolores dolore reprehenderit.',
            image: '/images/staf/3.jpg',
            rate: 4,
        },
    ]);

    return (
        <section className='border-t-[0.5px] dark:border-b-[0.5px] border-[#00000055] dark:border-[#ffffff33]'>
            <div className={`flex flex-wrap gap-[10px] p-10 ${laptop && 'w-[500px] mx-auto'}`}>
                {/* review */}
                {reviews.map(review =>
                <div key={review.id} className='flex flex-col justify-between bg-[#00000018] p-3 dark:bg-[#ffffff11]' style={{ width: 'calc(100%/3 - 20px/3)' }}>
                    {/* header */}
                    <div className='flex items-center gap-2'>
                        <div>
                            <Image
                            className='rounded-full'
                            src={review.image}
                            alt='Image'
                            width={20}
                            height={20}
                            priority
                        />
                        </div>
                        <div className='flex flex-col gap-[2px]'>
                            <h6 className='text-[#0041aa] dark:text-[#a70]' style={{ fontSize: '8px' }}>{review.name}</h6>
                            <div className='flex'><StarIcon className='w-[7px] text-[#c00]' /><StarIcon className='w-[7px] text-[#c00]' /><StarIcon className='w-[7px] text-[#c00]' /><StarIcon className='w-[7px] text-[#c00]' /><StarIcon className='w-[7px] text-[#c00]' /></div>
                        </div>
                    </div>
                    {/* middle */}
                    <p style={{ fontSize: '8px', opacity: '0.6', lineHeight: '8px', marginTop: '5px', marginBottom: '2px' }}>{review.comment}</p>
                    {/* footer */}
                    <div className='flex justify-between items-end'>
                        <h6 className='text-[#0041aa] dark:text-[#a70]' style={{ fontSize: '8px' }}>Review date:</h6>
                        <h6 className='text-[#0041aa] dark:text-[#a70]' style={{ fontSize: '7px' }}>{review.date}</h6>
                    </div>
                </div>)}
            </div>
        </section>
    )
}

export default Review;