import React from 'react'

function CompaniesSection() {
    return (
        <div className='bg-white flex flex-col justify-evenly items-center h-screen'>
            <div className='text-black font-bold font-Poppins-Medium'>
                <p className='text-left text-4xl'>
                    Trusted by
                </p>
                <p className='text-left text-4xl'>
                    industry-leading
                </p>
                <p className='text-left text-4xl'>
                    companies
                </p>
            </div>
            <div className='w-3/6 h-1/3 text-white grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-8'>
                <div className='img'>Waves</div>
                <div className='img'>Exchange</div>
                <div className='img'>Neutrino</div>
                <div className='img'>WavesDucks</div>
                <div className='img'>ViresFinance</div>
                <div className='img'>swop.fi</div>
                <div className='img'>Blockmatica</div>
                <div className='img'>MundoCrypto</div>
            </div>
        </div>
    )
}

export default CompaniesSection