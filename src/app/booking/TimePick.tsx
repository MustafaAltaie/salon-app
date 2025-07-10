import React from 'react';

interface Props {
    timeSlots: string[]
    setThisDay: React.Dispatch<React.SetStateAction<string>>
    thisDay: string
    setStep: React.Dispatch<React.SetStateAction<number>>
}

const TimePick = ({ timeSlots, setThisDay, thisDay, setStep }: Props) => {
    return (
        <div>
            <div>
                <h3 className='mainColor mb-3'>Choose a time</h3>
                <p className='opacity-75 mb-5'>Please choose the time you would like to visit us. Just click on the time that suits you.</p>
            </div>
            <div className='flex flex-wrap pb-5'>
                {timeSlots.map(nm =>
                    <button
                        key={nm}
                        className={`w-[calc(100%/5)] touch-manipulation h-15 border-[0.5px] border-[#aa770055] ${nm === thisDay ? 'bg-[#a70] text-white' : ''}`}
                        onClick={() => setThisDay(thisDay === nm ? '' : nm)}
                    >{nm}</button>
                )}
            </div>
            <h4 className='text-center mainColor'>{thisDay || 'Pick a time'}</h4>
            <div className='flex gap-5'>
                <button className='mainBg w-full rounded-lg p-3 text-[#fff] mt-5' onClick={() => setStep(2)}>Back</button>
                {thisDay && <button className='mainBg w-full rounded-lg p-3 text-[#fff] mt-5' onClick={() => setStep(4)}>Next</button>}
            </div>
        </div>
    )
}

export default TimePick;