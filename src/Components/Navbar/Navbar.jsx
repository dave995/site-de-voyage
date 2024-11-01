import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { TbGridDots } from 'react-icons/tb'
import "./Navbar.scss"

const Navbar = () => {
    const [active , setActive] = useState('navBar')
    const showNav = ()=>{
        setActive("navBar activeNavbar")
    }
    const removeNavbar = ()=>{
        setActive("navBar")
    }
  return (
    <section className="navBarSection">
        <header className="header flex">

            <div className='logoDiv'>
                <a href='#' className='logo flex'>
                    <h1>
                        <MdOutlineTravelExplore className='icon' /> Voyage.
                    </h1>
                </a>
            </div>
            <div className={active}>
                <ul className='navLists flex'>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Accueil</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Accueil</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Accueil</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Boutique</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Apropos</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Nouveautés</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Contacter</a>
                    </li>
                    <button className="btn">
                        <a href='#'>Book Now</a>
                    </button>
                </ul>
                <div onClick={removeNavbar}
                className='closeNavbar'>
                    <AiFillCloseCircle className='icon'/>
                </div>
     
            </div>
            <div onClick={showNav}
            className='toggleNavbar'>
                
                    <TbGridDots className='icon'/>
                </div>
        </header>
    </section>
  )
}

export default Navbar