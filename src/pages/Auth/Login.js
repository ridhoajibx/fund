import { Link } from 'react-router-dom';
import githubImg from '../../assets/img/github.svg';
import googleImg from '../../assets/img/google.svg';
import Button from '../../components/Button/Button';

const Login = (props) => {
    return (
        <>
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
                                        color="inline-flex items-center btn-secondary mr-1 mb-1 duration-300 transition transform hover:scale-105 hover:shadow-lg"
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
                                        color="inline-flex items-center btn-secondary ml-1 mb-1 duration-300 transform hover:scale-105 hover:shadow-lg"
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
                                <form>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Email
                                        </label>
                                        <input
                                            autoComplete="true"
                                            type="email"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder="Email"
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Password
                                        </label>
                                        <input
                                            autoComplete="true"
                                            type="password"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder="Password"
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
                                                Remember me
                                            </span>
                                        </label>
                                    </div>

                                    <div className="text-center mt-6">
                                        <Button
                                            handleClick={() => props.setAuth(true)}
                                            color="btn-dark duration-300 transition transform hover:scale-105 hover:shadow-offset-black w-full py-3"
                                            types="button"
                                            label="sign in"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6 relative">
                            <div className="w-1/2">
                                <a
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    className="text-gray-300"
                                >
                                    <small>Forgot password?</small>
                                </a>
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

export default Login;
