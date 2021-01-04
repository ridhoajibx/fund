import { useState } from "react";
import moment from 'moment'
import '../assets/css/popoper.css'

const DateofBirthPopover = (props) => {
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
        const format = 'YYYY-MM-DD'; // Your date format
        const resultFormat = 'years' // Result format (years, months, days)
        const age = moment().diff(moment(value, format), resultFormat, true);

        // rule 1 : At Least 8 Characters
        if (age >= 18) {
            setRule1(true);
        } else {
            setRule1(false);
            valid = false;
        }

        if (!valid) {
            setError(field, {
                type: "manual",
                message: " Your age doesn't meet requirements",
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
                    <p className="font-bold uppercase text-xs">Date Requirements : </p>
                    <ul className="mt-2">
                        <li className={`className="uppercase text-xs"${rule1 === true ? " line" : ""}`}>Min age 18 years old </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DateofBirthPopover;
