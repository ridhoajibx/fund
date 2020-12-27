/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// components

import Dropdown from "../Dropdown/Dropdown";
import User from "../Dropdown/User";
import Logo from "../Logos/Logo";

const IndexNavbars = (props) => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    const guestNav = (<>
        <li className="flex items-center">
            <Link
                to="/"
                className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            >
                Home
            </Link>
        </li>
        <li className="flex items-center">
            <Link
                to="/auth"
                className="btn-primary duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black ml-3 mb-3 md:mb-0"
            >
                Login
            </Link>
        </li>
    </>);
    const userNav = <>
        <li className="flex items-center">
            <Link
                to="/"
                className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            >
                Home
            </Link>
        </li>
        
        <Dropdown />

        <User setAuth={props.setAuth} color={`text-gray-800 hover:text-gray-600`} ringImg={`ring-purple-600`} />
    </>
    return (
        <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link
                        to="/"
                        className="text-gray-800 text-lg font-extrabold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                    >
                        <Logo logoColor={`text-purple-600`} />
                    </Link>
                    <button                         
                        className="menu-wrapper block lg:hidden focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <div className={`hamburger-menu ${navbarOpen && 'open'}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
                <div
                    className={`lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none 
                                ${navbarOpen ? 'block' : 'hidden'}`}
                    id="example-navbar-warning"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        {!props.auth ? guestNav : userNav}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default IndexNavbars;
