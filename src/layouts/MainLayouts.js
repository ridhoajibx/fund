import IndexNavbars from "../components/Navbars/IndexNavbars";

const MainLayouts = (props) => {
    const { children, auth } = props;
    return (
        <div>
            <IndexNavbars 
                auth={auth}
            />
            {children}
        </div>
    );
}

export default MainLayouts;
