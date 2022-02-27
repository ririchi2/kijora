import React from 'react'
import PaperClip from './icons/PaperClip'
import ArrowRight from './icons/ArrowRight'


function FormSection() {
    return (
        <div className='bg-primary flex flex-col justify-evenly items-center h-screen'>
            <div className='text-white font-bold w-1/2 h-4/5 flex flex-col justify-around'>
                <div className='font-Poppins-Medium'>
                    <p className='text-left text-4xl'>
                        Let's do
                    </p>
                    <p className='text-left text-4xl'>
                        something big
                    </p>
                </div>
                <div class="block font-Poppins-Regular">
                    <form>
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
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" placeholder="Name" />
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
                                       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                                    aria-describedby="emailHelp124" placeholder="Email" />
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
                                id="exampleFormControlTextarea13"
                                rows="3"
                                placeholder="Message"
                            ></textarea>
                        </div>
                        <div class="mb-6 text-left flex justify-between">
                            <div className='flex justify-center items-center'>
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
                                    id="exampleCheck87" />
                                <label class="form-check-label inline-block text-white" for="exampleCheck87">Get a reply on Telegram</label>

                            </div>
                            <div className='flex flex-row justify-end w-1/5'>
                                <button type='submit' className='w-10 h-10 border-2 border-solid border-gray-300 rounded-full hover:border-blue-500'><PaperClip /></button>
                                <button type='submit' className='w-10 h-10 border-2 border-solid border-gray-300 rounded-full hover:border-blue-500 ml-4'><ArrowRight /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormSection