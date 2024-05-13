import React from 'react';
import { sidebarLinks } from '../data/index';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { cn } from '../utils';

interface CustomNavLinkProps extends NavLinkProps {
    activeClassName?: string;
}

const Sidebar = () => {
    return (
        <>
            <div className='h-40 w-1/6 bg-accent rounded-full absolute blur-3xl opacity-20 bottom-10 -left-10'></div>
            <div className='sidebar absolute left-0 w-52 h-auto bg-gradient-to-t from-sidebarBackground2 to-sidebarBackground'>
                <div className='page-urls font-urbanist'>
                    <ul className='mx-6 border-b-[1px] border-searchInputBorder'>
                        {sidebarLinks[0].links.map((item, i) => (
                            <li key={i} className='text-textSecondary-200 cursor-pointer py-2 first-of-type:pt-6 pb-2 last-of-type:pb-6'>
                                <NavLink className={({ isActive }) =>
                                    [
                                        'flex',
                                        'hover:text-accent',
                                        'transition',
                                        isActive ? "text-accent" : "text-textSecondary-200",
                                    ].join(" ")} to={item.url}>
                                    <span className='text-2xl'>{item.icon}</span>
                                    <span className='text-base ml-4'>{item.label}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='personal-links font-urbanist'>
                    <ul className='m-6'>
                        {sidebarLinks[1].links.map((item, i) => (
                            <li key={i} className=' text-textSecondary-200 cursor-pointer hover:text-accent transition first-of-type:pb-2 py-2 last-of-type:pt-2 last-of-type:pb-8'>
                                <NavLink to={item.url} className={({ isActive }) =>
                                    [
                                        'flex',
                                        'hover:text-accent',
                                        'transition',
                                        isActive ? "text-accent" : "text-textSecondary-200",
                                    ].join(" ")}>
                                    <span className='text-2xl'>{item.icon}</span>
                                    <span className='text-base ml-4'>{item.label}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
