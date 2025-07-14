'use client';
import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { XMarkIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';
import Form from './Form';
import ImageComponent from './Image';
import OverflowMenu from './OverflowMenu';
import { UserProps } from '../../../types/User';
import { useUpdateUserMutation } from '../../../features/logins/loginApi';
import WaitingModal from '../reusableComponents/WaitingModal';
import { useRouter } from 'next/navigation';

const Acount = () => {
    const [laptop, setLaptop] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [editDel, setEditDel] = useState(false);
    const [menu, setMenu] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [myDetails, setMyDetails] = useState<UserProps>({
        id: '',
        username: '',
        email: '',
        mobile: '',
        image: '',
        password: '',
    });
    const [updateUser] = useUpdateUserMutation();
    const [busy, setBusy] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (typeof window === 'undefined') return;
        setMounted(true);
        const checkSize = () => {
            setLaptop(window.innerWidth >= 1024);
        }
        checkSize();

        const stored = localStorage.getItem('myAccount');
        if (!stored) router.push('/login');

        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const stored = localStorage.getItem('myAccount');
        if (!stored) return;
        try {
            const parsed = JSON.parse(stored);
            setMyDetails(parsed);
        } catch (error) {
            console.error('Failed to parse myAccount from localStorage:', error);
        }
        setIsMounted(true);
    }, []);

    const prepareObj = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setMyDetails(prev => ({
            ...prev, [name]: value
        }));
    }

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setBusy(true);
            await updateUser({ id: myDetails.id!, data: myDetails }).unwrap();
            localStorage.setItem('myAccount', JSON.stringify(myDetails));
        } catch (err) {
            console.error(err);
            alert('Error Saving data');
        } finally {
            setBusy(false);
        }
    }

    if (!mounted || !isMounted) return null;

    return (
        <>
        <Header laptop={laptop} />
        {busy && <WaitingModal />}
        <section className='lg:w-[800px] lg:mx-auto lg:border-l-[0.5px] lg:border-r-[0.5px] lg:border-[#00000077] lg:dark:border-[#ffffff77]'>
            <div className='relative flex flex-col items-center p-10 lg:flex-row lg:gap-10'>
                <Cog6ToothIcon className={`${menu ? 'translate-x-[120%]' : 'translate-x-[0px]'} transition-transform duration-500 w-10 p-2 absolute top-3 right-3 cursor-pointer`} onClick={() => setMenu(true)} />
                {editDel &&
                <XMarkIcon className='w-10 p-2 absolute left-10 lg:left-0 cursor-pointer' onClick={() => setEditDel(false)} />}
                <ImageComponent
                    editDel={editDel}
                    setEditDel={setEditDel}
                    myDetails={myDetails}
                    setMyDetails={setMyDetails}
                />
                <Form
                    myDetails={myDetails}
                    setMyDetails={setMyDetails}
                    prepareObj={prepareObj}
                    handleUpdate={handleUpdate}
                    busy={busy}
                />
                <OverflowMenu menu={menu} setMenu={setMenu} />
            </div>
        </section>
        <Footer laptop={laptop} />
        </>
    )
}

export default Acount;