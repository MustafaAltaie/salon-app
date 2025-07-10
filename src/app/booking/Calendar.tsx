import React from 'react';
import { DayPicker, getDefaultClassNames } from "react-day-picker";
const defaultClassNames = getDefaultClassNames();

interface Props {
    selected: Date | undefined
    setSelected: React.Dispatch<React.SetStateAction<Date | undefined>>
    setStep: React.Dispatch<React.SetStateAction<number>>
}

const Calendar = ({ selected, setSelected, setStep }: Props) => {
    return (
        <div>
            <div>
                <h3 className='mainColor mb-3'>Choose a day</h3>
                <p className='opacity-75 mb-5'>Please choose the day you would like to visit us. You can navigate between months to find the best time for you.</p>
            </div>
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                disabled={{ before: new Date() }}
                classNames={{
                    today: 'text-[#a70] font-bold',
                    selected: `mainBg text-white`, // Highlight the selected day
                    root: `${defaultClassNames.root} w-full flex flex-col items-center text-center`,
                    chevron: `${defaultClassNames.chevron} fill-[#a70]`, // Change the color of the chevron
                    weekdays: 'mainColor',
                    day: 'p-[16px] border-[0.5px] border-[#aa770088] text-center',
                    disabled: 'opacity-30 cursor-not-allowed',
                    caption_label: 'opacity-70 text-xl',
                }}
            />
            <p className='mt-5 text-center'>{selected ? selected.toDateString() : 'Pick the date'}</p>
            <div>
                <div className='flex gap-5'>
                    <button className='mainBg w-full rounded-lg p-3 text-[#fff] mt-5' onClick={() => setStep(1)}>Back</button>
                    {selected && <button className='mainBg w-full rounded-lg p-3 text-[#fff] mt-5' onClick={() => setStep(3)}>Next</button>}
                </div>
            </div>
        </div>
    )
}

export default Calendar;