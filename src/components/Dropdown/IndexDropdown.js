import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const IndexDropdown = () => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start",
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    return (
        <>
            <a
                className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="#pablo"
                ref={btnDropdownRef}
                onClick={(e) => {
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                }}
            >
                Pages
                <svg 
                    className={`w-5 h-5 ${!dropdownPopoverShow && 'transform rotate-90'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
            </a>
            <div
                ref={popoverDropdownRef}
                className={
                    (dropdownPopoverShow ? "block " : "hidden ") +
                    "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg w-48"
                }
            >
                <span
                    className={
                        "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
                    }
                >
                    Admin Layout
                </span>
                <Link
                    to="/dashboard"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                >
                    Dashboard
                </Link>
                <Link
                    to="/settings"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                >
                    Settings
                </Link>
                <Link
                    to="/tables"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                >
                    Tables
                </Link>
                <Link
                    to="/maps"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                >
                    Maps
                </Link>
                <div className="h-0 mx-4 my-2 border border-solid border-gray-200" />
                <span
                    className={
                        "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
                    }
                >
                    Auth Layout
                </span>
                <Link
                    to="/auth/login"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                >
                    Login
                </Link>
                <Link
                    to="/auth/register"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                >
                    Register
                </Link>
                <div className="h-0 mx-4 my-2 border border-solid border-gray-200" />
                <span
                    className={
                        "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
                    }
                >
                    No Layout
                </span>
                <Link
                    to="/landing"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                >
                    Lading
                </Link>
                <Link
                    to="/profile"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                >
                    Profile
                </Link>
            </div>
        </>
    );
};

export default IndexDropdown;
