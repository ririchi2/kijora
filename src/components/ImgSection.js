import React from 'react'
// import ImgBubble from './ImgBubble'

function ImgSection() {
    return (
        <div className='relative h-screen text-white bg-terciary'>
            {/* <div className='h-32 mb-5 bg-printed-terciary' /> */}
            <div className='absolute top-0 w-full bg-center h-1/6 bg-printed-terciary' />
            <div className='flex flex-col items-center justify-center w-full pt-44 md:pt-52 sm:bg-primary'>
                <p className='text-gray-500 font-Poppins-Regular'>Services</p>
                <h1 className='w-1/2 my-5 text-3xl font-bold text-center text-white md:text-4xl font-Poppins-Medium'>Here's what we do</h1>
                <div className='grid w-2/3 grid-cols-2 gap-4 md:w-1/2 h-1/2'>
                    <div className='col-span-2 img'></div>
                    <div className='img'></div>
                    <div className='img'></div>
                    <div className='row-span-2 img'></div>
                    <div className='img'></div>
                    <div className='img'></div>
                    <div className='col-span-2 img'></div>
                    <div className='col-span-2 img'></div>
                </div>
            </div>
        </div>
    )
}

export default ImgSection