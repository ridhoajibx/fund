import { useEffect, useState } from "react";
import AppFooter from "../components/Footer/AppFooter";
import HeaderStats from "../components/Headers/HeaderStats";
import AppNavbar from "../components/Navbars/AppNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Loading from "../pages/Loading/Loading";

const AppLayouts = (props) => {
    const { children, auth } = props;
    const [loadingPage, setLoadingPage] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => {
            setLoadingPage(false);
        }, 3000)
        return () => {
            clearTimeout(timer);
        }
    }, [loadingPage])
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

export default AppLayouts;
