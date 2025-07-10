'use client';
import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Calendar from './Calendar';
import Treatments from './Treatments';
import { TreatmentProps } from '../../../types/Treatments';
import TimePick from './TimePick';

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
    const [selectedT, setSelectedT] = useState<string[]>([]);
    const [selected, setSelected] = useState<Date | undefined>();
    const [step, setStep] = useState(1);
    const [thisDay, setThisDay] = useState<string>('');

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
                        setThisDay={setThisDay}
                        thisDay={thisDay}
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