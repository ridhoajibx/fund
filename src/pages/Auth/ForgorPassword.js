import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

const ForgotPassword = (props) => {
    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="flex items-center justify-between lg:justify-center text-center mb-3">
                                    <h6 className="text-gray-600 text-sm font-bold">
                                        Reset password
                                    </h6>
                                    <div className="flex flex-wrap relative lg:hidden">
                                        <div className="w-12/12 text-gray-700">
                                            <small>Back to </small>
                                            <Link to="/auth/login" className="text-gray-300">
                                                <span className="btn-secondary ml-2 duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black">Login</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <hr className="mt-6 border-b-1 border-gray-400" />
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <form>
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
                                            placeholder="Input your email"
                                        />
                                    </div>

                                    <div className="text-center mt-6">
                                        <Button
                                            handleClick={(e) => e.preventDefault()}
                                            color="btn-dark duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black w-full py-3"
                                            types="button"
                                            label="Reset password"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;