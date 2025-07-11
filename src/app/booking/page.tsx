'use client';
import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Calendar from './Calendar';
import Treatments from './Treatments';
import { TreatmentProps } from '../../../types/Treatments';
import TimePick from './TimePick';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Confirmation from './Confirmation';

const Booking = () => {
    const [laptop, setLaptop] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const treatments: TreatmentProps[] = [
        {
            icon: 'scessors',
            title: 'Haircut'
        },
        {
            icon: 'razor',
            title: 'Razor'
        },
        {
            icon: 'mustache',
            title: 'Mustache'
        },
        {
            icon: 'makeup',
            title: 'Makeup'
        },
        {
            icon: 'hair-man',
            title: 'Hair color Men'
        },
        {
            icon: 'hair-color',
            title: 'Hair color women'
        },
        {
            icon: 'blower',
            title: 'Hair dry'
        },
        {
            icon: 'nail-polish',
            title: 'Nail Polish'
        },
        {
            icon: 'mascara',
            title: 'Mascara'
        },
        {
            icon: 'beauty-cream',
            title: 'Face cream'
        },
        {
            icon: 'beard',
            title: 'Beard'
        },
        {
            icon: 'lipstick',
            title: 'Lipstick'
        },
    ];
    const [selectedT, setSelectedT] = useState<string[]>([]); // selected treatments
    const [selected, setSelected] = useState<Date | undefined>(); // selected date
    const [step, setStep] = useState(1);
    const [thisTime, setThisTime] = useState<string>(''); // selected time
    const [showTerms, setShowTerms] = useState(false);
    const termsText: string = "By making a booking, you agree to our appointment policy which requires timely arrival, as late arrivals may result in a shortened service or rescheduling. Please notify us at least 24 hours in advance if you need to cancel, as late cancellations or no-shows may incur a fee. It is important to inform us of any allergies, medical conditions, or skin sensitivities before your appointment. Payments are due at the time of your service unless otherwise arranged. We respect your privacy and will keep your personal information confidential, using it only for booking and communication purposes. We may update these terms occasionally, and any changes will be communicated to you. Thank you for choosing our salon; we look forward to providing you with excellent service."

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

    const handleTreatments = (t: string) => {
        setSelectedT(prev =>
            prev.includes(t)
            ? prev.filter(item => item !== t)
            : [...prev, t]
        );
    }

    const generateTimeSlots = (start: string, end: string, interval = 10) => {
        const startTime = new Date(`2000-01-01T${start}:00`);
        const endTime = new Date(`2000-01-01T${end}:00`);
        const slots: string[] = [];

        while (startTime <= endTime) {
            const hours = startTime.getHours().toString().padStart(2, '0');
            const minutes = startTime.getMinutes().toString().padStart(2, '0');
            slots.push(`${hours}:${minutes}`);
            startTime.setMinutes(startTime.getMinutes() + interval);
        }

        return slots;
    };

    const timeSlots = generateTimeSlots("10:00", "17:10");

    return (
        <>
        <Header laptop={laptop} />
        <section className='overflow-x-hidden'>
            {/* main wrapper */}
            {showTerms &&
                <div className='fixed w-full h-full z-10 p-10 lg:px-50 bg-[#EEE8DC] dark:bg-[#222]'>
                    <div className='flex justify-between mb-5'>
                        <h3 className='mainColor'>Terms and conditions</h3>
                        <XMarkIcon className='w-5 cursor-pointer' onClick={() => setShowTerms(false)} />
                    </div>
                    <p>{termsText}</p>
                </div>
            }
            <div className='p-10'>
                {step === 1 &&
                    <Treatments
                        treatments={treatments}
                        handleTreatments={handleTreatments}
                        selectedT={selectedT}
                        setStep={setStep}
                    />
                }
                {step === 2 &&
                    <Calendar
                        selected={selected}
                        setSelected={setSelected}
                        setStep={setStep}
                    />
                }
                {step === 3 &&
                    <TimePick
                        timeSlots={timeSlots}
                        setThisTime={setThisTime}
                        thisTime={thisTime}
                        setStep={setStep}
                    />
                }
                {step === 4 &&
                    <Confirmation
                        selectedT={selectedT}
                        selected={selected}
                        thisTime={thisTime}
                        setShowTerms={setShowTerms}
                        setStep={setStep}
                    />
                }
            </div>
        </section>
        <Footer laptop={laptop} />
        </>
    )
}

export default Booking;