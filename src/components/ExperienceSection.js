import React from 'react'

function ExperienceSection() {
    return (
        <div className='flex flex-col items-center justify-around h-screen bg-gradient-to-br from-quaternary via-green-900 to-green-800'>
            <div className='flex flex-col w-1/2 font-bold text-white font-Poppins-Medium'>
                <p className='text-4xl text-left'>
                    Backed by an
                </p>
                <p className='text-4xl text-left'>
                    amazing experience
                </p>
            </div>
            <div className='grid w-2/3 grid-cols-2 gap-4 md:w-1/2 h-1/2'>
                <div className='img'></div>
                <div className='row-span-2 img'></div>
                <div className='img'></div>
                <div className='col-span-2 img'></div>
            </div>
        </div>
    )
}

export default ExperienceSection

