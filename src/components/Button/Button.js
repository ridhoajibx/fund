import React from 'react';
import PropTypes from "prop-types";

const Button = ({color, types, handleClick, label, icon}) => {
    return (
        <button className={color} type={types} onClick={handleClick}>
            {icon} {label}
        </button>
    );
}
Button.defaultProps = {
    types: "button",
    label: "Submit"
}

Button.propTypes = {
    color: PropTypes.string,
    types: PropTypes.string,
    label: PropTypes.string,
}

export default Button;
