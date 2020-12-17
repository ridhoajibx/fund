import React from "react";
import { createPopper } from "@popperjs/core";

const NotificationDropdown = () => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        console.log("hey");
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
                className="text-gray-100 block py-1 px-3"
                href="#pablo"
                ref={btnDropdownRef}
                onClick={(e) => {
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                }}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            </a>
            <div
                ref={popoverDropdownRef}
                className={
                    (dropdownPopoverShow ? "block " : "hidden ") +
                    "bg-white text-base z-50 py-2 list-none text-left rounded shadow-lg mt-1 min-w-48"
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
                <a
                    href="#pablo"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                    }
                    onClick={(e) => e.preventDefault()}
                >
                    Seprated link
                </a>
            </div>
        </>
    );
};

export default NotificationDropdown;
