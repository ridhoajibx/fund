import { Menu, Transition } from '@headlessui/react';

const Dropdown = () => {
    return (
        

        <li className="flex items-center relative text-left">
        <Menu>
            {({ open }) => (
                <div className="inline-block">
                    <Menu.Button className="hover:text-gray-600 text-gray-800 px-3 py-2 flex items-center text-sm uppercase font-bold transition duration-150 ease-in-out focus:outline-none">
                        <span>Dropdown</span>
                        {!open ?
                            <svg 
                                className="w-4 h-4 ml-1" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg> :
                            <svg 
                                className="w-4 h-4 ml-1" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        }
                    </Menu.Button>

                    <Transition
                        show={open}
                        enter="transition-opacity duration-75"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Menu.Items
                            static
                            className="static md:absolute top-5 md:right-0 origin-top-right w-56 mt-0 md:mt-2 bg-white border-0 md:border border-gray-200 rounded-md md:shadow-lg outline-none"
                        >
                            <div className="px-4 py-3">
                                <p className="text-sm leading-5">Signed in as</p>
                                <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                                    tom@example.com
                            </p>
                            </div>

                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#account-settings"
                                            className={`${active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700"
                                                } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                        >
                                            Account settings
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#support"
                                            className={`${active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700"
                                                } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                        >
                                            Support
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item
                                    as="span"
                                    disabled
                                    className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
                                >
                                    New feature (soon)
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#license"
                                            className={`${active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700"
                                                } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                        >
                                            License
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>

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
                                            Sign out
                                        </a>
                                    )}
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

export default Dropdown;
