import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

const Profile = () => {
    return (
        <div className='flex w-full'>
            <div className='w-1/6'></div>
            <div className='w-5/6'>
                <div className='w-[90%] ml-2 '>
                    <div className='mt-5'>
                        <button className='flex items-center font-inter font-normal text-base text-textLight'><IoIosArrowBack className='mr-4' />Back</button>
                    </div>
                </div>
            </div>
        </div>
            )
}

            export default Profile