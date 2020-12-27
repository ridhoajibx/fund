import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logos/Logo';

const AuthNavbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const btnLogin = <Link
                        className="btn-secondary transform transition hover:scale-105 duration-300 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black ml-3 mb-3 md:mb-0"
                        to="/auth/login"
                    >
                        Login
                    </Link>
    const btnRegister = <Link
                            className="btn-secondary transform transition hover:scale-105 duration-300 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black ml-3 mb-3 md:mb-0"
                            to="/auth/register"
                        >
                            Register
                        </Link>
    return (
        <>
            <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-white text-sm font-extrabold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                            to="/"
                        >
                            <Logo logoColor={`text-purple-100`} />
                        </Link>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="text-white fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
                            (navbarOpen ? " block rounded shadow-lg" : " hidden")
                        }
                        id="example-navbar-warning"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="flex items-center">
                                <Link
                                    className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    to='/'
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="flex items-center">
                                {window.location.pathname === "/auth/login" ? btnRegister : btnLogin}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default AuthNavbar;
