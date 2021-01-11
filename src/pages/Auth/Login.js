import { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import githubImg from '../../assets/img/github.svg';
import googleImg from '../../assets/img/google.svg';
import Button from '../../components/Button/Button';
import { LoginAuthActions } from '../../redux/actions/authActions';
import { useForm } from "react-hook-form";
import PasswordPopover from '../../variables/PasswordPopover';
import Loading from '../Loading/Loading';

const Login = (props) => {
    const {
        register,
        handleSubmit,
        errors,
        getValues,
        setError,
        clearErrors,
        formState,
    } = useForm();

    const { login, auth } = props;
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [loadingPage, setLoadingPage] = useState(true);
    const [showPass, setShowPass] = useState(false);

    const handlePass = () => setShowPass(!showPass);

    const onSubmit = async (data, event) => {
        if (event) event.preventDefault();
        await later(1000);
        setLoading(true);
        login(data, history);
    };

    function later(delay) {
        return new Promise(function (resolve) {
            setTimeout(resolve, delay);
        });
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            setLoading(false)
            setLoadingPage(false)
        }, 3000);
        return () => {
            clearTimeout(timer)
        }
    }, [loading, loadingPage]);

    // useEffect(() => {
    //     console.log(("touched", formState.touched), ("submitted", formState));
    // }, [formState])

    return (
        <>
        {loadingPage && <Loading /> }
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h6 className="text-gray-600 text-sm font-bold">
                                        Sign in with
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
                                        color="inline-flex items-center btn-secondary ml-1 mb-1 duration-300 transform hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg"
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
                                    <small>Or sign in with credentials</small>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
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
                                            ref={register({ required: true, pattern: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/i })}
                                        />
                                        {errors.email?.type === "required" && <p className="text-red-500 text-xs mt-1">Email address is required</p>}
                                        {errors.email?.type === "pattern" && <p className="text-red-500 text-xs mt-1">Email address is invalid</p>}
                                        {auth.errorsLogin === "User not found" &&
                                            <p className="text-red-500 text-xs mt-1"> {auth.errorsLogin} </p>
                                        }
                                        {auth.errorsLogin === "Invalid email format" &&
                                            <p className="text-red-500 text-xs mt-1"> {auth.errorsLogin} </p>
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
                                        {auth.errorsLogin === "Wrong password" &&
                                            <p className="text-red-500 text-xs mt-1"> {auth.errorsLogin} </p>
                                        }
                                    </div>

                                    <div className="text-center mt-6">
                                        <button
                                            type="submit"
                                            className="flex items-center justify-center btn-dark duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black w-full py-3 disabled:opacity-40"
                                            disabled={formState.isSubmitting}
                                        >
                                            {loading && <FaSpinner className="animate-spin mr-2" />} Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6 relative">
                            <div className="w-1/2">
                                <Link
                                    to="/auth/forgot-password"
                                    className="text-gray-300"
                                >
                                    <small>Forgot password?</small>
                                </Link>
                            </div>
                            <div className="w-1/2 text-right">
                                <Link to="/auth/register" className="text-gray-300">
                                    <small>Create new account</small>
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
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (loginState, history) => {
            dispatch(LoginAuthActions(loginState, history));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
