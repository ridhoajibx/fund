import React from "react";
import { createPopper } from "@popperjs/core";

import profile from '../../assets/img/team-1-800x800.jpg'

const UserDropdown = (props) => {
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
                className='text-gray-600 flex items-center'
                href="#pablo"
                ref={btnDropdownRef}
                onClick={(e) => {
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                }}
            >
                <span 
                    className={`${props.color} px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold`}
                >
                    Ridhoajibx
                </span>
                <div className="items-center flex">
                    <span className={`w-6 h-6 text-sm ring ${props.ringImg} text-white bg-gray-300 inline-flex items-center justify-center rounded-full`}>
                        <img
                            alt="..."
                            className="w-full rounded-full align-middle border-none shadow-lg"
                            src={profile}
                        />
                    </span>
                </div>
            </a>
            <div
                ref={popoverDropdownRef}
                className={
                    (dropdownPopoverShow ? "block " : "hidden ") +
                    "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                }
            >
                <a
                    href="#pablo"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                    }
                    onClick={(e) => e.preventDefault()}
                >
                    Action
                </a>
                <a
                    href="#pablo"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                    }
                    onClick={(e) => e.preventDefault()}
                >
                    Another action
                </a>
                <a
                    href="#pablo"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                    }
                    onClick={(e) => e.preventDefault()}
                >
                    Something else here
                </a>
                <div className="h-0 my-2 border border-solid border-gray-200" />
                <button
                    className={
                        "text-sm text-left py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 hover:bg-purple-500 hover:text-gray-200 focus:outline-none"
                    }
                    onClick={() => props.setAuth(false)}
                >
                    Logout
                </button>
            </div>
        </>
    );
};

export default UserDropdown;
