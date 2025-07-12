import React from 'react';
import { PencilIcon, TrashIcon, UserIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

interface Props {
    editDel: boolean
    setEditDel: React.Dispatch<React.SetStateAction<boolean>>
}

const ImageComponent = ({ editDel, setEditDel }: Props) => {
    return (
        <div className='relative overflow-hidden rounded-full'>
            {editDel &&
            <div className='absolute flex gap-[0.7px] w-full h-full'>
                <div className='w-1/2 bg-[#ffffff99] centered'>
                    <PencilIcon className='w-7 text-black' />
                </div>
                <div className='w-1/2 bg-[#ffffff99] centered'>
                    <TrashIcon className='w-7 text-black' />
                </div>
            </div>}
            <div className='w-[300px]' onClick={() => setEditDel(true)}>
                <Image
                    src={'/images/1.jpg'}
                    alt='Image'
                    width={300}
                    height={300}
                    loading='lazy'
                    className='w-full h-full object-cover'
                />
            </div>
            {/* <div className='centered border-[1px] rounded-full p-5'>
                <UserIcon className='w-[150px]' />
            </div> */}
        </div>
    )
}

export default ImageComponent;