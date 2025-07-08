'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '../components/header/Header';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Footer from '../components/footer/Footer';

interface PriceProps {
    id: string
    category: string
    icon: string
    price: number
    description: string
}

interface SmallListProps {
    id: string
    category: string
    price: number
}

const PriceList = () => {
    const [laptop, setLaptop] = useState(false);
    const [mounted, setMounted] = useState(false);
    const colors: string[] = ['#a70', '#07a'];
    const [prices] = useState<PriceProps[]>([
        {
            id: '1',
            category: 'Wash and cut',
            icon: '/images/priceList/cut.png',
            price: 30,
            description: 'Precision cuts tailored to your face shape and style. Whether you are after a classic trim or a bold transformation, our stylists will deliver a clean look.'
        },
        {
            id: '2',
            category: 'Beard & Grooming',
            icon: '/images/priceList/beard.png',
            price: 10,
            description: 'From sharp lines to full beard sculpting, keep your facial hair looking fresh and well-maintained. Includes trims, shaping, and styling.'
        },
        {
            id: '3',
            category: 'Hair Coloring',
            icon: '/images/priceList/color.png',
            price: 15,
            description: 'Refresh your look with vibrant colors, subtle tones, or full transformations. Our expert colorists offer everything from highlights to custom dye blends.'
        },
        {
            id: '4',
            category: 'Massage & Relaxation',
            icon: '/images/priceList/massage.png',
            price: 20,
            description: 'Unwind with our targeted massage services, designed to ease tension and promote scalp health. A perfect add-on to any appointment for stress relief.'
        },
        {
            id: '5',
            category: 'Facial & Skin Care',
            icon: '/images/priceList/care.png',
            price: 12,
            description: 'Deep-cleansing facials and treatments that purify your skin, and restore natural glow. Ideal for both regular care and special occasions.'
        },
        {
            id: '6',
            category: 'Styling & Blow Dry',
            icon: '/images/priceList/dry.png',
            price: 17,
            description: "Finish your look with volume, shine, and style. Whether it's a casual blowout or a polished event look, we will shape your hair to perfection."
        },
    ]);
    const [hairCuts] = useState<SmallListProps[]>([
        {
            id: '1',
            category: "Men's Haircut",
            price: 25
        },
        {
            id: '2',
            category: "Kids' Haircut",
            price: 15
        },
        {
            id: '3',
            category: "Haircut + Wash + Style",
            price: 35
        },
        {
            id: '4',
            category: "Buzz Cut",
            price: 18
        },
    ]);
    const [beardGrooming] = useState<SmallListProps[]>([
        {
            id: '1',
            category: "Beard Trim",
            price: 12
        },
        {
            id: '2',
            category: "Beard Shaping & Style",
            price: 18
        },
        {
            id: '3',
            category: "Hot Towel Shave",
            price: 20
        },
        {
            id: '4',
            category: "Beard Color",
            price: 25
        },
    ]);
    const [hairColoring] = useState<SmallListProps[]>([
        {
            id: '1',
            category: "Full Hair Color",
            price: 60
        },
        {
            id: '2',
            category: "Highlights ",
            price: 70
        },
        {
            id: '3',
            category: "Root Touch-Up",
            price: 40
        },
        {
            id: '4',
            category: "Bleach & Tone",
            price: 80
        },
    ]);
    const [massageRelaxation] = useState<SmallListProps[]>([
        {
            id: '1',
            category: "Head Massage",
            price: 20
        },
        {
            id: '2',
            category: "Scalp Therapy",
            price: 25
        },
        {
            id: '3',
            category: "Neck & Shoulder Massage",
            price: 30
        },
        {
            id: '4',
            category: "Beard Oil Treatment",
            price: 15
        },
    ]);
    const [skinCare] = useState<SmallListProps[]>([
        {
            id: '1',
            category: "Express Facial",
            price: 35
        },
        {
            id: '2',
            category: "Deep Pore Cleansing",
            price: 50
        },
        {
            id: '3',
            category: "Blackhead Removal",
            price: 20
        },
        {
            id: '4',
            category: "Skin Brightening Mask",
            price: 30
        },
    ]);
    const [blowDry] = useState<SmallListProps[]>([
        {
            id: '1',
            category: "Blow Dry",
            price: 25
        },
        {
            id: '2',
            category: "Hair Straightening",
            price: 40
        },
        {
            id: '3',
            category: "Volume Styling",
            price: 35
        },
        {
            id: '4',
            category: "Event Look / Special Occasion",
            price: 50
        },
    ]);

    useEffect(() => {
    if (typeof window === 'undefined') return;
    setMounted(true);
    const checkSize = () => {
        setLaptop(window.innerWidth >= 1024);
    }
    checkSize();

    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
    }, []);

    if (!mounted) return null;

    return (
        <>
        <Header laptop={laptop} />
        <section className='py-5 px-10'>
            <div className={`${laptop && 'w-[500px] mx-auto'}`}>
                <h1 className='my-4'>Price list</h1>
                <div className='flex flex-col gap-5'>
                    {/* Card */}
                    {prices.map((price, index) =>
                    <div key={price.id} className='rounded-2xl overflow-hidden'>
                        <div style={{ borderRight: `solid 7px ${colors[index % colors.length]}` }} className='flex flex-col gap-2 px-5 py-3 bg-[#0000000f] dark:bg-[#ffffff0a]'>
                            <div style={{ color: colors[index % colors.length] }} className='flex justify-between'>
                                <h3>{price.category}</h3>
                                <h3>${price.price}</h3>
                            </div>
                            <div className='flex justify-between gap-5 items-center'>
                                <div className='w-30'>
                                    <Image
                                        className='opacity-40 filter dark:invert'
                                        src={price.icon}
                                        alt='Image'
                                        width={100}
                                        height={100}
                                        loading='lazy'
                                    />
                                </div>
                                <h6 className='opacity-75'>{price.description}</h6>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
            <div className={`border-t-[0.5px] border-[#00000055] dark:border-[#ffffff55] pt-7 mt-10 pb-5 ${laptop ? 'w-[500px] mx-auto' : ''}`}>
                <p className='mb-5'>More price details</p>
                <div className={`flex flex-col gap-[30px] ${laptop && 'flex-row flex-wrap gap-[50px]'}`}>
                    <div style={ laptop ? { width: 'calc(100%/2 - 50px/2)' } : {}}>
                        <h4 className='text-[#07a] font-bold'>Haircuts</h4>
                        <div className='list-disc flex flex-col gap-2 mt-2'>
                            {hairCuts.map(item =>
                            <div key={item.id} className='opacity-70 flex justify-between border-b-[0.5px] border-dashed border-[#00000077] dark:border-[#ffffff77]'>
                                <div className='flex gap-1'>
                                    <CheckCircleIcon className='w-4 mainColor' />
                                    <p>{item.category}</p>
                                </div>
                                <p className='mainColor'>${item.price}</p>
                            </div>)}
                        </div>
                    </div>
                    <div style={ laptop ? { width: 'calc(100%/2 - 50px/2)' } : {}}>
                        <h4 className='text-[#07a] font-bold'>Beard & Grooming</h4>
                        <div className='list-disc flex flex-col gap-2 mt-2'>
                            {beardGrooming.map(item =>
                            <div key={item.id} className='opacity-70 flex justify-between border-b-[0.5px] border-dashed border-[#00000077] dark:border-[#ffffff77]'>
                                <div className='flex gap-1'>
                                    <CheckCircleIcon className='w-4 mainColor' />
                                    <p>{item.category}</p>
                                </div>
                                <p className='mainColor'>${item.price}</p>
                            </div>)}
                        </div>
                    </div>
                    <div style={ laptop ? { width: 'calc(100%/2 - 50px/2)' } : {}}>
                        <h4 className='text-[#07a] font-bold'>Hair Coloring</h4>
                        <div className='list-disc flex flex-col gap-2 mt-2'>
                            {hairColoring.map(item =>
                            <div key={item.id} className='opacity-70 flex justify-between border-b-[0.5px] border-dashed border-[#00000077] dark:border-[#ffffff77]'>
                                <div className='flex gap-1'>
                                    <CheckCircleIcon className='w-4 mainColor' />
                                    <p>{item.category}</p>
                                </div>
                                <p className='mainColor'>${item.price}</p>
                            </div>)}
                        </div>
                    </div>
                    <div style={ laptop ? { width: 'calc(100%/2 - 50px/2)' } : {}}>
                        <h4 className='text-[#07a] font-bold'>Massage & Relaxation</h4>
                        <div className='list-disc flex flex-col gap-2 mt-2'>
                            {massageRelaxation.map(item =>
                            <div key={item.id} className='opacity-70 flex justify-between border-b-[0.5px] border-dashed border-[#00000077] dark:border-[#ffffff77]'>
                                <div className='flex gap-1'>
                                    <CheckCircleIcon className='w-4 mainColor' />
                                    <p>{item.category}</p>
                                </div>
                                <p className='mainColor'>${item.price}</p>
                            </div>)}
                        </div>
                    </div>
                    <div style={ laptop ? { width: 'calc(100%/2 - 50px/2)' } : {}}>
                        <h4 className='text-[#07a] font-bold'>Facial & Skin Care</h4>
                        <div className='list-disc flex flex-col gap-2 mt-2'>
                            {skinCare.map(item =>
                            <div key={item.id} className='opacity-70 flex justify-between border-b-[0.5px] border-dashed border-[#00000077] dark:border-[#ffffff77]'>
                                <div className='flex gap-1'>
                                    <CheckCircleIcon className='w-4 mainColor' />
                                    <p>{item.category}</p>
                                </div>
                                <p className='mainColor'>${item.price}</p>
                            </div>)}
                        </div>
                    </div>
                    <div style={ laptop ? { width: 'calc(100%/2 - 50px/2)' } : {}}>
                        <h4 className='text-[#07a] font-bold'>Styling & Blow Dry</h4>
                        <div className='list-disc flex flex-col gap-2 mt-2'>
                            {blowDry.map(item =>
                            <div key={item.id} className='opacity-70 flex justify-between border-b-[0.5px] border-dashed border-[#00000077] dark:border-[#ffffff77]'>
                                <div className='flex gap-1'>
                                    <CheckCircleIcon className='w-4 mainColor' />
                                    <p>{item.category}</p>
                                </div>
                                <p className='mainColor'>${item.price}</p>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer laptop={laptop} />
        </>
    )
}

export default PriceList;