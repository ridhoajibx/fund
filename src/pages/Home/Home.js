import { Link } from "react-router-dom";
import BgImg from "../../assets/img/Oreti2.svg"
import Spotify from '../../assets/img/spotify.png';
import Netflix from '../../assets/img/netflix_logo.png';
import Disney from '../../assets/img/Disney_Logo.svg';
import HBO from '../../assets/img/HBO-Logo.png';

import IndexFooter from "../../components/Footer/IndexFooter";
import { FaAngleDoubleRight, FaReact } from "react-icons/fa";

const Home = (props) => {
    return (
        <>
            <section className="header relative items-center flex h-screen max-h-860-px">
                <div className="container mx-auto items-center flex flex-wrap">
                    <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                        <div className="">
                            <h2 className="font-semibold text-2xl md:text-4xl text-gray-700">
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
                                        className="btn-primary px-6 py-4 duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black"
                                    >
                                        Get started
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <img
                    className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-full max-h-860-px"
                    src={BgImg}
                    alt="..."
                />
            </section>

            <section className="mt-0 md:mt-20 pb-20 relative bg-gray-200">
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
                                        <div className="bg-blue-500 shadow-lg rounded-lg text-center p-8 mt-8 transition-all transform hover:shadow-lg -rotate-3 hover:rotate-0">
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
                                        <div className="bg-gray-800 shadow-lg rounded-lg text-center p-8 mt-8 transition-all transform hover:shadow-lg rotate-3 hover:rotate-0">
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
                                        <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8 transition-all transform hover:shadow-lg -rotate-3 hover:rotate-0">
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
                                        <div className="bg-green-500 shadow-lg rounded-lg text-center p-8 mt-8 transition-all transform hover:shadow-lg rotate-3 hover:rotate-0">
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
                            <div className="text-gray-600 p-3 text-4xl text-center inline-flex items-center justify-center w-20 h-20 mb-6 shadow-lg rounded-full bg-white">
                                <FaReact />
                            </div>
                            <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                Subscriptions Feature
                            </h3>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                <strong><span className="text-purple-600">FUN</span>D</strong> has a feature to pay digital products like Spotify, Netflix, HBO, and Disney.
                            </p>
                            <a
                                href="!#"
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
