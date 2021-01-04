import { useState } from "react";
import '../assets/css/popoper.css'

const PasswordPopover = (props) => {
    const { children } = props;

    const [isVisible, setVisible] = useState(false);
    const [rule1, setRule1] = useState(false);

    const validate = (
        field,
        getValues,
        setError,
        clearErrors
    ) => {
        let valid = true;
        const value = getValues(field);

        // rule 1 : At Least 8 Characters
        if (value.length >= 8) {
            setRule1(true);
        } else {
            setRule1(false);
            valid = false;
        }

        if (!valid) {
            setError(field, {
                type: "manual",
                message: " Pasword Doesn't Meet Requirements",
            });
        } else {
            clearErrors(field);
        }
    };

    const visible = (bool) => {
        setVisible(bool);
    };

    return (
        <div
            className={`popover__wrapper ${isVisible === true ? "open" : "close"}`}
        >
            {children({
                validate,
                visible,
            })}
            <div className="popover__content">
                <div className="popover__message">
                    <p className="font-bold uppercase text-xs">Password Requirements : </p>
                    <ul className="mt-2">
                        <li className={`uppercase text-xs ${rule1 === true ? "line" : ""}`}>Min 8 Characters </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PasswordPopover;
