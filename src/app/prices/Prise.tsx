import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PriceProps } from '../../../types/Price';

interface Props {
    price: PriceProps
    index: number
}

const Prise = ({ price, index }: Props) => {
    const colors: string[] = ['#a70', '#07a'];

    return (
        <motion.div
            className='rounded-2xl overflow-hidden'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
        >
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
        </motion.div>
    )
}

export default Prise;