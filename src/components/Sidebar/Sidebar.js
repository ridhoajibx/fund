import React from "react";
import { FaClipboardList, FaFingerprint, FaGoogleWallet, FaNewspaper, FaTable, FaTools, FaTv, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import User from "../Dropdown/User";
import Logo from "../Logos/Logo";

export default function Sidebar(props) {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent focus:outline-none"
                        type="button"
                        onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                    {/* Brand */}
                    <Link
                        className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-lg uppercase font-bold p-4 px-0"
                        to="/"
                    >
                        <Logo logoColor={`text-purple-600`} />
                    </Link>
                    {/* User */}
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                            <User setAuth={props.setAuth} position={'right-0'} color={`text-gray-800 hover:text-gray-600`} ringImg={`ring-purple-600`} />
                        </li>
                    </ul>
                    {/* Collapse */}
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                            collapseShow
                        }
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300">
                            <div className="flex flex-wrap"
                                enter="transition transform duration-300"
                                enterstart="-translate-x-full opacity-30 ease-in"
                                enterend="translate-x-0 opacity-100 ease-out"
                                leave="transition transform duration-300"
                                leavestart="translate-x-0 opacity-100 ease-out"
                                leaveend="-translate-x-full opacity-0 ease-in"
                            >
                                <div className="w-6/12">
                                    <Link
                                        className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-lg uppercase font-bold p-4 px-0"
                                        to="/"
                                    >
                                        <Logo logoColor={`text-purple-600`} />
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent focus:outline-none"
                                        onClick={() => setCollapseShow("hidden")}
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Form */}
                        <form className="mt-6 mb-4 md:hidden">
                            <div className="mb-3 pt-0">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="px-3 py-2 h-12 border border-solid  border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                                />
                            </div>
                        </form>

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        {/* Heading */}
                        <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            Dashboard user
                        </h6>
                        {/* Navigation */}

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/dashboard") !== -1
                                            ? "text-purple-500 hover:text-purple-600"
                                            : "text-gray-800 hover:text-gray-600")
                                    }
                                    to="/dashboard"
                                >
                                    <span className="flex items-center">
                                        <FaTv className={`
                                            mr-2 text-sm 
                                            ${(window.location.href.indexOf("/dashboard") !== -1
                                            ? "opacity-75"
                                            : "text-gray-400")}
                                            `} /> {" "}
                                        Dashboard
                                    </span>
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/expense") !== -1
                                            ? "text-purple-500 hover:text-purple-600"
                                            : "text-gray-800 hover:text-gray-600")
                                    }
                                    to="/expense"
                                >
                                    <span className="flex items-center">
                                        <FaTable className={`
                                            mr-2 text-sm 
                                            ${(window.location.href.indexOf("/expense") !== -1
                                            ? "opacity-75"
                                            : "text-gray-400")}
                                            `} /> {" "}
                                        Expense
                                    </span>
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/budgets") !== -1
                                            ? "text-purple-500 hover:text-purple-600"
                                            : "text-gray-800 hover:text-gray-600")
                                    }
                                    to="/budgets"
                                >
                                    <span className="flex items-center">
                                        <FaGoogleWallet className={`
                                            mr-2 text-sm 
                                            ${(window.location.href.indexOf("/budgets") !== -1
                                            ? "opacity-75"
                                            : "text-gray-400")}
                                            `} /> {" "}
                                        Budgets
                                    </span>
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/settings") !== -1
                                            ? "text-purple-500 hover:text-purple-600"
                                            : "text-gray-800 hover:text-gray-600")
                                    }
                                    to="/settings"
                                >
                                    <span className="flex items-center">
                                        <FaTools className={`
                                            mr-2 text-sm 
                                            ${(window.location.href.indexOf("/settings") !== -1
                                            ? "opacity-75"
                                            : "text-gray-400")}
                                            `} /> {" "}
                                        Settings
                                    </span>
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/tables") !== -1
                                            ? "text-purple-500 hover:text-purple-600"
                                            : "text-gray-800 hover:text-gray-600")
                                    }
                                    to="/tables"
                                >
                                    <span className="flex items-center">
                                        <FaTable className={`
                                            mr-2 text-sm 
                                            ${(window.location.href.indexOf("/tables") !== -1
                                            ? "opacity-75"
                                            : "text-gray-400")}
                                            `} /> {" "}
                                        Table
                                    </span>
                                </Link>
                            </li>
                        </ul>

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        {/* Heading */}
                        <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            Auth Layout Pages
                        </h6>
                        {/* Navigation */}

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                            <li className="items-center">
                                <Link
                                    className="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
                                    to="/auth/login"
                                >
                                    <span className="flex items-center">
                                        <FaFingerprint className=" text-gray-500 mr-2 text-sm" /> {" "}
                                        Login
                                    </span>
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
                                    to="/auth/register"
                                >
                                    <span className="flex items-center">
                                        <FaClipboardList className=" text-gray-500 mr-2 text-sm" /> {" "}
                                        Register
                                    </span>
                                </Link>
                            </li>
                        </ul>

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        {/* Heading */}
                        <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            No Layout Pages
                        </h6>
                        {/* Navigation */}

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                            <li className="items-center">
                                <Link
                                    className="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
                                    to="/landing"
                                >
                                    <span className="flex items-center">
                                        <FaNewspaper className=" text-gray-500 mr-2 text-sm" /> {" "}
                                        Landing page
                                    </span>
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
                                    to="/profile"
                                >
                                    <span className="flex items-center">
                                        <FaUserCircle className=" text-gray-500 mr-2 text-sm" /> {" "}
                                        Profile page
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
