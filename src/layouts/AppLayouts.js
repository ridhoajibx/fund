import { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { swalWithTWButton } from "../components/Button/swalWithTWButton";
import AppFooter from "../components/Footer/AppFooter";
import HeaderStats from "../components/Headers/HeaderStats";
import AppNavbar from "../components/Navbars/AppNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Loading from "../pages/Loading/Loading";
import { LogOutAuthActions } from "../redux/actions/authActions";

const AppLayouts = (props) => {
    let history = useHistory()
    const { children, auth, logout } = props;
    const [loadingPage, setLoadingPage] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => {
            setLoadingPage(false);
        }, 3000)
        return () => {
            clearTimeout(timer);
        }
    }, [loadingPage])

    const alert = useCallback(() => {
        if (auth.errorsUser === 'jwt expired') {
            swalWithTWButton.fire({
                icon: 'warning',
                title: 'Token is expired',
                text: auth.errorUsers,
                confirmButtonText: 'Logout now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    logout(history);
                }
            })
        }
    }, [auth, logout, history])

    useEffect(() => {
        alert();
    }, [alert]);
    
    return (
        <>
            { loadingPage && <Loading /> }
            <Sidebar auth={auth} />
            <div className="relative md:ml-64 bg-gray-200">
                <AppNavbar auths={auth} />
                {/* Header */}
                <HeaderStats />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                { children }
                    <AppFooter />
                </div>
            </div>
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (history) => dispatch(LogOutAuthActions(history))
    }
}

export default connect(null, mapDispatchToProps) (AppLayouts);
