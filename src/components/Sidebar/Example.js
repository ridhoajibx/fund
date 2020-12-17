import { Transition } from '@headlessui/react';
import React, { useState } from 'react';

const Example = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="flex h-screen overflow-y-hidden bg-white">
            <Transition show={isOpen}>
                <Transition.Child
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                </Transition.Child>
                <div className="fixed inset-0 z-10 bg-black bg-opacity-20 lg:hidden" style={{ backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}></div>
                <Transition.Child
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <aside className={`fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64 max-h-screen h-screen overflow-hidden transition-all transform bg-white border-r shadow-lg lg:z-auto lg:static lg:shadow-none ${!isOpen && `-translate-x-full lg:translate-x-0 lg:w-20`}`}>
                        <div className={`flex items-center justify-between flex-shrink-0 p-2 ${!isOpen && `lg:justify-center`}`}>
                            <span className="p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap">
                                K<span className={!isOpen && 'lg:hidden'}>-WD</span>
                            </span>
                            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md lg:hidden">
                                <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
                            <ul className="p-2 overflow-hidden">
                                <li>
                                    <a href="#" className={`flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100 ${!isOpen && 'justify-center'}`}>
                                        <span>
                                            <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                            </svg>
                                        </span>
                                        <span className={!isOpen && 'lg:hidden'}>Dashboard</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="flex-shrink-0 p-2 border-t max-h-14">
                            <button
                                className="flex items-center justify-center w-full px-4 py-2 space-x-1 font-medium tracking-wider uppercase bg-gray-100 border rounded-md focus:outline-none focus:ring">
                                <span>
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                </span>
                                <span className={!isOpen && 'lg:hidden'}> Logout </span>
                            </button>
                        </div>
                    </aside>
                </Transition.Child>
            </Transition>

            <div className="flex flex-col flex-1 h-full overflow-hidden">
                <header className="flex-shrink-0 border-b">
                    <div className="flex items-center justify-between p-2">
                        <div className="flex items-center space-x-3">
                            <span className="p-2 text-xl font-semibold tracking-wider uppercase lg:hidden">Fund</span>
                            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md focus:outline-none focus:ring">
                                <svg className={`w-4 h-4 text-gray-600 ${isOpen && 'transform transition-transform -rotate-180'}`}
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div >
                        <button className="bg-purple-600 text-white active:bg-purple-500 hover:bg-purple-500 text-xs font-bold uppercase px-4 py-2 my-2 md:my-0 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150">
                            Login
                        </button>
                    </div >
                </header >
            </div >
        </div >
    );
}

export default Example;
