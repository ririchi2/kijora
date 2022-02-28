import React from 'react'

function ExperienceSection() {
    return (
        <div className='flex flex-col items-center justify-around h-screen bg-quaternary'>
            <div className='flex flex-col w-1/2 font-bold text-white font-Poppins-Medium'>
                <p className='text-4xl text-left'>
                    Backed by an
                </p>
                <p className='text-4xl text-left'>
                    amazing experience
                </p>
            </div>
            <div className='grid w-1/2 grid-cols-2 gap-4 h-1/2'>
                <div className='img'>1</div>
                <div className='row-span-2 img'>2</div>
                <div className='img'>3</div>
                <div className='col-span-2 img'>4</div>
            </div>
        </div>
    )
}

export default ExperienceSection

