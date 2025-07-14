'use client';
import React, { useEffect, useRef, useState } from 'react';
import { TrashIcon, XMarkIcon, BackspaceIcon, KeyIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';
import { useChangePasswordMutation } from '../../../features/logins/loginApi';
import WaitingModal from '../reusableComponents/WaitingModal';
import { UserProps } from '../../../types/User';
import { useRouter } from 'next/navigation';

interface Props {
    menu: boolean
    setMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const OverflowMenu = ({ menu, setMenu }: Props) => {
    const [correct, setCorrect] = useState(false);
    const [storedPass, setStoredPass] = useState<string | undefined>('');
    const [change, setChange] = useState(false);
    const [oldText, setOldText] = useState<string>('');
    const [newText, setNewText] = useState<string>('');
    const [currentId, setCurrentId] = useState<string | undefined>('');
    const oldRef = useRef<HTMLInputElement | null>(null);
    const newRef = useRef<HTMLInputElement | null>(null);
    const [changePassword] = useChangePasswordMutation();
    const [busy, setBusy] = useState(false);
    const [storedObj, setStoredObj] = useState<UserProps>({
        id: '',
        username: '',
        email: '',
        mobile: '',
        image: '',
        password: '',
    });
    const router = useRouter();

    useEffect(() => {
        const stored = localStorage.getItem('myAccount');
        const pass = stored ? JSON.parse(stored) : undefined;
        setStoredPass(pass.password);
        setCurrentId(pass.id);
        setStoredObj(stored ? JSON.parse(stored) : undefined);
    }, []);

    const checkPassword = () => {
        if (oldText !== storedPass) {
            alert('Wrong password');
            setTimeout(() => oldRef.current?.focus(), 100);
            return;
        }
        setCorrect(true);
        setTimeout(() => newRef.current?.focus(), 100);
    }

    const handleChange = async () => {
        try {
            const updated = { ...storedObj, password: newText };
            localStorage.setItem('myAccount', JSON.stringify(updated));
            setChange(false);
            setCorrect(false);
            setBusy(true);
            setOldText('');
            const result = await changePassword({ id: currentId!, newPassword: newText }).unwrap();
            setMenu(false);
            setNewText('');
            alert(result.message);
        } catch (err) {
            console.error(err);
            alert('Error changing password');
        } finally {
            setBusy(false);
        }
    }

    const handleSignout = () => {
        try {
            localStorage.removeItem('myAccount');
            router.push('/login');
        } catch (err) {
            console.error(err);
            alert('Error signing out');
        }
    }

    return (
        <>
        {busy && <WaitingModal />}
        <div className={`absolute transition-transform duration-500 ${menu ? 'translate-x-0' : 'translate-x-full'} rounded-l-4xl bg-[#ffffffcc] dark:bg-[#444444cc] top-2 right-0 p-3`}>
            <p className='px-4 w-fit ml-auto cursor-pointer' onClick={() => setMenu(false)}><XMarkIcon className='w-5 cursor-pointer' /></p>
            <p className='p-5 lg:p-2 flex gap-2 items-end justify-between cursor-pointer' onClick={() => {setChange(!change); setTimeout(() => oldRef.current?.focus(), 100)}}>Change password <KeyIcon className='w-5' /></p>
            <div className='flex flex-col gap-2'>
                {!correct && change &&
                <input
                    type="password"
                    ref={oldRef}
                    placeholder='Old password'
                    className='text-center'
                    value={oldText || ''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOldText(e.target.value)}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (e.key === 'Enter') checkPassword();
                    }}
                />}
                {correct &&
                <input
                    type="password"
                    ref={newRef}
                    placeholder='New password'
                    className='text-center'
                    value={newText}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewText(e.target.value)}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (e.key === 'Enter') handleChange();
                    }}
                />}
                {oldText && !correct &&
                <button className='mainBg rounded-lg p-2 text-white' onClick={checkPassword}>Check password</button>}
                {newText &&
                <button className='mainBg rounded-lg p-2 text-white' onClick={handleChange}>Update password</button>}
            </div>
            <p className='p-5 lg:p-2 flex gap-2 items-end justify-between cursor-pointer'>Erase saved data <BackspaceIcon className='w-5' /></p>
            <p className='p-5 lg:p-2 flex gap-2 items-end justify-between cursor-pointer'>Remove account<TrashIcon className='w-5' /></p>
            <p className='p-5 lg:p-2 flex gap-2 items-end justify-between cursor-pointer' onClick={handleSignout}>Signout<ArrowRightStartOnRectangleIcon className='w-5' /></p>
        </div>
        </>
    )
}

export default OverflowMenu;