import { FaCalendar, FaCamera, FaEnvelope, FaSpinner } from 'react-icons/fa';
import Button from '../Button/Button';
import moment from 'moment';
import { updatePhotoUserActions, userActions } from '../../redux/actions/authActions';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { swalWithTWButton } from '../Button/swalWithTWButton';

const CardProfile = (props) => {
    const { setShowModal, auth, updatePhoto, getUser } = props;

    const [loading, setLoading] = useState(false);

    
    const uploadPhoto = async (value) => {
        const { value: file } = await swalWithTWButton.fire({
            title: 'Select image',
            input: 'file',
            inputAttributes: {
                'accept': 'image/*',
                'aria-label': 'Upload your profile picture'
            }
        })
        if (file) {
            await later(1000);
            setLoading(true);
            updatePhoto(file);
        } else {
            swalWithTWButton.fire({
                icon: 'info',
                title: "wait!",
                text: "your photo isn't uploaded yet!"
            })
        }
    }

    function later(delay) {
        return new Promise(function (resolve) {
            setTimeout(resolve, delay);
        });
    }
    useEffect(() => {
        let timer = setTimeout(() => {
            getUser()
            setLoading(false)
        }, 3000);
        return () => {
            clearTimeout(timer)
        }
    }, [loading, getUser]);

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4 flex justify-center items-center">
                            <div className="relative">
                                {loading ?
                                    <div>
                                        <FaSpinner className="bg-white border-2 border-gray-300 shadow-xl rounded-full w-40 h-auto align-middle p-10 -my-16 mx-auto max-w-100-px animate-spin" />
                                    </div> :
                                    <img
                                        alt="..."
                                        src={auth.user.photo}
                                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                                        className="border-2 border-gray-300 shadow-xl rounded-full w-40 h-40 align-middle -my-16 mx-auto max-w-100-px"
                                    />
                                }
                                <Button
                                    color="absolute right-0 top-10 btn-round border-2 border-gray-200 transition duration-300 transform hover:scale-105"
                                    types="button"
                                    handleClick={uploadPhoto}
                                    icon={<FaCamera />}
                                    label=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 pb-4 flex flex-col text-center items-center">
                        <h3 className="text-lg font-semibold leading-normal text-gray-800 mb-2">
                            {auth.user.name}
                        </h3>
                        <div className="flex items-center text-xs leading-normal mt-0 mb-2 text-gray-500 font-bold">
                            <FaEnvelope className="mr-2" />
                            {auth.user.email}
                        </div>
                        <div className="flex items-center mb-2 text-gray-700 mt-10 text-sm">
                            <FaCalendar className="mr-2" />
                            <p>{moment(auth.user.dateOfBirth).format("MMM, Do YYYY")}</p>
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
const mapDispatchToProps = (dispatch) => {
    return {
        updatePhoto: (state) => dispatch(updatePhotoUserActions(state)),
        getUser: () => dispatch(userActions())
    }
}

export default connect(null, mapDispatchToProps)(CardProfile);
