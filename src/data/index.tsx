import React from 'react'
import { TiHome } from "react-icons/ti";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { MdOutlineStorefront } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlinePerson } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { FaLinkedin, FaTelegram,FaDiscord,FaInstagram,FaTwitter } from "react-icons/fa";


type SidebarLink = {
    label: string;
    icon: JSX.Element; // Assuming these are React icons
    url: string;
};

type SidebarSection = {
    page: string;
    links: SidebarLink[];
};

type SidebarLinks = SidebarSection[];


export const sidebarLinks: SidebarLinks = [
    {
        page:'page-urls',
        links : [
            {label:"Home",icon:<TiHome />,url:'/' },
            {label:"Community",icon:<IoPeopleOutline/>,url:'/' },
            {label:"Explore",icon:<MdOutlineExplore/>,url:'/explore' },
            {label:"My store",icon:<MdOutlineStorefront/>,url:'/' },
            {label:"Library",icon:<MdOutlineLibraryMusic/>,url:'/' },
        ]
    },
    {
        page:'personal',
        links : [
            {label:"Saved",icon:<MdOutlineVideoLibrary/>,url:'/' },
            {label:"Calendar",icon:<FaRegCalendarAlt/>,url:'/' },
            {label:"Profile",icon:<MdOutlinePerson/>,url:'/' },
            {label:"Settings",icon:<AiOutlineSetting/>,url:'/' },
            {label:"Discord",icon:<FaDiscord/>,url:'/' },
            {label:"Log out",icon:<MdLogout/>,url:'/' },
        ]
    }
]

export const footerURLs = [
    {label:'Home', url:'/'},
    {label:'Community', url:'/'},
    {label:'Explore', url:'/'},
    {label:'Contact', url:'/'},
    {label:'Terms', url:'/'},
    {label:'Privacy', url:'/'},
]

export const socialURLs = [
    {icon:<FaLinkedin/>, url:'/'},
    {icon:<FaTelegram/>, url:'/'},
    {icon:<FaDiscord/>, url:'/'},
    {icon:<FaInstagram/>, url:'/'},
    {icon:<FaTwitter/>, url:'/'},
]