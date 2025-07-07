import React from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

interface Props {
    laptop: boolean | undefined
}

const DirectContact = ({ laptop }: Props) => {
    return (
        <div className={`${laptop ? 'w-[40%]' : 'w-full order-2 flex flex-col items-center'}`}>
            <h5 className='mainColorFixed mb-1 font-[200]'>Reach as directly</h5>
            <div className={`${!laptop && 'flex gap-5'}`}>
                <div className='flex gap-2'>
                    <PhoneIcon className='w-4 mainColorFixed' />
                    <h5 className='text-white opacity-70 font-[200]'>Give us a call</h5>
                </div>
                <div className='flex gap-2'>
                    <EnvelopeIcon className='w-4 mainColorFixed' />
                    <h5 className='text-white opacity-70 font-[200]'>Send us an email</h5>
                </div>
            </div>
        </div>
    )
}

export default DirectContact;