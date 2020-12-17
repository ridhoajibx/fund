import { FaBriefcase, FaCamera, FaMapMarked, FaUniversity } from 'react-icons/fa';
import profileImg from '../../assets/img/team-1-800x800.jpg';

const CardProfile = () => {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4 flex justify-center items-center">
                            <div className="relative">
                                <img
                                    alt="..."
                                    src={profileImg}
                                    className="shadow-xl rounded-full w-40 h-auto align-middle border-none -my-16 mx-auto max-w-100-px"
                                />
                                <button className="absolute right-0 top-10 rounded-full bg-purple-600 hover:bg-purple-700 focus:outline-none text-white text-xl p-3 border-2 mx-auto">
                                    <FaCamera />
                                </button>
                            </div>
                        </div>
                        <div className="w-full px-4 text-center mt-20">
                            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                <div className="p-3 text-center">
                                    <span className="text-lg font-bold block uppercase tracking-wide text-gray-700">
                                        22
                                    </span>
                                    <span className="text-sm text-gray-500">Friends</span>
                                </div>
                                <div className="p-3 text-center">
                                    <span className="text-lg font-bold block uppercase tracking-wide text-gray-700">
                                        10
                                    </span>
                                    <span className="text-sm text-gray-500">Photos</span>
                                </div>
                                <div className="p-3 text-center">
                                    <span className="text-lg font-bold block uppercase tracking-wide text-gray-700">
                                        89
                                    </span>
                                    <span className="text-sm text-gray-500">Comments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col items-center">
                        <h3 className="text-lg font-semibold leading-normal text-gray-800 mb-2">
                            Jumakri Ridho Fauzi
                        </h3>
                        <div className="flex items-center text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                            <FaMapMarked className="mr-2" />
                            Batam, Indonesia
                        </div>
                        <div className="flex items-center mb-2 text-gray-700 mt-10 text-sm">
                            <FaBriefcase className="mr-2" />
                            Front End Developer - Team Leader
                        </div>
                        <div className="flex items-center mb-2 text-gray-700 text-sm">
                            <FaUniversity className="mr-2" />
                            Glints x Binar Academy
                        </div>
                    </div>
                    <div className="mt-10 py-10 border-t border-gray-300 text-center">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-9/12 px-4">
                                <p className="mb-4 text-sm leading-relaxed text-gray-800">
                                    Jumakri Ridho Fauzi is a perfectionist,
                                    the perfect mix of brains and strength.
                                    He was the best friend anyone could wish for!
                                    Man who is smart, talented, funny, and very responsible.
                                </p>
                                <a
                                    href="#pablo"
                                    className="font-normal text-sm text-blue-500"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Show more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardProfile;
