'use client';
import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import { UserProps } from '../../../types/User';
import './login.css';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Login = () => {
    const [login, setLogin] = useState(false);
    const [laptop, setLaptop] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [user, setUser] = useState<UserProps>({
        id: '1',
        name: 'Mustafa Altaie',
        email: 'mustafa@gmail.com',
        number: '+460763122455',
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;
        setIsMounted(true);
        const checkWidth = () => {
            setLaptop(window.innerWidth >= 1024);
        }
        checkWidth();

        window.addEventListener('resize', checkWidth);
        return () => window.removeEventListener('resize', checkWidth);
    }, []);

    if (!isMounted) return null;

    return (
        <>
        <Header laptop={laptop} />
        <div className='loginWrapper flex flex-col justify-center items-center p-5 gap-10'>
            {!laptop && <h1 className='mt-5'>{login ? 'Sign in' : 'Sign up'}</h1>}
            <div className='lg:w-[40%] w-full'>
                {login && <LoginForm setLogin={setLogin} laptop={laptop} />}
                {!login && <SignupForm setLogin={setLogin} laptop={laptop} />}
            </div>
        </div>
        </>
    )
}

export default Login;