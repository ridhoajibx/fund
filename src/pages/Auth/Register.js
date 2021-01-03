import { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import githubImg from '../../assets/img/github.svg';
import googleImg from '../../assets/img/google.svg';
import Button from '../../components/Button/Button';
import useInput from '../../customHooks/useInput';
import { RegisterAuthActions } from '../../redux/actions/authActions';
import { ValidateRegister } from '../../variables/Validate';
import Loading from '../Loading/Loading';


const Register = (props) => {
    const history = useHistory()
    const { register, auth } = props;
    // State
    const [loading, setLoading] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [showPass2, setShowPass2] = useState(false);
    const [errors, setErrors] = useState({});
    // useInput
    const [name, bindName] = useInput();
    const [email, bindEmail] = useInput();
    const [password, bindPassword] = useInput();
    const [password2, bindPassword2] = useInput();
    const [dateOfBirth, bindDateOfBirth] = useInput();

    const handlePass = () => setShowPass(!showPass)
    const handlePass2 = () => setShowPass2(!showPass2)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!auth.isLoggedin) {
            setLoading(true)
            setErrors(ValidateRegister({ name, email, password, password2, dateOfBirth }));
            if (Object.keys(errors).length === 0) {
                register({ name, email, password, password2, dateOfBirth }, history);
            }
        }
    };

    useEffect(() => {
        let timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer)
    }, [loading])

    return (
        <>
            {!loading ?
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
                                    <form onSubmit={handleSubmit}>
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
                                                autoComplete="true"
                                                type="name"
                                                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                                placeholder="Name"
                                                {...bindName}
                                            />
                                            {errors.name &&
                                                <small className="text-red-500 my-1">
                                                    {`${errors.name}. `}
                                                </small>
                                            }
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
                                                autoComplete="true"
                                                type="email"
                                                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                                placeholder="Email"
                                                {...bindEmail}
                                            />
                                            {errors.email &&
                                                <small className="text-red-500 my-1">
                                                    {`${errors.email}. `}
                                                </small>
                                            }
                                            {auth.errorsRegister === 'Email is already registered' &&
                                                <small className="text-red-500 my-1">
                                                    {auth.errorsRegister}
                                                </small>
                                            }

                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="password"
                                            >
                                                Password
                                            </label>
                                            <div className="relative">
                                                <input
                                                    id="password"
                                                    name="password"
                                                    autoComplete="true"
                                                    type={!showPass ? 'password' : 'text'}
                                                    className="relative px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                                    placeholder="Password"
                                                    {...bindPassword}
                                                />
                                                <button
                                                    onClick={handlePass}
                                                    type="button"
                                                    className="absolute bottom-0 right-0 flex items-center border-l border-gray-300 px-3.5 py-3.5 text-gray-500 focus:outline-none"
                                                >
                                                    {!showPass ? <FaEye /> : <FaEyeSlash />}
                                                </button>
                                            </div>
                                            {errors.password &&
                                                <small className="text-red-500 my-1">
                                                    {`${errors.password}. `}
                                                </small>
                                            }

                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="password2"
                                            >
                                                Confirm Password
                                            </label>
                                            <div className="relative">
                                                <input
                                                    name="password2"
                                                    id="password2"
                                                    autoComplete="true"
                                                    type={!showPass2 ? 'password' : 'text'}
                                                    className="relative px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                                    placeholder="Confirm password"
                                                    {...bindPassword2}
                                                />
                                                <div
                                                    onClick={handlePass2}
                                                    className="absolute bottom-0 right-0 flex items-center border-l border-gray-300 px-3.5 py-3.5 text-gray-500 focus:outline-none cursor-pointer"
                                                >
                                                    {!showPass2 ? <FaEye /> : <FaEyeSlash />}
                                                </div>
                                            </div>
                                            {errors.password2 &&
                                                <small className="text-red-500 my-1">
                                                    {`${errors.password2}. `}
                                                </small>
                                            }
                                            {auth.errorsRegister === 'Password is not the same' &&
                                                <small className="text-red-500 my-1">
                                                    {auth.errorsRegister}
                                                </small>
                                            }
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="dateofBirth"
                                            >
                                                Date of birth
                                        </label>
                                            <input
                                                id="dateofBirth"
                                                name="dateofBirth"
                                                autoComplete="false"
                                                type="date"
                                                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                                {...bindDateOfBirth}
                                            />
                                            {errors.dateOfBirth &&
                                                <small className="text-red-500 my-1">
                                                    {`${errors.dateOfBirth}. `}
                                                </small>
                                            }
                                            {auth.errorsRegister === "Date of birth is required!" &&
                                                <small className="text-red-500 my-1">
                                                    {auth.errorsRegister}
                                                </small>
                                            }
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
                                            <Button
                                                handleClick={handleSubmit}
                                                color="btn-dark duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black w-full py-3"
                                                types="submit"
                                                label="create account"
                                                icon={loading ? <FaSpinner className="animate-spin mr-2" /> : null}
                                            />
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
                </div> :
                <Loading />
            }
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
        register: (userState, history) => {
            dispatch(RegisterAuthActions(userState, history));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
