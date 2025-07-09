'use client';
import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Booking = () => {
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
        <section>
            {/* main wrapper */}
            <div>
                <div>
                    <h1>Choose a treatment</h1>
                    <p>Start by selecting the service you’re interested in — haircut, beard trim, massage, facial, or any other treatment.</p>
                </div>
            </div>
        </section>
        <Footer laptop={laptop} />
        </>
    )
}

export default Booking;