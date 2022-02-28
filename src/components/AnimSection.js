import React from 'react'

function AnimSection() {
    return (
        <div className='relative flex flex-col h-screen bg-secondary font-Poppins-Medium'>
            <div className='absolute top-0 flex w-full bg-center h-1/6 md:h-1/4 bg-printed-primary' />
            <div className='flex flex-col items-center justify-center h-screen'>
                <p className='w-1/2 text-4xl font-bold text-left text-white'>Web 3.0 has taken off, and its full of new possibillities and ideas.</p>
            </div>
            <div className='absolute bottom-0 flex w-full bg-center h-1/6 md:h-1/4 bg-printed-primary' />
        </div>
    )
}

export default AnimSection