import React from 'react'
// import ImgBubble from './ImgBubble'

function ImgSection() {
    return (
        <div className='relative h-screen text-white bg-terciary'>
            {/* <div className='h-32 mb-5 bg-printed-terciary' /> */}
            <div className='absolute top-0 w-full bg-center h-1/6 bg-printed-terciary' />
            <div className='flex flex-col items-center justify-center w-full h-full sm:bg-primary'>
                <p className='text-gray-500 mt-28 font-Poppins-Regular'>Services</p>
                <h1 className='w-1/2 my-5 text-4xl font-bold text-center text-white font-Poppins-Medium'>Here's what we do</h1>
                <div className='grid w-1/2 grid-cols-2 gap-4 h-1/2'>
                    <div className='col-span-2 img'>1</div>
                    <div className='img'>2</div>
                    <div className='img'>3</div>
                    <div className='row-span-2 img'>4</div>
                    <div className='img'>5</div>
                    <div className='img'>6</div>
                    <div className='col-span-2 img'>7</div>
                    <div className='col-span-2 img'>8</div>
                </div>
            </div>
        </div>
    )
}

export default ImgSection