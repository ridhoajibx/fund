import AppFooter from "../components/Footer/AppFooter";
import HeaderStats from "../components/Headers/HeaderStats";
import AppNavbar from "../components/Navbars/AppNavbar";
import Sidebar from "../components/Sidebar/Sidebar";

const AppLayouts = (props) => {
    return (
        <>
            <Sidebar auth={props.auth} setAuth={props.setAuth} />
            <div className="relative md:ml-64 bg-gray-200">
                <AppNavbar setAuth={props.setAuth} />
                {/* Header */}
                <HeaderStats />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    { props.children }
                    <AppFooter />
                </div>
            </div>
        </>
    );
}

export default AppLayouts;
