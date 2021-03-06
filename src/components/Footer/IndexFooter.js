import {FaFacebook, FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa'
import Button from '../Button/Button';
import LogoFooter from '../Logos/LogoFooter'
const IndexFooter = () => {
    return (
        <>
            <footer className="relative bg-gray-300 pt-8 pb-6">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                            className="text-gray-300 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-center lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
                            <h5 className="text-lg mt-0 mb-2 text-gray-700">
                                Find us on any of these platforms, we respond 1-2 business days.
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6">
                                <Button 
                                    color="btn-round inline-flex items-center bg-white text-blue-400 mr-2 hover:bg-white transition hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg duration-300 transform"
                                    label=""
                                    icon={<FaTwitter className="h-5 w-5 mx-auto" />}
                                />
                                <Button 
                                    color="btn-round inline-flex items-center bg-white text-blue-600 mr-2 hover:bg-white transition hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg duration-300 transform"
                                    label=""
                                    icon={<FaFacebook className="h-5 w-5 mx-auto" />}
                                />
                                <Button 
                                    color="btn-round inline-flex items-center bg-white text-pink-400 mr-2 hover:bg-white transition hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg duration-300 transform"
                                    label=""
                                    icon={<FaInstagram className="h-5 w-5 mx-auto" />}
                                />
                                <Button 
                                    color="btn-round inline-flex items-center bg-white text-gray-900 mr-2 hover:bg-white transition hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg duration-300 transform"
                                    label=""
                                    icon={<FaGithub className="h-5 w-5 mx-auto" />}
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                                        Other Resources
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                href="https://github.com/ridhoajibx/fund/blob/master/LICENSE.md"
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                                            >
                                                MIT License
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="!#"
                                                rel="noreferrer noopener"
                                                className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                                            >
                                                Terms & Conditions
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="!#"
                                                rel="noreferrer noopener"
                                                className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                                            >
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="!#"
                                                rel="noreferrer noopener"
                                                className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                                            >
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-400" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-gray-600 font-semibold py-1">
                                Copyright © {new Date().getFullYear()} {" "}
                                <a
                                    href="!#"
                                    rel="noreferrer noopener"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    <LogoFooter logoColor={`text-purple-600`} /> Teams
                                </a>
                                .
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default IndexFooter;
