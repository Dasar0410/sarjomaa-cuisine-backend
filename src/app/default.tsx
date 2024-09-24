import React from 'react'

const DefaultPage = () => {
    return (
        <div className='w-full p-12 h-[100vh] bg-blue-400'>
            <p className='text-gray-100 font-bold tracking-wider'>
                Next.js
            </p>
            <p className='mt-6 font-light
                          text-sm bg-white 
                          p-6 rounded-md'>
                I am the 
                <span className='text-blue-500 font-bold'>
                    Next.js Default Page
                </span>.
            </p>
        </div>
    )
}
export default DefaultPage