'use client';
import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Staf from '../reusableComponents/Staf';
import Reviews from '../reusableComponents/Reviews';
import { ReviewProps } from '../../../types/Review';
import { motion } from 'framer-motion';

interface AboutList {
    id: string
    icon: string
    title: string
    text: string
}

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

    if (!isMounted) return null;

    return (
        <>
        <Header laptop={laptop} />
        <section className='overflow-x-hidden'>
            <div>
                <div className={`p-5 ${laptop ? 'w-[900px] mx-auto' : ''}`}>
                    <Staf laptop={laptop} />
                </div>
                {/* review */}
                <div className={`flex flex-wrap gap-[10px] px-10 pt-5 pb-7 ${laptop && 'w-[500px] mx-auto'}`}>
                    {/* review */}
                    {reviews.map(review =>
                    <Reviews key={review.id} review={review} />
                    )}
                </div>
                {/* all services */}
                <div className={laptop ? 'w-[500px] mx-auto' : ''}>
                    <p className='ml-15 mainColor'>Our Mission</p>
                    <div className={`px-15 overflow-y-scroll scrollbar-hide ${laptop ? 'max-h-60' : 'max-h-70'}`}>
                        {aboutList.map(item =>
                        <div key={item.id} className='flex items-center border-l-[0.5px] border-[#a70] py-5'>
                            <motion.div
                                className='mainColor bg-[#EEE8DC] dark:bg-[#222] border-[0.7px] rounded-[35%] max-w-[30px] min-w-[30px] max-h-[30px] min-h-[30px] centered -translate-x-[50%]'
                                initial={{ x: -50 }}
                                whileInView={{ x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: laptop ? true : false, amount: 0 }}
                            >
                                <i className={item.icon}></i>
                            </motion.div>
                            <motion.div
                                initial={{ x: 50 }}
                                whileInView={{ x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: laptop ? true : false, amount: 0.3 }}
                            >
                                <p className='mainColor'>{item.title}</p>
                                <h6 className='opacity-70'>{item.text}</h6>
                            </motion.div>
                        </div>)}
                    </div>
                </div>
            </div>
        </section>
        <Footer laptop={laptop} />
        </>
    )
}

export default About;