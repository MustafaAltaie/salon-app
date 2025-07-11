import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
    heroImages: string[]
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const SlideshowList = ({ heroImages, count, setCount }: Props) => {
    return (
        <div className='flex flex-wrap gap-[10px] lg:w-[500px] lg:mx-auto lg:py-[10px] p-[10px] border-b-[0.5px]'>
            {heroImages.map((image, index) =>
            <motion.div
                key={index}
                className='h-[80px] cursor-pointer'
                style={{ width: 'calc(100%/4 - 30px/4)', border: index === count ? 'solid 5px #08a' : 'solid 5px #a70' }}
                onClick={() => setCount(index)}
                initial={{ opacity: 0, scale: 1.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <Image
                    className='w-full h-full object-cover pointer-events-none'
                    src={image}
                    alt='image'
                    width={200}
                    height={200}
                    loading='lazy'
                />
            </motion.div>
            )}
        </div>
    )
}

export default SlideshowList;