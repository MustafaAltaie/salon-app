import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import { ReviewProps } from '../../../../types/Review';
import Reviews from '@/app/reusableComponents/Reviews';

const Review = () => {
    const [reviews] = useState<ReviewProps[]>([
        {
            id: '1',
            name: 'David Ericson',
            date: '7/6/2025',
            comment: "Absolutely loved my experience! Booking was super easy, and the stylist really understood what I wanted. The place was clean, relaxing, and I left feeling amazing. Highly recommend!",
            image: '/images/staf/1.jpg',
            rate: 4,
        },
        {
            id: '2',
            name: 'Marie Magnus',
            date: '7/6/2025',
            comment: "Great service and friendly staff. My beard trim and haircut were on point. Only reason it's 4 stars is the wait time, but overall, solid experience.",
            image: '/images/staf/2.jpg',
            rate: 4,
        },
        {
            id: '3',
            name: 'Sara Anderson',
            date: '7/6/2025',
            comment: "The massage session was exactly what I needed. My back feels brand new. Super professional and calming environment — I'll definitely be back.",
            image: '/images/staf/3.jpg',
            rate: 4,
        },
    ]);
    const [review, setReview] = useState(false);

    return (
        <section className='border-t-[0.5px] border-[#00000055] dark:border-[#ffffff33]'>
            <h6 className='pt-5 px-10 lg:text-center'>The latest three reviews we got. <span className='mainColor cursor-pointer' onClick={() => setReview(true)}>Please leave us a review</span> to help us grow.</h6>
            <div className='flex flex-wrap gap-[10px] px-10 pt-5 pb-7 lg:w-[500px] lg:mx-auto'>
                {/* review */}
                {reviews.map(review =>
                <Reviews key={review.id} review={review} />
                )}
            </div>
            <ReviewForm review={review} setReview={setReview} />
        </section>
    )
}

export default Review;