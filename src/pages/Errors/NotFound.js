import { Link } from 'react-router-dom';
import authBg from '../../assets/img/bg_404.svg';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
    return (
        <section className="relative w-full h-full py-40 min-h-screen">
            <div
                className="absolute top-0 w-full h-full bg-white bg-no-repeat bg-full"
                style={{
                    backgroundImage:
                        "url(" + authBg + ")",
                }}
            ></div>
            <div className="container px-4">
                <div className="flex content-center items-center justify-start h-full">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative flex flex-col items-start min-w-0 p-10 break-words w-full text-gray-700">
                            <h3 className="text-8xl mb-2 font-semibold">Oops!</h3>
                            <div className="text-2xl mb-2 font-semibold">
                                We can't seem to find the page you're looking for. 
                            </div>
                            <div className="text-sm mb-2">
                                Error code: 404
                            </div>
                            <div className="mt-2 uppercase">
                                <Link className="flex items-center btn-primary text-sm duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black" to="/">
                                    <FaHome className="mr-2" />
                                    Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NotFound;
