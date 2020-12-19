/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// components

import Dropdown from "../Dropdown/Dropdown";
import User from "../Dropdown/User";
import Logo from "../Logos/Logo";

const IndexNavbars = (props) => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const btnCollapsed = navbarOpen ? 
        <svg className={`w-6 h-6 duration-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> :
        <svg className={`w-6 h-6 duration-500 transform rotate-180`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>

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
                className="bg-purple-600 text-white active:bg-purple-500 hover:bg-purple-500 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
            >
                Login
            </Link>
        </li>
    </>);
    const userNav = <>
        <Link
            to="/"
            className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        >
            Home
        </Link>
        <li className="z-50 flex items-center">
            <Dropdown />
        </li>
        <li className="flex items-center">
            <User setAuth={props.setAuth} color={`text-gray-800 hover:text-gray-600`} ringImg={`ring-purple-600`} />
        </li>
    </>
    return (
        <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link
                        to="/"
                        className="text-gray-800 text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                    >
                        <Logo logoColor={`text-purple-600`} />
                    </Link>
                    <button
                        className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        {btnCollapsed}
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
                        (navbarOpen ? " block" : " hidden")
                    }
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
