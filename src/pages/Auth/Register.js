import { useState } from 'react';
import { Link } from 'react-router-dom';
import githubImg from '../../assets/img/github.svg';
import googleImg from '../../assets/img/google.svg';
import Button from '../../components/Button/Button';
import useInput from '../../customHooks/useInput';

const Register = (props) => {
    const [data, setData] = useState(
        {
            name: "",
            email: "",
            password: "",
            passwod2: "",
            date: ""
        }
    );
    const [name, bindName, resetName] = useInput();
    const [email, bindEmail, resetEmail] = useInput();
    const [password, bindPassword, resetPassword] = useInput();
    const [password2, bindPassword2, resetPassword2] = useInput();
    const [date, bindDate, resetDate] = useInput();

    const handleSubmit = (e) => {
        e.preventDefault();
        setData({ name, email, password, password2, date });
        resetName()
        resetEmail()
        resetPassword()
        resetPassword2()
        resetDate()
    }
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
                                <form onSubmit={handleSubmit}>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="name"
                                        >
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            autoComplete="true"
                                            type="email"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder="Name"
                                            {...bindName}
                                        />
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
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="password"
                                        >
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            autoComplete="false"
                                            type="password"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder="Password"
                                            {...bindPassword}
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="confirm-password"
                                        >
                                            Confirm Password
                                        </label>
                                        <input
                                            id="confirm-password"
                                            autoComplete="false"
                                            type="password"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder="Confirm Password"
                                            {...bindPassword2}
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="dob"
                                        >
                                            Date of birth
                                        </label>
                                        <input
                                            id="dob"
                                            autoComplete="false"
                                            type="date"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            {...bindDate}
                                        />
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
                                            types="button"
                                            label="create account"
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
            </div>
        </>
    );
}

export default Register;
