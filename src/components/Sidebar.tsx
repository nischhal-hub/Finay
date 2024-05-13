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

import sidebarLinks from '../data/index'

const Sidebar = () => {
    return (
        <>
            <div className='h-40 w-1/6 bg-accent rounded-full absolute blur-3xl opacity-20 bottom-10 -left-10'></div>
            <div className='sidebar absolute left-0 w-52 h-auto bg-gradient-to-t from-sidebarBackground2 to-sidebarBackground'>
                <div className='font-urbanist'>
                    <ul className='mx-6 border-b-[1px] border-searchInputBorder'>
                        {sidebarLinks[0].links.map((item, i) => (<li key={i} className='flex text-textSecondary-200 cursor-pointer hover:text-accent transition py-2 first-of-type:pt-6 pb-2 last-of-type:pb-6'><span className='text-2xl'>{item.icon}</span><span className='text-base ml-4'>{item.label}</span></li>))}
                    </ul>
                </div>
                <div className='font-urbanist'>
                    <ul className='m-6 '>
                    {sidebarLinks[1].links.map((item, i) => (<li key={i} className='flex text-textSecondary-200 cursor-pointer hover:text-accent transition first-of-type:pb-2 py-2 last-of-type:pt-2 last-of-type:pb-8'><span className='text-2xl'>{item.icon}</span><span className='text-base ml-4'>{item.label}</span></li>))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar