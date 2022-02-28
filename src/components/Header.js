import React from 'react'
import Chevron from './icons/Chevron'
import Qbao from './icons/Qbao'

function Header() {
    return (
        <div className='flex flex-col items-center justify-center h-screen text-white bg-gradient-to-br from-terciary via-slate-800 to-cyan-900'>
            <div className='w-1/4 h-1/4 bg-opacity-20'>
                <Qbao />
            </div>
            <div className='flex flex-col items-center justify-center w-1/2 text-center'>
                <p className='my-5 text-4xl font-bold font-Poppins-Medium'>Making your crypto vision a reality</p>
                <p className='my-5 font-semibold font-Poppins-Regular'>We offer tailored marketing services to big enterprises specialized in crypto, blockchain and Web 3.0</p>
                <button className='p-3 my-5 font-semibold border rounded-full font-Poppins-Regular'>Book with an agent</button>
                <Chevron />
            </div>
        </div>
    )
}

export default Header