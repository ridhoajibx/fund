import { Link } from 'react-router-dom';
import authBg from '../../assets/img/register_bg_2.png';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
    return (
        <section className="relative w-full h-full py-40 min-h-screen">
            <div
                className="absolute top-0 w-full h-full bg-purple-500 bg-no-repeat bg-full"
                style={{
                    backgroundImage:
                        "url(" + authBg + ")",
                }}
            ></div>
            <div className="container m-auto px-4 h-full min-h-screen">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative flex flex-col items-center justify-center min-w-0 p-10 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                            <h3 className="text-2xl mb-2 uppercase">404 This page not found</h3>
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
