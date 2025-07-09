import React from 'react';
import { motion } from 'framer-motion';
import { AboutList } from '../../../types/AboutList';

interface Props {
    aboutList: AboutList[]
    laptop: boolean
}

const Mission = ({ aboutList, laptop }: Props) => {
    return (
        <div className={`px-15 overflow-y-scroll scrollbar-hide ${laptop ? 'max-h-60' : 'max-h-70'}`}>
            {aboutList.map(item =>
            <div key={item.id} className='flex items-center border-l-[0.5px] border-[#a70] py-5'>
                <motion.div
                    className='text-[#a70] bg-[#EEE8DC] dark:bg-[#222] border-[0.7px] rounded-[35%] max-w-[30px] min-w-[30px] max-h-[30px] min-h-[30px] centered -translate-x-[50%]'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: laptop ? true : false, amount: 0 }}
                >
                    <i className={item.icon}></i>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: laptop ? true : false, amount: 0.3 }}
                >
                    <p className='text-[#a70]'>{item.title}</p>
                    <h6 className='opacity-70'>{item.text}</h6>
                </motion.div>
            </div>)}
        </div>
    )
}

export default Mission;