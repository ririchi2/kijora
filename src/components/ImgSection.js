import React from 'react'
// import ImgBubble from './ImgBubble'

function ImgSection() {
    return (
        <div className='bg-terciary text-white h-screen relative'>
            {/* <div className='h-32 bg-printed-terciary mb-5' /> */}
            <div className='w-full h-1/6 bg-printed-terciary bg-center absolute top-0' />
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <p className='mt-24 text-gray-500 font-bold'>Services</p>
                <h1 className='text-white text-4xl font-bold w-1/2 my-5'>Here's what we do</h1>
                <div className='grid grid-cols-2 gap-4 w-1/2'>
                    <div className='img col-span-2'>1</div>
                    <div className='img'>2</div>
                    <div className='img'>3</div>
                    <div className='img row-span-2'>4</div>
                    <div className='img'>5</div>
                    <div className='img'>6</div>
                    <div className='img col-span-2'>7</div>
                    <div className='img col-span-2'>8</div>
                </div>
            </div>
        </div>
    )
}

export default ImgSection