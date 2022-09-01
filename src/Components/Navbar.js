import React, {useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Logo from '../Assets/Logo.png'
import './Styles/Navbar.css'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <>
      <div className="navcontainerpc hidden lg:flex flex-row items-center">
        <Link to='/'><img src={Logo} alt="logoerror" /></Link>
        <ul className='flex flex-row absolute right-5'>
          <li className='navlipc'><Link to='/'>HOME</Link></li>
          <li className='navlipc'><Link to='/'>ABOUT</Link></li>
          <li className='navlipc'><Link to='/'>COURSES</Link></li>
          <li className='navlipc'><Link to='/'>OUR TEAM</Link></li>
          <li className='navlipc'><Link to='/'>GALLERY</Link></li>
          <li className='navlipc'><Link to='/'>PAGES</Link></li>
          <li className='navlipc'><Link to='/'>CONTACT</Link></li>
        </ul>
      </div>
{/* Mobile View */}
      <div className="navcontainermb flex flex-row items-center lg:hidden">
        <Link to='/'><img className='h-7 md:h-9' src={Logo} alt="logoerror" /></Link>
        <div onClick={handleNav} className='ham-div'>
          {nav ? <ion-icon name="close-outline"></ion-icon>: <ion-icon name="menu-outline"></ion-icon>}
        </div>
        <div onClick={handleNav} className={nav? 'mbnavwindow absolute top-0 left-0 py-16 w-full border-4' : "hidden" } >
          <ul className='flex flex-col justify-center items-center text-white'>
            <li className='navlimb'><Link to='/'>HOME</Link></li>
            <li className='navlimb'><Link to='/'>ABOUT</Link></li>
            <li className='navlimb'><Link to='/'>COURSES</Link></li>
            <li className='navlimb'><Link to='/'>OUR TEAM</Link></li>
            <li className='navlimb'><Link to='/'>GALLERY</Link></li>
            <li className='navlimb'><Link to='/'>PAGES</Link></li>
            <li className='navlimb'><Link to='/'>CONTACT</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar