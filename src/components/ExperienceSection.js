import React from 'react'

function ExperienceSection() {
    return (
        <div className='bg-quaternary flex flex-col justify-around items-center h-screen'>
            <div className='text-white font-bold'>
                <p className='text-left text-4xl'>
                    Backed by an
                </p>
                <p className='text-left text-4xl'>
                    amazing experience
                </p>
            </div>
            <div className='grid grid-cols-2 gap-4 w-1/2 h-1/2'>
                <div className='img'>1</div>
                <div className='img row-span-2'>2</div>
                <div className='img'>3</div>
                <div className='img col-span-2'>4</div>
            </div>
        </div>
    )
}

export default ExperienceSection