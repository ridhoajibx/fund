import { useState } from 'react';
import CardProfile from '../../components/Cards/CardProfile';
import CardFormSettings from '../../components/Cards/Settings/CardFormSettings';
import ModalPassword from '../../components/Modals/ModalPassword';

const Settings = () => {
    const [showModal, setShowModal] = useState(false);
    const modalHandler = () => setShowModal(!showModal);
    return (
        <>
            {showModal ? 
                <ModalPassword modalHandler={modalHandler} /> : null
            }
            <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                    <CardProfile setShowModal={setShowModal} />
                </div>
                <div className="w-full lg:w-8/12 mt-10 px-4">
                    <CardFormSettings />
                </div>
            </div>
        </>
    );
}

export default Settings;
