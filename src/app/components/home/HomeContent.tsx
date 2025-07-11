import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HaircutProps {
    id: string
    classes: string
    image: string
}

const womanList: HaircutProps[] = [
    {
        id: '1',
        classes: 'w-full h-full object-cover rounded-br-2xl',
        image: '1.jpg',
    },
    {
        id: '2',
        classes: 'w-full h-full object-cover rounded-bl-2xl',
        image: '2.jpg',
    },
    {
        id: '3',
        classes: 'w-full h-full object-cover rounded-tr-2xl',
        image: '3.jpg',
    },
    {
        id: '4',
        classes: 'w-full h-full object-cover rounded-tl-2xl',
        image: '4.jpg',
    }
];
const mainImages: string[] = ['/images/empty.png', '/images/empty1.png', '/images/empty2.png', '/images/empty3.png'];

const Home = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => (prev + 1) % mainImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section>
            <div className='relative gradientBg overflow-hidden flex justify-center items-end lg:h-[450px] h-[600px]'>
                {mainImages.map((img, index) =>
                <div key={index} className='absolute top-0 left-0 w-full h-full'>
                    <Image
                        className='transition-all duration-2000 w-full h-full object-top lg:object-contain object-cover'
                        style={{ opacity: index === count ? 1 : 0, transform: `translateX(${index === count ? '0%' : '10%'})` }}
                        src={img}
                        alt='Home image'
                        width={700}
                        height={700}
                        loading='lazy'
                    />
                </div>)}
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center lg:w-[400px] w-[90%]'>
                    <motion.h1
                        className='font-bold mb-2 text-white'
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0 }}
                    >Our Work Speaks for Itself</motion.h1>
                    <motion.h4
                        className='text-white font-[200]'
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0 }}
                    >We take pride in every cut, style, and treatment delivering personalized results that leave our clients confident, fresh, and satisfied.</motion.h4>
                </div>
            </div>
            <h2 className='text-center p-2 mainColor' style={{ fontFamily: '"Luxurious Script", cursive' }}>Women haircuts</h2>
            <div className='flex flex-wrap lg:w-[500px] mx-auto'>
                {womanList.map(item =>
                <motion.div
                    key={item.id}
                    className='w-[calc(100%/2)] h-[200px] border-1 border-[#EEE8DC] dark:border-[#222]'
                    initial={{ opacity: 0, scale: 1.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Image
                        className={item.classes}
                        src={`/images/${item.image}`}
                        alt='Home image'
                        width={250}
                        height={250}
                    />
                </motion.div>)}
            </div>
        </section>
    )
}

export default Home;