import { Menu, Transition } from '@headlessui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/img/team-1-800x800.jpg'
import PropTypes from "prop-types";

const User = ({ 
    position,
    ringImg,
    setAuth
}) => {
    return (
        <li className="flex items-center relative text-left">
            <Menu>
                {({ open }) => (
                    <div className="relative block">
                        <Menu.Button className="hover:text-gray-600 text-gray-800 px-3 py-2 flex items-center text-xs uppercase font-bold transition duration-150 ease-in-out focus:outline-none">
                            <span className={`w-10 h-10 text-sm ring ${ringImg} text-white bg-gray-300 inline-flex items-center justify-center rounded-full`}>
                                <img
                                    alt="..."
                                    className="w-full rounded-full align-middle border-none shadow-lg"
                                    src={profile}
                                />
                            </span>
                        </Menu.Button>

                        <Transition
                            show={open}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-out duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                className={`absolute ${position} w-56 mt-0 md:mt-2 bg-white border-0 md:border border-gray-200 rounded-md md:shadow-lg outline-none`}
                            >
                                <div className="px-4 py-3">
                                    <p className="text-sm leading-5">Signed in as</p>
                                    <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                                        Jumakri Ridho Fauzi
                                    </p>
                                </div>

                                <div className="py-1">
                                    <Menu.Item>
                                        <Link
                                            to="/dashboard"
                                            className="focus:outline-none text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                                        >
                                            Dashboard
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link
                                            to="/settings"
                                            className="focus:outline-none text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                                        >
                                            Settings
                                        </Link>
                                    </Menu.Item>
                                </div>
                                <div className="h-0 mx-4 my-2 border border-solid border-gray-200" />

                                <div className="py-1">
                                    <Menu.Item>
                                        <button
                                            className={
                                                "text-sm text-left py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 hover:bg-purple-500 hover:text-gray-200 focus:outline-none"
                                            }
                                            onClick={() => setAuth(false)}
                                        >
                                            Logout
                                        </button>
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </div>
                )}
            </Menu>
        </li>
    );
}

export default User;

User.defaultProps = {
    position: "-right-40 lg:-left-40",
    ringImg: "ring-purple-100"
};
User.propTypes = {
    position: PropTypes.string,
    ringImg: PropTypes.string,
    setAuth: PropTypes.bool
};