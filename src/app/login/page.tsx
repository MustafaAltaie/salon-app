'use client';
import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import { UserProps } from '../../../types/User';
import './login.css';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from '../components/footer/Footer';
import { useCreateAccountMutation } from '../../../features/logins/signApi';

const Login = () => {
    const [login, setLogin] = useState(false);
    const [laptop, setLaptop] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [createAccount] = useCreateAccountMutation();
    const [user, setUser] = useState<UserProps>({
        id: '',
        username: '',
        email: '',
        mobile: '',
        password: '',
        confirmed: '',
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

    const prepareSave = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser(prev => ({
            ...prev, [name]: value
        }));
    }

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (user.password !== user.confirmed) {
            alert('Passwords not matched');
            return;
        }
        try {
            await createAccount(user).unwrap();
        } catch (err) {
            console.error(err);
            alert('Error signing up');
        }
    }

    if (!isMounted) return null;

    return (
        <>
        <Header laptop={laptop} />
        <section className='loginWrapper flex flex-col justify-center items-center p-5 gap-10'>
            {!laptop && <h1 className='mt-5 mainColor'>{login ? 'Sign in' : 'Sign up'}</h1>}
            <div className='lg:w-[40%] w-full'>
                {login && <LoginForm setLogin={setLogin} />}
                {!login && <SignupForm setLogin={setLogin} prepareSave={prepareSave} handleSignup={handleSignup} />}
            </div>
        </section>
        <Footer laptop={laptop} />
        </>
    )
}

export default Login;