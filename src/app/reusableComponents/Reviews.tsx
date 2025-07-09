import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { ReviewProps } from '../../../types/Review';

interface Props {
    review: ReviewProps
}

const Reviews = ({ review }: Props) => {
    return (
        <div className='flex flex-col justify-between bg-[#00000011] p-3 dark:bg-[#ffffff0a]' style={{ width: 'calc(100%/3 - 20px/3)' }}>
            {/* header */}
            <div className='flex items-center gap-2'>
                <div>
                    <Image
                    className='rounded-full pointer-events-none'
                    src={review.image}
                    alt='Image'
                    width={20}
                    height={20}
                    priority
                />
                </div>
                <div className='flex flex-col gap-[2px]'>
                    <h6 className='mainColor' style={{ fontSize: '8px' }}>{review.name}</h6>
                    <div className='flex'><StarIcon className='w-[7px] text-[#c24]' /><StarIcon className='w-[7px] text-[#c24]' /><StarIcon className='w-[7px] text-[#c24]' /><StarIcon className='w-[7px] text-[#c24]' /><StarIcon className='w-[7px] text-[#c24]' /></div>
                </div>
            </div>
            {/* middle */}
            <p className='line-clamp-3' style={{ fontSize: '8px', opacity: '0.6', lineHeight: '10px', marginTop: '5px', marginBottom: '2px' }}>{review.comment}</p>
            {/* footer */}
            <div className='flex justify-between items-end'>
                <h6 className='mainColor' style={{ fontSize: '8px' }}>Review date:</h6>
                <h6 className='mainColor' style={{ fontSize: '7px' }}>{review.date}</h6>
            </div>
        </div>
    )
}

export default Reviews;