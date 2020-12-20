import { Menu, Transition } from '@headlessui/react';
import React from 'react';

const Notification = () => {
    return (
        <li className="flex items-center relative text-left">
            <Menu>
                {({ open }) => (
                    <div className="relative block">
                        <Menu.Button className="bg-transparent text-white px-3 py-2 flex items-center text-xs uppercase font-bold transition duration-150 ease-in-out focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
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
                            <div
                                className="absolute -right-40 md:-left-40 w-48 mt-0 md:mt-2 bg-white border-0 md:border border-gray-200 rounded-md md:shadow-lg outline-none"
                            >
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#sign-out"
                                                className={`${active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700"
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                            >
                                                Action
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>

                                {/* Example */}
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#sign-out"
                                                className={`${active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700"
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                            >
                                                Another action
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                                <div className="h-0 mx-4 my-2 border border-solid border-gray-200" />
                                
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#sign-out"
                                                className={`${active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700"
                                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                            >
                                                Separate links
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </div>
                        </Transition>
                    </div>
                )}
            </Menu>
        </li>
    );
}

export default Notification;
