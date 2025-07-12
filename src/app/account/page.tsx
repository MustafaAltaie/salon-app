'use client';
import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { XMarkIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';
import Form from './Form';
import ImageComponent from './Image';
import OverflowMenu from './OverflowMenu';

const Acount = () => {
    const [laptop, setLaptop] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [editDel, setEditDel] = useState(false);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        setMounted(true);
        const checkSize = () => {
            setLaptop(window.innerWidth >= 1024);
        }
        checkSize();

        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, []);

    if (!mounted) return null;

    return (
        <>
        <Header laptop={laptop} />
        <section>
            <div className='relative flex flex-col items-center p-10'>
                <Cog6ToothIcon className={`${menu ? 'translate-x-[120%]' : 'translate-x-[0px]'} transition-transform duration-500 w-10 p-2 absolute top-3 right-3`} onClick={() => setMenu(true)} />
                {editDel && <XMarkIcon className='w-10 p-2 absolute left-10' onClick={() => setEditDel(false)} />}
                <ImageComponent editDel={editDel} setEditDel={setEditDel} />
                <Form />
                <OverflowMenu menu={menu} setMenu={setMenu} />
            </div>
        </section>
        <Footer laptop={laptop} />
        </>
    )
}

export default Acount;