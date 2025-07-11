import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
    heroImages: string[]
    count: number
}

const SlideShow = ({ heroImages, count }: Props) => {
    return (
        <div className='relative lg:w-[500px] lg:mx-auto'>
            <div className='relative lg:h-[400px] h-[500px]'>
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
                <motion.h1
                    className='font-bold mb-2 text-white'
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                >Our Work Speaks for Itself</motion.h1>
                <motion.p
                    className='text-[#b82]'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                >We take pride in every cut, style, and treatment delivering personalized results that leave our clients confident, fresh, and satisfied.</motion.p>
            </div>
        </div>
    )
}

export default SlideShow;