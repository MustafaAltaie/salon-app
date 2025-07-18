import React from 'react';
import { TreatmentProps } from '../../../types/Treatments';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props {
    treatments: TreatmentProps[]
    handleTreatments: (t: string) => void
    selectedT: string[]
    setStep: React.Dispatch<React.SetStateAction<number>>
}

const Treatments = ({ treatments, handleTreatments, selectedT, setStep }: Props) => {
    return (
        <div className='lg:w-[500px] lg:mx-auto'>
            <div>
                <h3 className='mainColor mb-3'>Choose a treatment</h3>
                <p className='opacity-75'>Start by selecting the service you are interested in — haircut, beard trim, massage, facial, or any other treatment.</p>
            </div>
            <div className='flex flex-wrap justify-stretch py-5'>
                {treatments.map(treatment =>
                <motion.div
                    key={treatment.icon}
                    className={`touch-manipulation cursor-pointer w-[calc(100%/3)] h-25 flex flex-col items-center justify-center text-center ${selectedT.includes(treatment.title) ? 'border-[#EEE8DC77] border-[0.5px] dark:border-[1px] dark:border-dashed dark:border-[#070] bg-[#000]' : 'border-[0.5px] border-[#aa770077]'}`}
                    onClick={() => handleTreatments(treatment.title)}
                    initial={{ opacity: 0, scale: 1.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Image
                        src={`/icons/${treatment.icon}.svg`}
                        alt='Beard'
                        className='w-10 h-10'
                        width={30}
                        height={30}
                        loading='lazy'
                    />
                    <p className='mainColor'>{treatment.title}</p>
                </motion.div>)}
            </div>
            {selectedT.length !== 0 &&
                <div>
                    <h3 className='mainColor'>Selected treatments - {selectedT.length}</h3>
                    <ul className='list-disc ml-3'>
                        {selectedT.map(item =>
                        <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >{item}</motion.li>)}
                    </ul>
                    {selectedT.length !== 0 &&
                    <button className='mainBg w-full rounded-lg p-3 text-[#fff] mt-5' onClick={() => setStep(2)}>Next</button>}
                </div>
            }
        </div>
    )
}

export default Treatments;