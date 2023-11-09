import React from 'react'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { BsInfoCircleFill } from 'react-icons/bs';

const Header = () => {

    const icon_class = 'my-3 h-8 w-8';

    return (
        <div className= 'flex justify-center'>
            <div >
                <h1 style={{fontSize:'3rem', marginBottom:'2rem'}}>To Do List</h1>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Header