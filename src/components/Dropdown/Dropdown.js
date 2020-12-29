import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
    return (
        <li className="flex items-center relative text-left">
            <Menu>
                {({ open }) => (
                    <div className="relative block">
                        <Menu.Button className="hover:text-gray-600 text-gray-800 px-3 py-2 flex items-center text-xs uppercase font-bold transition duration-150 ease-in-out focus:outline-none">
                            <span>Pages</span>
                            <svg
                                className={
                                    `w-5 h-5 duration-300 
                                    ${open ? 'transform -rotate-180' : ''}`
                                }
                                fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
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
                                className="absolute z-50 -right-40 lg:-left-40 w-56 mt-0 md:mt-2 bg-white border-0 md:border border-gray-200 rounded-md md:shadow-lg outline-none"
                            >
                                <span
                                    className="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
                                >
                                    Dashboard User
                                </span>

                                <div className="py-1">
                                    <Menu.Item>
                                        <Link
                                            to="/dashboard"
                                            className="focus:outline-none text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-600 hover:text-purple-600"
                                        >
                                            Dashboard
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link
                                            to="/budgets"
                                            className="focus:outline-none text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-600 hover:text-purple-600"
                                        >
                                            Budgets
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link
                                            to="/expense"
                                            className="focus:outline-none text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-600 hover:text-purple-600"
                                        >
                                            Expense
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link
                                            to="/subscription"
                                            className="focus:outline-none text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-600 hover:text-purple-600"
                                        >
                                            Subscription
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link
                                            to="/settings"
                                            className="focus:outline-none text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-600 hover:text-purple-600"
                                        >
                                            Settings
                                        </Link>
                                    </Menu.Item>
                                </div>
                                <div className="h-0 mx-4 my-2 border border-solid border-gray-200" />

                                <span
                                    className="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
                                >
                                    Example
                                </span>

                                <div className="py-1">
                                    <Menu.Item>
                                        <Link
                                            to="/tables"
                                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-600 hover:text-purple-600"
                                        >
                                            Tables
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link
                                            to="/errors"
                                            className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-600 hover:text-purple-600"
                                        >
                                            404 pages
                                        </Link>
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
