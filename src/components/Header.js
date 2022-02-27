import React from 'react'
import Chevron from './icons/Chevron'

function Header() {
    return (
        <div className='bg-primary text-white h-screen flex justify-center items-center flex-col'>
            <div className='h-1/4 w-1/4 bg-blue-900 bg-opacity-20'>
                <img className='' src='' alt='Logo' />
            </div>
            <div className='w-1/2 flex flex-col justify-center items-center'>
                <p className='text-5xl font-bold my-5'>Making your crypto vision a reality</p>
                <p className='my-5 font-semibold'>We offer tailored marketing services to big enterprises specialized in crypto, blockchain and Web 3.0</p>
                <button className='border rounded-full p-3 font-semibold my-5'>Book with an agent</button>
                <Chevron />
            </div>
        </div>
    )
}

export default Header