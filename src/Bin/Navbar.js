import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { TbMinusVertical } from "react-icons/tb";
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../Assets/Logo.png";

import "./Styles/Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="nav-container flex w-full h-[100px]  bg-black text-white sticky top-0 z-50 ">
      {/* Nav menu for pc  */}
      <nav className="hidden md:flex flex-row justify-between items-center p-2 m-0">
        <Link to="/">
          <img className="block" src={Logo} alt="logoerr" />
        </Link>
        <ul className="flex flex-row text-[15px] lg:text-[22px]">
          <li className="nav-li-pc">
            <Link to="/"> HOME </Link>
          </li>
          <li className="nav-li-pc">
            <Link to="/#exercises"> EXERCISES </Link>
          </li>
          <li className="nav-li-pc">
            <Link to="/#services"> SERVICES </Link>
          </li>
          <li className="nav-li-pc">
            <Link to="/#contact"> CONTACT </Link>
          </li>
        </ul>
        <div className="flex flex-row">
          <div className="icon-pc">
            <FaSearch size={20} />
          </div>
          <div className="m-[11px] p-0">
            <TbMinusVertical size={23} />
          </div>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebook className="icon-pc" />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <FaTwitter className="icon-pc" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram className="icon-pc" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <FaYoutube className="icon-pc" />
          </a>
        </div>
      </nav>

      {/* Nav menu for Mobile view */}
      <div className="logodiv">
        <Link to="/">
          <img
            className="m-2 p-1 h-8 absolute top-1 left-2 md:hidden"
            src={Logo}
            alt="logoerr"
          />
        </Link>
      </div>
      <div
        onClick={handleNav}
        className="absolute top-[15px] right-[20px] md:hidden z-10"
      >
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={23} />
        )}
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute left-0 top-0 w-full bg-gray-100/90 text-black px-4 py-10 flex flex-col z-20"
            : "hidden"
        }
      >
        <ul>
          <li className="nav-li-mobile">
            <Link to="/"> HOME </Link>
          </li>
          <li className="nav-li-mobile">
            <Link to="/#exercises"> EXERCISES </Link>
          </li>
          <li className="nav-li-mobile">
            <Link to="/#services"> SERVICES </Link>
          </li>
          <li className="nav-li-mobile">
            <Link to="/#contact"> CONTACT </Link>
          </li>
        </ul>
        <div className="flex flex-row items-center bg-white border-2 hover:border-[#f36100] rounded-xl">
          <form className="w-[85%]" action="">
            <input
              className="m-2 p-2 w-full"
              type="text"
              placeholder="Search here"
            />
          </form>
          <button className="btn rounded-md" type="submit">
            <FaSearch size={20} />
          </button>
        </div>
        <div className="flex flex-row items-center justify-between">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebook className="icon-mb" />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <FaTwitter className="icon-mb" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram className="icon-mb" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <FaYoutube className="icon-mb" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
