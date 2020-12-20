import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Notification from '../Dropdown/Notification';
import User from '../Dropdown/User';

const AppNavbar = (props) => {
    return (
        <>
            {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4">
                <div className="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4">
                    {/* Brand */}
                    <a
                        className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                    >
                        Dashboard
                    </a>
                    {/* Form */}
                    <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                        <div className="relative flex w-full flex-wrap items-stretch">
                            <span className="z-10 h-full leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                                <FaSearch />
                            </span>
                            <input
                                type="text"
                                placeholder="Search here..."
                                className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
                            />
                        </div>
                    </form>
                    {/* User */}
                    <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
                        <Notification />
                        <User setAuth={props.setAuth} position={`-right-40 md:-left-40`} color={`text-gray-100`} />
                    </ul>
                </div>
            </nav>
            {/* End Navbar */}
        </>
    );
}

export default AppNavbar;
