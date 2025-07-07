'use client';
import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SocialIcons from '../reusableComponents/SocialIcons';

const Contact = () => {
    const [laptop, setLaptop] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

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
        <section className='p-10 border-b-[0.5px]'>
            <div className={`${laptop && 'w-[500px] mx-auto'}`}>
                <div className='text-center'>
                    <h1 className='text-[#a70]'>Contact us</h1>
                    <p className='mt-3 mb-5 dark:opacity-75 dark:font-[200]'>Have questions about our services, booking, or your upcoming appointment? We’re here to help! Whether you're looking for style advice, need to reschedule, or just want to say hello — feel free to reach out.</p>
                </div>
                <form>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col'>
                            <label htmlFor="contactName" className='mainColor translate-x-[15px] translate-y-[7px] bg-[#EEE8DC] dark:bg-[#222] w-fit'>Full name</label>
                            <input type="text" required id='contactName' className='rounded-xl border-[0.5px] mainBorder p-2' placeholder='e.g. Erik Anderson' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="contactEmail" className='mainColor translate-x-[15px] translate-y-[7px] bg-[#EEE8DC] dark:bg-[#222] w-fit'>Email adsress</label>
                            <input type="email" required id='contactEmail' className='rounded-xl border-[0.5px] mainBorder p-2' placeholder='e.g. erik@gmail.com' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="contactMessage" className='mainColor translate-x-[15px] translate-y-[7px] bg-[#EEE8DC] dark:bg-[#222] w-fit'>Message</label>
                            <textarea id='contactMessage' required className='text-xs rounded-xl border-[0.5px] mainBorder p-2' placeholder='Your message' />
                        </div>
                        <button className='mainBg mt-3 p-2 rounded-xl text-white'>Send</button>
                    </div>
                </form>
                <p className={`mt-5 dark:opacity-75 dark:font-[200] ${laptop && 'text-center'}`}>You can also connect with us on social media for the latest updates, tips, and inspiration!</p>
                <div className='flex justify-center mt-5'>
                    <SocialIcons />
                </div>
            </div>
        </section>
        <Footer laptop={laptop} />
        </>
    )
}

export default Contact;