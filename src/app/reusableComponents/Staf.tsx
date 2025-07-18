import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface StafProps {
    id: string
    name: string
    position: string
    image: string
    roll: string
}

interface Props {
    laptop: boolean | undefined
}

const Staf = ({ laptop }: Props) => {
    const pathname = usePathname();
    const [staf] = useState<StafProps[]>([
        {
            id: '1',
            name: 'John Berkdar',
            position: 'Massage Therapist',
            image: '/images/staf/1.jpg',
            roll: "is a certified massage therapist with over 6 years of hands-on experience in massage.",
        },
        {
            id: '2',
            name: 'Nina Forslund',
            position: 'Makeup Artist',
            image: '/images/staf/2.jpg',
            roll: "is a professional makeup artist with over 5 years of experience makeup."
        },
        {
            id: '3',
            name: 'Sara Anderson',
            position: 'Hair dresser',
            image: '/images/staf/3.jpg',
            roll: "is a skilled hairdresser with over 7 years of experience in men's and women's haircuts."
        },
        {
            id: '4',
            name: 'Jessica Wistler',
            position: 'Skin Care Artist',
            image: '/images/staf/4.jpg',
            roll: "is a certified skin care specialist with over 5 years of experience in facial treatments."
        },
    ]);

    return (
        <div className='flex flex-wrap gap-[10px] px-5'>
            {staf.map(worker => pathname === '/' ?
            // without roll
            <div key={worker.id} className='mt-5 flex flex-col items-center' style={{ width: 'calc(100%/4 - 30px/4)' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 1.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Image
                        className='rounded-full w-[80px] h-[80px] object-cover'
                        src={worker.image}
                        alt='Staf'
                        width={100}
                        height={100}
                    />
                </motion.div>
                <motion.h6
                    className='mainColor'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                >{worker.name}</motion.h6>
                <motion.h6
                    className='text-black'
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                >{worker.position}</motion.h6>
            </div> :
            // with roll
            <div key={worker.id} className='flex gap-2 items-center' style={{ width: laptop ? 'calc(100%/4 - 30px/4)' : 'calc(100%/2 - 10px/2)' }}>
                <Image
                    className='w-[70px] h-[70px] object-cover pointer-events-none'
                    style={{ clipPath: 'polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%)' }}
                    src={worker.image}
                    alt='Staf'
                    width={100}
                    height={100}
                />
                <div>
                    <motion.h6
                        className='mainColor'
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >{worker.name}</motion.h6>
                    <motion.h6
                        style={{ fontSize: '10px', opacity: '0.5' }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >{worker.roll}</motion.h6>
                </div>
            </div>)}
        </div>
    )
}

export default Staf;