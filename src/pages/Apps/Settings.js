import { useState } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../redux/actions/authActions';

import CardProfile from '../../components/Cards/CardProfile';
import CardFormAccount from '../../components/Cards/Account/CardFormAccount';
import ModalPassword from '../../components/Modals/ModalPassword';

const Settings = (props) => {
    const { auth } = props;

    const [showModal, setShowModal] = useState(false);
    const modalHandler = () => setShowModal(!showModal);

    return (
        <>
            {showModal ?
                <ModalPassword modalHandler={modalHandler} /> : null
            }
            <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                    <CardProfile auth={auth} setShowModal={setShowModal} />
                </div>
                <div className="w-full lg:w-8/12 mt-10 px-4">
                    <CardFormAccount auth={auth} />
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => dispatch(userActions())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
