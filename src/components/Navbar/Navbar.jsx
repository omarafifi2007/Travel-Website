import React, { useState } from 'react'
import './Navbar.css'
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

function Navbar() {
    const [active, setActive] = useState('navBar');

    const ShowNav = () => {
        setActive('navBar activeNavbar')
    }

    const removeNavbar = () => {
        setActive('navBar')
    }

    return (
        <section className='navBarSection'>
            <header className='header flex'>
                <div className='logoDiv'>
                    <div className="logo flex">
                        <h1><MdOutlineTravelExplore className="icon" /> Travel.</h1>
                    </div>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="/" className='navLink'>Home</a>
                        </li>

                        <li className="navItem">
                            <a href="/" className='navLink'>Packeges</a>
                        </li>

                        <li className="navItem">
                            <a href="/" className='navLink'>Shop</a>
                        </li>

                        <li className="navItem">
                            <a href="/" className='navLink'>Pages</a>
                        </li>

                        <li className="navItem">
                            <a href="/" className='navLink'>News</a>
                        </li>

                        <li className="navItem">
                            <a href="/" className='navLink'>Contacts</a>
                        </li>
                        <button className='btn'>
                            <a href="/">Book Now</a>
                        </button>
                    </ul>
                    <div onClick={removeNavbar} className='closeNavbar'>
                        <AiFillCloseCircle className="icon" />
                    </div>
                </div>

                <div onClick={ShowNav} className="toggleNavbar">
                    <TbGridDots className='icon' />
                </div>
            </header>
        </section>
    )
}

export default Navbar;