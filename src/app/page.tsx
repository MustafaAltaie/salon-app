'use client';
import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import HomeContent from './components/home/HomeContent';
import Section2 from './components/section2/Section2';
import Deals from './components/deals/Deals';

const Home = () => {
  const [laptop, setLaptop] = useState(false);
  const [mounted, setMounted] = useState(false);

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
    <main>
      <HomeContent laptop={laptop} />
      <Section2 />
      <Deals />
    </main>
    </>
  )
}

export default Home;