import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { SmallListProps } from '../../../types/SmallList';

interface Props {
    item: SmallListProps
}

const Haircuts = ({ item }: Props) => {
    return (
        <motion.div
            className='flex justify-between border-b-[0.5px] border-dashed border-[#00000077] dark:border-[#ffffff77]'
            initial={{ opacity: 0, scale: 1.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className='flex gap-1'>
                <CheckCircleIcon className='w-4 mainColor' />
                <p>{item.category}</p>
            </div>
            <p className='mainColor'>${item.price}</p>
        </motion.div>
    )
}

export default Haircuts;