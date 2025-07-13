import React from 'react';

const WaitingModal = () => {
    return (
        <div className='fixed z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h1 className='p-5 border-[1px] bg-[#ffffffaa] dark:bg-[#000000aa]'>Please wait</h1>
        </div>
    )
}

export default WaitingModal;