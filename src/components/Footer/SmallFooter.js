import React from 'react';
import LogoFooter from '../Logos/LogoFooter';

const SmallFooter = (props) => {
    return (
        <>
            <footer
                className={
                    (props.absolute
                        ? "absolute w-full bottom-0 bg-gray-900"
                        : "relative") + " pb-6"
                }
            >
                <div className="container mx-auto px-4">
                    <hr className="mb-6 border-b-1 border-gray-700" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4">
                            <div className="text-sm text-gray-100 font-semibold py-1 text-center md:text-left">
                                Copyright © {new Date().getFullYear()}{" "}
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-400 text-sm font-semibold py-1"
                                >
                                    <LogoFooter logoColor={`text-purple-600`}/> Teams
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-8/12 px-4">
                            <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                                <li>
                                    <a
                                        href="#"
                                        className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                                    >
                                        <LogoFooter logoColor={`text-purple-600`}/> Teams
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/ridhoajibx/fund/blob/master/LICENSE.md"
                                        className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                                    >
                                        MIT License
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default SmallFooter;
