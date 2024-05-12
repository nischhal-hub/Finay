import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
    return (
        <>
            <div className='flex'>
                <GiHamburgerMenu />
                <div className="icon">
                    <img src='../assets/Icon 2.png' alt="icon" />
                </div>
                <div className="search">
                    <input type="text" placeholder='s'/>
                </div>
            </div>
        </>
    )
}

export default Navbar