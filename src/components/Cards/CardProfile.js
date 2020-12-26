import { FaBriefcase, FaCalendar, FaCamera, FaMapMarked } from 'react-icons/fa';
import profileImg from '../../assets/img/team-1-800x800.jpg';
import Button from '../Button/Button';

const CardProfile = ({ setShowModal }) => {
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
                                <Button
                                    color="absolute right-0 top-10 btn-round border-2 border-gray-200 transition duration-300 transform hover:scale-105"
                                    types="button"
                                    handleClick={(e) => e.preventDefault()}
                                    icon={<FaCamera />}
                                    label=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 pb-4 flex flex-col text-center items-center">
                        <h3 className="text-lg font-semibold leading-normal text-gray-800 mb-2">
                            Jumakri Ridho Fauzi
                        </h3>
                        <div className="flex items-center text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                            <FaMapMarked className="mr-2" />
                            Batam, Indonesia
                        </div>
                        <div className="flex items-center mb-2 text-gray-700 mt-10 text-sm">
                            <FaBriefcase className="mr-2" />
                            Front End Developer
                        </div>
                        <div className="flex items-center mb-2 text-gray-700 text-sm">
                            <FaCalendar className="mr-2" />
                            <p>10, December 1993</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <Button
                                color="btn-primary duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black"
                                types="button"
                                handleClick={() => setShowModal(true)}
                                label="change password"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardProfile;
