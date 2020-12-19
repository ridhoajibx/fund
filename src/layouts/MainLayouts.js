import IndexNavbars from "../components/Navbars/IndexNavbars";

const MainLayouts = (props) => {
    return (
        <div>
            <IndexNavbars 
                auth={props.auth}
                setAuth={props.setAuth}
            />
            {props.children}
        </div>
    );
}

export default MainLayouts;
