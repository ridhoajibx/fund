import { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import githubImg from '../../assets/img/github.svg';
import googleImg from '../../assets/img/google.svg';
import Button from '../../components/Button/Button';
import { RegisterAuthActions } from '../../redux/actions/authActions';
import { useForm } from "react-hook-form";
import PasswordPopover from '../../variables/PasswordPopover';
import DateofBirthPopover from '../../variables/DateofBirthPopover';


const Register = (props) => {
    const {
        register,
        handleSubmit,
        errors,
        getValues,
        setError,
        clearErrors,
        formState
    } = useForm();

    const { registerAuth, auth } = props;
    const history = useHistory()
    // State
    const [loading, setLoading] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [showPass2, setShowPass2] = useState(false);

    const handlePass = () => setShowPass(!showPass);
    const handlePass2 = () => setShowPass2(!showPass2);

    const onSubmit = async (data) => {
        if (data.password !== data.password2) {
            setError("password", {
                type: "passwordMatch",
                message: "Your password and confirmation password do not match.",
            });
            setError("password2", {
                type: "passwordMatch",
                message: "Your password and confirmation password do not match.",
            });
        }
        await later(1000);
        setLoading(true);
        registerAuth(data, history)
    };

    function later(delay) {
        return new Promise(function (resolve) {
            setTimeout(resolve, delay);
        });
    }

    useEffect(() => {
        let timer = setTimeout(() => setLoading(false), 3000);
        return () => {
            clearTimeout(timer);
        }
    }, [loading])

    // useEffect(() => {
    //     console.log("touched", formState.touched);
    // }, [formState])

    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h6 className="text-gray-600 text-sm font-bold">
                                        Sign up with
                                        </h6>
                                </div>
                                <div className="btn-wrapper text-center">
                                    <Button
                                        color="inline-flex items-center btn-secondary mr-1 mb-1 duration-300 transition transform hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg"
                                        types="button"
                                        label="Github"
                                        icon={
                                            <img
                                                alt="..."
                                                className="w-5 mr-1"
                                                src={githubImg}
                                            />
                                        }
                                    />
                                    <Button
                                        color="inline-flex items-center btn-secondary ml-1 mb-1 duration-300 transition transform hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg"
                                        types="button"
                                        label="Google"
                                        icon={
                                            <img
                                                alt="..."
                                                className="w-5 mr-1"
                                                src={googleImg}
                                            />
                                        }
                                    />
                                </div>
                                <hr className="mt-6 border-b-1 border-gray-400" />
                            </div>

                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-gray-500 text-center mb-3 font-bold">
                                    <small>Or sign up with credentials</small>
                                </div>
                                <form>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="name"
                                        >
                                            Name
                                            </label>
                                        <input
                                            autoFocus
                                            id="name"
                                            type="name"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder="Name"
                                            name="name"
                                            ref={register({ required: true, minLength: 5 })}
                                        />
                                        {errors.name?.type === "required" && <p className="text-red-500 text-xs mt-1">"Name is required"</p>}
                                        {errors.name?.type === "minLength" && <p className="text-red-500 text-xs mt-1">"Name must be 8 or more characters"</p>}
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="email"
                                        >
                                            Email
                                            </label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder="Email"
                                            name="email"
                                            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                                        />
                                        {errors.email?.type === "required" && <p className="text-red-500 text-xs mt-1">"Email address is required"</p>}
                                        {errors.email?.type === "pattern" && <p className="text-red-500 text-xs mt-1">"Email address is invalid"</p>}
                                        {auth.errorsRegister === "Email is already registered" && 
                                            <p className="text-red-500 text-xs mt-1">{auth.errorsRegister}</p>
                                        }
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold -mb-4"
                                            htmlFor="password"
                                        >
                                            Password
                                            </label>
                                        <PasswordPopover>
                                            {(
                                                props // validate, visible
                                            ) => (
                                                    <div className="relative">
                                                        <input
                                                            id="password"
                                                            className="overflow-hidden px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                                            type={!showPass ? 'password' : 'text'}
                                                            placeholder="Password"
                                                            name="password"
                                                            ref={register({ required: "Password is Required" })}
                                                            onFocus={() => props.visible(true)}
                                                            onBlur={() => props.visible(false)}
                                                            onChange={() =>
                                                                props.validate("password", getValues, setError, clearErrors)
                                                            }
                                                        />
                                                        <span
                                                            onClick={handlePass}
                                                            className="absolute bottom-0 right-0 flex items-center border-l border-gray-200 bg-gray-200 px-3.5 py-3.5 text-gray-500 cursor-pointer"
                                                        >
                                                            {!showPass ? <FaEye /> : <FaEyeSlash />}
                                                        </span>
                                                    </div>
                                                )}
                                        </PasswordPopover>

                                        {errors.password && (
                                            <p className="text-red-500 text-xs mt-1"> {errors.password.message} </p>
                                        )}
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold -mb-4"
                                            htmlFor="password"
                                        >
                                            Password
                                            </label>
                                        <PasswordPopover>
                                            {(
                                                props // validate, visible
                                            ) => (
                                                    <div className="relative">
                                                        <input
                                                            id="password2"
                                                            className="overflow-hidden px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                                            type={!showPass2 ? 'password' : 'text'}
                                                            placeholder="Confirm Password"
                                                            name="password2"
                                                            ref={register({ required: "Confirm password is Required" })}
                                                            onFocus={() => props.visible(true)}
                                                            onBlur={() => props.visible(false)}
                                                            onChange={() =>
                                                                props.validate("password2", getValues, setError, clearErrors)
                                                            }
                                                        />
                                                        <span
                                                            onClick={handlePass2}
                                                            className="absolute bottom-0 right-0 flex items-center border-l border-gray-200 bg-gray-200 px-3.5 py-3.5 text-gray-500 cursor-pointer"
                                                        >
                                                            {!showPass2 ? <FaEye /> : <FaEyeSlash />}
                                                        </span>
                                                    </div>
                                                )}
                                        </PasswordPopover>

                                        {errors.password2 && (
                                            <p className="text-red-500 text-xs mt-1"> {errors.password2.message} </p>
                                        )}
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="dateofBirth"
                                        >
                                            Date of birth
                                        </label>
                                        <DateofBirthPopover>
                                            {(
                                                props // validate, visible
                                            ) => (
                                                    <input
                                                        id="dateofBirth"
                                                        type="date"
                                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                                        name="dateofBirth"
                                                        ref={register({ required: "Date is Required" })}
                                                            onFocus={() => props.visible(true)}
                                                            onBlur={() => props.visible(false)}
                                                            onChange={() =>
                                                                props.validate("dateofBirth", getValues, setError, clearErrors)
                                                            }
                                                    />
                                                )}
                                        </DateofBirthPopover>
                                        {errors.dateofBirth && (
                                            <p className="text-red-500 text-xs mt-1"> {errors.dateofBirth.message} </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                id="customCheckLogin"
                                                type="checkbox"
                                                className="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                            />
                                            <span className="ml-2 text-sm font-semibold text-gray-700">
                                                I agree with the{" "}
                                                <a
                                                    href="#pablo"
                                                    className="text-purple-500"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    Privacy Policy
                                                </a>
                                            </span>
                                        </label>
                                    </div>

                                    <div className="text-center mt-6">
                                        <button
                                            type="button"
                                            className="flex items-center justify-center btn-dark duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black w-full py-3 disabled:opacity-40"
                                            onClick={handleSubmit(onSubmit)}
                                            disabled={formState.isSubmitting}
                                        >
                                            {loading && <FaSpinner className="animate-spin mr-2" />} Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6 relative">
                            <div className="w-12/12 text-gray-300">
                                <small>Do you have an account ? </small>
                                <Link to="/auth/login" className="text-gray-300">
                                    <span className="btn-secondary ml-2 duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black">Login</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerAuth: (userState, history) => {
            dispatch(RegisterAuthActions(userState, history));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
