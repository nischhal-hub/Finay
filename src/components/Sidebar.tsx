import React from 'react'
import { TiHome } from "react-icons/ti";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { MdOutlineStorefront } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlinePerson } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
// import Links from '../data/index.js'

const Sidebar = () => {
    return (
        <>
        <div className='h-40 w-40 bg-accent rounded-full absolute blur-3xl opacity-20 bottom-10 -left-10'></div>
            <div className='sidebar w-1/6 h-auto bg-gradient-to-t from-sidebarBackground2 to-sidebarBackground'>
                <div className='font-urbanist'>
                    <ul className='mx-6 border-b-[1px] border-searchInputBorder'>
                        <li className='flex text-textSecondary-200 cursor-pointer hover:text-accent transition pt-6 pb-2'><TiHome className='text-2xl' /><span className='text-base ml-4'>Home</span></li>
                        <li className='flex text-textSecondary-200 cursor-pointer hover:text-accent transition py-2'><IoPeopleOutline className='text-2xl' /><span className='text-base ml-4'>Community</span></li>
                        <li className='flex text-textSecondary-200 cursor-pointer hover:text-accent transition py-2'><MdOutlineExplore className='text-2xl' /><span className='text-base ml-4'>Explore</span></li>
                        <li className='flex text-textSecondary-200 cursor-pointer hover:text-accent transition py-2'><MdOutlineStorefront className='text-2xl' /><span className='text-base ml-4'>My store</span></li>
                        <li className='flex text-textSecondary-200 cursor-pointer hover:text-accent transition pt-2 pb-6'><MdOutlineLibraryMusic className='text-2xl' /><span className='text-base ml-4'>Library</span></li>
                    </ul>
                </div>
                <div className='font-urbanist'>
                    <ul className='m-6 '>
                        <li className='flex text-textSecondary-200 cursor-pointer hover:text-accent transition pb-2'><MdOutlineVideoLibrary className='text-2xl' /><span className='text-base ml-4'>Saved</span></li>
                        <li className='flex text-textSecondary-200 cursor-pointer hover:text-accent transition py-2'><FaRegCalendarAlt className='text-2xl' /><span className='text-base ml-4'>Calendar</span></li>
                        <li className='flex text-textSecondary-200 cursor-pointer hover:text-accent transition py-2'>< MdOutlinePerson className='text-2xl' /><span className='text-base ml-4'>Profile</span></li>
                        <li className='flex text-textSecondary-200 cursor-pointer hover:text-accent transition py-2'>< AiOutlineSetting className='text-2xl' /><span className='text-base ml-4'>Settings</span></li>
                        <li className='flex text-textSecondary-200 cursor-pointer hover:text-accent transition py-2'>< FaDiscord className='text-2xl' /><span className='text-base ml-4'>Discord</span></li>
                        <li className='flex text-textSecondary-200 cursor-pointer hover:text-accent transition pt-2 pb-8'>< MdLogout className='text-2xl' /><span className='text-base ml-4'>Log out</span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar