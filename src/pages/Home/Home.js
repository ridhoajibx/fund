import { Link } from "react-router-dom";
import BgImg from "../../assets/img/Oreti2.svg"
import Spotify from '../../assets/img/spotify.png';
import Netflix from '../../assets/img/netflix_logo.png';
import Disney from '../../assets/img/Disney_Logo.svg';
import HBO from '../../assets/img/HBO-Logo.png';

import IndexFooter from "../../components/Footer/IndexFooter";
import { FaAngleDoubleRight } from "react-icons/fa";

const Home = (props) => {
    return (
        <>
            <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
                <div className="container mx-auto items-center flex flex-wrap">
                    <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                        <div className="">
                            <h2 className="font-semibold text-4xl text-gray-700">
                                <span className="text-purple-600">FUN</span>D
                            </h2>
                            <h2 className="font-semibold text-2xl text-gray-700 underline">
                                Stress Free Expense Tracker.
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                <a
                                    href="https://tailwindcss.com/?ref=creativetim"
                                    className="text-gray-700"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <span className="text-purple-600">FUN</span>D{" "}
                                </a>
                                helps people to control their financial expenses.
                            </p>
                            {props.auth ? '' :
                                <div className="mt-12">
                                    <Link
                                        to="/auth/register"
                                        className="transform hover:-translate-y-1 hover:scale-110 get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-purple-600 active:bg-purple-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                                    >
                                        Get started
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <img
                    className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
                    src={BgImg}
                    alt="..."
                />
            </section>

            <section className="mt-48 md:mt-40 pb-40 relative bg-gray-200">
                <div
                    className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
                    style={{ transform: "translateZ(0)" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-gray-200 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>

                <div className="container mx-auto overflow-hidden pb-20">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-2">
                            <div className="justify-center flex flex-wrap relative">
                                <div className="my-4 w-full lg:w-6/12 px-4">
                                    <a
                                        href="https://www.disney.com/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <div className="bg-blue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                                            <img
                                                alt="..."
                                                className="shadow-md rounded-full max-w-full w-20 h-20 mx-auto p-2 bg-white"
                                                src={Disney}
                                            />
                                            <p className="text-lg text-white mt-4 font-semibold">
                                                Disney
                                            </p>
                                        </div>
                                    </a>
                                    <a
                                        href="https://www.hbo.com/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <div className="bg-gray-800 shadow-lg rounded-lg text-center p-8 mt-8">
                                            <img
                                                alt="..."
                                                className="shadow-md rounded-full max-w-full w-20 h-20 mx-auto p-2 bg-white"
                                                src={HBO}
                                            />
                                            <p className="text-lg text-white mt-4 font-semibold">
                                                HBO
                                             </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                                    <a
                                        href="https://www.netflix.com/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                                            <img
                                                alt="..."
                                                className="shadow-md rounded-full max-w-full w-20 h-20 mx-auto p-2 bg-white"
                                                src={Netflix}
                                            />
                                            <p className="text-lg text-white mt-4 font-semibold">
                                                Netflix
                                            </p>
                                        </div>
                                    </a>
                                    <a
                                        href="https://www.spotify.com/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <div className="bg-green-500 shadow-lg rounded-lg text-center p-8 mt-8">
                                            <img
                                                alt="..."
                                                className="shadow-md rounded-full max-w-full w-20 h-20 mx-auto p-2 bg-white"
                                                src={Spotify}
                                            />
                                            <p className="text-lg text-white mt-4 font-semibold">
                                                Spotify
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto">
                            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-6 shadow-lg rounded-full bg-white">
                                <svg className="w-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                </svg>
                            </div>
                            <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                Subscriptions Feature
                            </h3>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                <strong><span className="text-purple-600">FUN</span>D</strong> has a feature to pay digital products like Spotify, Netflix, HBO, and Disney.
                            </p>
                            <a
                                href="#"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="font-bold text-gray-800 hover:text-gray-600 ease-linear transition-all duration-150 flex items-center"
                            >
                                View all
                                <FaAngleDoubleRight className="ml-2"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <IndexFooter />
        </>
    );
}

export default Home;
