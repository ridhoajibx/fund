import React from 'react';
import PropTypes from "prop-types";

const ButtonUpload = ({color, types, handleClick, icon}) => {
    return (
        <button className={color} type={types} onClick={handleClick}>
            {icon}
        </button>
    );
}
ButtonUpload.defaultProps = {
    types: "button",
}

ButtonUpload.propTypes = {
    color: PropTypes.string,
    types: PropTypes.string,
}

export default ButtonUpload;
