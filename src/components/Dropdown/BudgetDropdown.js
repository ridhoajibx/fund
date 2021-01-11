import React from "react";
import { createPopper } from "@popperjs/core";

const BudgetDropdown = (props) => {
    const { color, id, item, modalHandler } = props;
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "left-start",
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    return (
        <>
            <a
                className={`${color === "light" ? "text-gray-600 " : "text-gray-200 "}py-1 px-3`}
                href="#pablo"
                ref={btnDropdownRef}
                onClick={(e) => {
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                }}
            >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
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
                        "text-sm hover:bg-purple-600 hover:text-white py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                    }
                    onClick={modalHandler}
                >
                    Edit
                </a>
                <a
                    href="#pablo"
                    className={
                        "text-sm hover:bg-purple-600 hover:text-white py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                    }
                    onClick={(e) => e.preventDefault(id)}
                >
                    Delete
                </a>
            </div>
        </>
    );
};

export default BudgetDropdown;
