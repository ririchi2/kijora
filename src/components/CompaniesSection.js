import React from 'react'

function CompaniesSection() {
    return (
        <div className='flex flex-col items-center h-screen bg-white justify-evenly'>
            <div className='font-bold text-black font-Poppins-Medium'>
                <p className='text-4xl text-left'>
                    Trusted by
                </p>
                <p className='text-4xl text-left'>
                    industry-leading
                </p>
                <p className='text-4xl text-left'>
                    companies
                </p>
            </div>
            <div className='grid w-3/6 grid-cols-4 grid-rows-2 text-white h-1/3 gap-x-4 gap-y-8'>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
                <div className='img'></div>
            </div>
        </div>
    )
}

export default CompaniesSection