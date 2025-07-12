import React from 'react';
import { TrashIcon, XMarkIcon, BackspaceIcon, KeyIcon } from '@heroicons/react/24/solid';

interface Props {
    menu: boolean
    setMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const OverflowMenu = ({ menu, setMenu }: Props) => {
    return (
        <div className={`absolute transition-transform duration-500 ${menu ? 'translate-x-0' : 'translate-x-full'} rounded-l-4xl bg-[#ffffffcc] dark:bg-[#444444cc] top-2 right-0 p-3`}>
            <p className='p-5 lg:p-2 flex gap-2 items-end'>Change password <KeyIcon className='w-5 mainColor' /></p>
            <p className='p-5 lg:p-2 flex gap-2 items-end'>Erase saved data <BackspaceIcon className='w-5 mainColor' /></p>
            <p className='p-5 lg:p-2 flex gap-2 items-end'>Remove account<TrashIcon className='w-5 mainColor' /></p>
            <p className='p-5 lg:p-2 flex gap-2 items-end' onClick={() => setMenu(false)}>Close menu <XMarkIcon className='w-5 mainColor' /></p>
        </div>
    )
}

export default OverflowMenu;