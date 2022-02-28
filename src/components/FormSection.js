import React from 'react'
import PaperClip from './icons/PaperClip'
import ArrowRight from './icons/ArrowRight'


function FormSection() {
    return (
        <div className='flex flex-col items-center h-screen bg-primary justify-evenly'>
            <div className='flex flex-col justify-around w-2/3 font-bold text-white md:w-1/2 h-4/5'>
                <div className='my-4 font-Poppins-Medium'>
                    <p className='text-4xl text-left'>
                        Let's do
                    </p>
                    <p className='text-4xl text-left'>
                        something big
                    </p>
                </div>
                <div class="block font-Poppins-Regular">
                    <form method='POST' action=''>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="form-group mb-6">
                                <input type="text" class="
                                    block
                                    w-full
                                    px-3
                                    py-3
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-formbg bg-clip-padding
                                    rounded-xl
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id=""
                                    aria-describedby="" placeholder="Name" />
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" class="
                                       block
                                       w-full
                                       px-3
                                       py-3
                                       text-base
                                       font-normal
                                       text-gray-700
                                       bg-formbg bg-clip-padding
                                       rounded-xl
                                       transition
                                       ease-in-out
                                       m-0
                                       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id=""
                                    aria-describedby="" placeholder="Email" />
                            </div>
                        </div>
                        <div class="mb-6">
                            <textarea
                                class="
                                    resize-none 
                                    block
                                    w-full
                                    px-3
                                    py-3
                                    text-base
                                    text-gray-700
                                    bg-formbg bg-clip-padding
                                    rounded-xl
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                                id=""
                                rows="4"
                                placeholder="Message"
                            ></textarea>
                        </div>
                        <div class="mb-6 text-left flex flex-col justify-center items-center md:flex-row md:justify-between">
                            <div className='flex items-center justify-center'>
                                <input type="checkbox"
                                    class="
                                form-check-input
                                appearance-none
                                h-4
                                w-4
                                border
                                border-gray-300
                                rounded-full
                                hover:border-blue-500
                                checked:bg-blue-600
                                mr-2
                                cursor-pointer"
                                    id="" />
                                <label class="form-check-label inline-block text-white" for="">Get a reply on Telegram</label>
                            </div>
                            <div className='flex flex-row justify-around w-1/2 mt-4 md:mt-0 md:w-1/4 md:justify-end'>
                                <button type='submit' className='w-10 h-10 border-2 border-gray-300 border-solid rounded-full hover:border-blue-500 md:mx-4'><PaperClip /></button>
                                <button type='submit' className='w-10 h-10 border-2 border-gray-300 border-solid rounded-full hover:border-blue-500'><ArrowRight /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormSection