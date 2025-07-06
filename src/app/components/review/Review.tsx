import React, { useState } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import ReviewForm from './ReviewForm';

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
            comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio in repellat.',
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
            comment: 'Lorem ipsum, dolor sit amet consectetur.',
            image: '/images/staf/3.jpg',
            rate: 4,
        },
    ]);
    const [review, setReview] = useState(false);

    return (
        <section className='border-t-[0.5px] dark:border-b-[0.5px] border-[#00000055] dark:border-[#ffffff33]'>
            <h6 className={`pt-5 px-10 ${laptop && 'text-center'}`}>The latest three reviews we got. <span className='mainColor cursor-pointer' onClick={() => setReview(true)}>Please leave us a review</span> to help us grow.</h6>
            <div className={`flex flex-wrap gap-[10px] px-10 pt-5 pb-7 ${laptop && 'w-[500px] mx-auto'}`}>
                {/* review */}
                {reviews.map(review =>
                <div key={review.id} className='flex flex-col justify-between bg-[#00000011] p-3 dark:bg-[#ffffff0a]' style={{ width: 'calc(100%/3 - 20px/3)' }}>
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
                            <h6 className='text-[#a70]' style={{ fontSize: '8px' }}>{review.name}</h6>
                            <div className='flex'><StarIcon className='w-[7px] text-[#c24]' /><StarIcon className='w-[7px] text-[#c24]' /><StarIcon className='w-[7px] text-[#c24]' /><StarIcon className='w-[7px] text-[#c24]' /><StarIcon className='w-[7px] text-[#c24]' /></div>
                        </div>
                    </div>
                    {/* middle */}
                    <p style={{ fontSize: '8px', opacity: '0.6', lineHeight: '10px', marginTop: '5px', marginBottom: '2px' }}>{review.comment}</p>
                    {/* footer */}
                    <div className='flex justify-between items-end'>
                        <h6 className='text-[#a70]' style={{ fontSize: '8px' }}>Review date:</h6>
                        <h6 className='text-[#a70]' style={{ fontSize: '7px' }}>{review.date}</h6>
                    </div>
                </div>)}
            </div>
            <ReviewForm laptop={laptop} review={review} setReview={setReview} />
        </section>
    )
}

export default Review;