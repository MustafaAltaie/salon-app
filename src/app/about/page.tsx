'use client';
import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Staf from '../reusableComponents/Staf';
import Reviews from '../reusableComponents/Reviews';
import { ReviewProps } from '../../../types/Review';
import { AboutList } from '../../../types/AboutList';
import Mission from './Mission';
import Image from 'next/image';

const About = () => {
    const [laptop, setLaptop] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
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
    const [aboutList] = useState<AboutList[]>([
        {
            id: '1',
            title: 'Haircuts',
            text: 'Our skilled stylists specialize in modern and classic haircuts, delivering personalized styles with precision, care, and professional attention.',
            icon: 'fa-solid fa-scissors'
        },
        {
            id: '2',
            title: 'Cleaning',
            text: 'Our professional team provides deep-cleansing hair washes that refresh the scalp, remove buildup, and prepare your hair for perfect styling.',
            icon: 'fa-solid fa-shower'
        },
        {
            id: '3',
            title: 'Photography',
            text: 'We love showcasing your fresh style! With your permission, we may take professional photos after your appointment to highlight your new look.',
            icon: 'fa-solid fa-camera'
        },
        {
            id: '4',
            title: 'Branches',
            text: 'We proudly serve clients across Europe with branches in: Sweden, Denmark, United Kingdom, Germany.',
            icon: 'fa-solid fa-earth-americas'
        },
        {
            id: '5',
            title: 'Reputation',
            text: 'Most of our customers leave happy and satisfied — and many keep coming back. Your comfort and confidence are our priority.',
            icon: 'fa-solid fa-face-smile'
        },
        {
            id: '6',
            title: 'Products',
            text: 'We use only high-quality, premium-grade products — from creams to treatments — ensuring cleanliness, safety, and exceptional results every time.',
            icon: 'fa-solid fa-spray-can-sparkles'
        },
        {
            id: '7',
            title: 'Our staff',
            text: 'Our team is made up of skilled, experienced professionals who are passionate about their craft and committed to delivering top-quality service.',
            icon: 'fa-solid fa-user-nurse'
        },
        {
            id: '8',
            title: 'Haircuts',
            text: 'Our aim is to provide high-quality grooming and self-care services that help every client look and feel their best.',
            icon: 'fa-solid fa-crosshairs'
        },
    ]);
    const [heroImages] = useState<string[]>(['/images/1.jpg', '/images/2.jpg', '/images/4.jpg', '/images/5.jpg']);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        setIsMounted(true);
        const checkWidth = () => {
            setLaptop(window.innerWidth >= 1024);
        }
        checkWidth();
        window.addEventListener('resize', checkWidth);
        return () => window.removeEventListener('resize', checkWidth);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
           setCount(prev => (prev + 1) % heroImages.length); 
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    if (!isMounted) return null;

    return (
        <>
        <Header laptop={laptop} />
        <section className='overflow-x-hidden'>
            <div>
                {/* hero images slideshow */}
                <div className={`relative ${laptop ? 'w-[500px] mx-auto' : ''}`}>
                    <div className={`relative ${laptop ? 'h-[400px]' : 'h-[500px]'}`}>
                        {heroImages.map((image, index) =>
                        <div
                            key={(index)}
                            className='w-full h-full absolute top-0 left-0 flex transition-opacity duration-2000'
                            style={{ opacity: index === count ? 1 : 0 }}
                        >
                            <Image
                                className='w-full h-full object-cover object-center pointer-events-none'
                                src={image}
                                alt='Image'
                                width={500}
                                height={500}
                                loading='lazy'
                            />
                        </div>)}
                    </div>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
                        <h1 className='font-bold mb-2 text-white'>Our Work Speaks for Itself</h1>
                        <p className='text-[#b82]'>We take pride in every cut, style, and treatment delivering personalized results that leave our clients confident, fresh, and satisfied.</p>
                    </div>
                </div>
                {/* hero images list */}
                <div className={`flex flex-wrap gap-[10px] ${laptop ? 'w-[500px] mx-auto py-[10px]' : 'p-[10px] border-b-[0.5px]'}`}>
                    {heroImages.map((image, index) =>
                    <div
                        key={index}
                        className='h-[80px] cursor-pointer'
                        style={{ width: 'calc(100%/4 - 30px/4)', border: index === count ? 'solid 5px #08a' : 'solid 5px #a70' }}
                        onClick={() => setCount(index)}
                    >
                        <Image
                            className='w-full h-full object-cover pointer-events-none'
                            src={image}
                            alt='image'
                            width={200}
                            height={200}
                            loading='lazy'
                        />
                    </div>
                    )}
                </div>
                {/* about text */}
                <div className={`px-10 pt-3 pb-5 border-t-[0.5px] border-b-[0.5px] ${laptop ? 'w-[900px] mx-auto' : ''}`}>
                    <h3 className='text-[#a70]'>About us</h3>
                    <p className={!laptop ? 'font-[200]' : ''}>At our salon, beauty meets expertise. We're a team of skilled professionals passionate about helping you look and feel your best. From precision haircuts and beard grooming to rejuvenating skincare and relaxing treatments, we focus on delivering personalized service in a clean, welcoming environment. With attention to detail, high-quality products, and modern techniques, we make every visit an experience — not just an appointment.</p>
                </div>
                {/* staff */}
                <div className={laptop ? 'w-[900px] mx-auto pt-5' : ''}>
                    <h3 className={`text-[#a70] ml-10 ${!laptop ? 'mt-4 mb-2' : ''}`}>Meet the team</h3>
                    <div className={`${laptop ? 'p-5' : 'p-5 pt-0'}`}>
                        <Staf laptop={laptop} />
                    </div>
                </div>
                {/* review */}
                <div className={`px-10 pb-7 pt-3 mb-5 ${laptop ? 'w-[500px] mx-auto' : 'border-t-[0.5px] border-b-[0.5px]'}`}>
                    <p className='text-[#a70] mb-1'>Review</p>
                    <div className='flex flex-wrap gap-[10px]'>
                        {reviews.map(review =>
                            <Reviews key={review.id} review={review} />
                        )}
                    </div>
                </div>
                {/* our mission */}
                <div className={laptop ? 'w-[500px] mx-auto' : ''}>
                    <p className='ml-15 text-[#a70]'>Our Mission</p>
                    <Mission aboutList={aboutList} laptop={laptop} />
                </div>
            </div>
        </section>
        <Footer laptop={laptop} />
        </>
    )
}

export default About;