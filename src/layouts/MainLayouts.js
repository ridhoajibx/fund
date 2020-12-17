import IndexNavbars from "../components/Navbars/IndexNavbars";

const MainLayouts = (props) => {
    return (
        <div className="scrollbar-thumb:bg-red-500 scrollbar-track:rounded">
            <IndexNavbars 
                auth={props.auth}
                setAuth={props.setAuth}
            />
            {props.children}
        </div>
    );
}

export default MainLayouts;
