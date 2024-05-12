import React from 'react'
import icon from '../assets/Icon 2.png'
import profile from '../assets/Rectangle 17.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { BiMessageRounded } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";


const Navbar = () => {
    return (
        <>
            <div className='flex h-20 justify-between border-b-[1px] border-borderColor w-full'>
                <div className='flex items-center'>
                    <GiHamburgerMenu className='text-textLight m-6 w-9 h-6 cursor-pointer' />
                    <div className="icon my-4 mx-2">
                        <img src={icon} alt="icon" />
                    </div>
                    <div className="search relative font-workSans ml-24">
                        <CiSearch className='absolute top-3 text-2xl left-2 text-textSecondary-200' />
                        <input type="text" placeholder=' Search music, artist, events...' className='w-96 h-12 bg-searchInput font-light text-sm py-2 pl-8 rounded border-[1px] border-searchInputBorder text-textSecondary-200' />
                    </div>
                </div>
                <div className="profile-controls flex items-center mr-24 w-80">
                    <BiMessageRounded className='text-3xl text-textLight m-4 cursor-pointer'/>
                    <MdNotificationsNone  className='text-3xl text-textLight m-4 cursor-pointer'/>
                    <div className="profile-pic w-10 h-10 mx-4 ml-4 mr-2 pt-1">
                      <img src={profile} alt="profile picture" className='object-cover' />
                    </div>
                    <p className='font-inter font-semibold text-textLight'>Hi, Elisha</p>
                </div>
            </div>
        </>
    )
}

export default Navbar