import React from 'react';
import Image from 'next/image';

interface HaircutProps {
    id: string
    classes: string
    image: string
}
interface Props {
    laptop: boolean
}

const womanList: HaircutProps[] = [
    {
        id: '1',
        classes: 'w-full h-full object-cover rounded-br-2xl',
        image: '1.jpg',
    },
    {
        id: '2',
        classes: 'w-full h-full object-cover rounded-bl-2xl',
        image: '2.jpg',
    },
    {
        id: '3',
        classes: 'w-full h-full object-cover rounded-tr-2xl',
        image: '3.jpg',
    },
    {
        id: '4',
        classes: 'w-full h-full object-cover rounded-tl-2xl',
        image: '4.jpg',
    }
];

const Home = ({ laptop }: Props) => {
    return (
        <section>
            <div className={`gradientBg overflow-hidden flex justify-center items-end ${laptop ? 'h-[450px]' : 'h-[600px]'}`}>
                <Image
                    src='/images/empty1.png'
                    className={`brightness-80 object-contain ${laptop ? 'object-center translate-y-6 w-[60%] h-[100%]' : 'w-[90%] h-[85%]'}`}
                    alt='Home image'
                    width={700}
                    height={700}
                    loading='lazy'
                />
            </div>
            <h2 className='text-center p-2 mainColor' style={{ fontFamily: '"Luxurious Script", cursive' }}>Women haircuts</h2>
            <div className={`flex flex-wrap ${laptop && 'w-[500px] mx-auto'}`}>
                {womanList.map(item =>
                <div key={item.id} className='w-[calc(100%/2)] h-[200px] border-1 border-[#EEE8DC] dark:border-[#222]'>
                    <Image
                        className={item.classes}
                        src={`/images/${item.image}`}
                        alt='Home image'
                        width={250}
                        height={250}
                    />
                </div>)}
            </div>
        </section>
    )
}

export default Home;