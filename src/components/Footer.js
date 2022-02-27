import React from 'react'

function Footer() {
    return (
        <div className='bg-terciary h-full w-full flex flex-col justify-evenly items-center'>
            <div className='text-white font-bold w-1/2 h-4/5 flex flex-col justify-around'>
                <div className='font-Poppins-Regular my-8'>
                    <p className='text-left text-xl'>
                        Contact Us
                    </p>
                </div>
                <div className='font-Poppins-Regular my-8 w-2/3'>
                    <ul className='grid grid-cols-2 w-full text-left text-gray-400'>
                        <li><a href='/'>Email</a></li>
                        <li><a href='/'>Linkedin</a></li>
                        <li><a href='/'>Twitter</a></li>
                        <li><a href='/'>Youtube</a></li>
                    </ul>
                </div>
                <div className='my-10'>
                    <p className='text-left'>
                        © Kijora 2022
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer