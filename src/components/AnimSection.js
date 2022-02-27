import React from 'react'

function AnimSection() {
    return (
        <div className='bg-secondary h-screen flex flex-col relative font-Poppins-Medium'>
            <div className='w-full h-1/4 bg-printed-primary bg-center absolute top-0' />
            <div className='h-screen flex flex-col justify-center items-center'>
                <p className='text-white text-left text-4xl font-bold w-1/2'>Web 3.0 has taken off, and its full of new possibillities and ideas.</p>
            </div>
            <div className='w-full h-1/4 bg-printed-primary bg-center absolute bottom-0' />
        </div>
    )
}

export default AnimSection