import { useState } from 'react';

const useForm = (callback, validate) => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     let timer = setTimeout(() => setLoading(false), 2000);
    //     return () => {
    //         clearTimeout(timer)
    //     }
    // }, [loading])

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        if (Object.keys(errors).length === 0) {
            setLoading(true);
            callback();
        }       
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        event.persist();
        setValues(values => ({ ...values, [name]: value }));
        setErrors(validate(name, values));
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        loading,
        setLoading
    }
};

export default useForm;