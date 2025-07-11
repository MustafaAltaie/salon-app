import React from 'react';

interface Props {
    timeSlots: string[]
    setThisTime: React.Dispatch<React.SetStateAction<string>>
    thisTime: string
    setStep: React.Dispatch<React.SetStateAction<number>>
}

const TimePick = ({ timeSlots, setThisTime, thisTime, setStep }: Props) => {
    const bookedTimes: string[] = ['12:50', '10:00', '15:20', '14:00'];

    return (
        <div className='lg:w-[500px] lg:mx-auto'>
            <div>
                <h3 className='mainColor mb-3'>Choose a time</h3>
                <p className='opacity-75 mb-5'>Please choose the time you would like to visit us. Just click on the time that suits you.</p>
            </div>
            <div className='flex flex-wrap pb-5'>
                {timeSlots.map(nm =>
                    <button
                        key={nm}
                        className={`${bookedTimes.includes(nm) ? 'pointer-events-none text-[#aaa] dark:text-[#555]' : ''} w-[calc(100%/5)] touch-manipulation h-15 border-[0.5px] border-[#aa7700aa] rounded-[30%] ${nm === thisTime ? 'mainBg text-white' : ''}`}
                        onClick={() => setThisTime(thisTime === nm ? '' : nm)}
                    >{nm}</button>
                )}
            </div>
            <div className='flex gap-5 items-center'>
                <button className='mainBg w-full rounded-lg p-3 text-[#fff]' onClick={() => setStep(2)}>Back</button>
                <h4 className='text-center'>{thisTime || 'Pick a time'}</h4>
                {thisTime && <button className='mainBg w-full rounded-lg p-3 text-[#fff]' onClick={() => setStep(4)}>Next</button>}
            </div>
        </div>
    )
}

export default TimePick;