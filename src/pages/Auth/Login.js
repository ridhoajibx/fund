import { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import githubImg from '../../assets/img/github.svg';
import googleImg from '../../assets/img/google.svg';
import Button from '../../components/Button/Button';
import useInput from '../../customHooks/useInput';
import { LoginAuthActions } from '../../redux/actions/authActions';
import Loading from '../Loading/Loading';

const Login = (props) => {
    const { login, auth } = props;
    const history = useHistory();
    const [loading, setLoading] = useState(false)
    const [email, bindEmail] = useInput();
    const [password, bindPassword] = useInput();
    const onSubmit = (e) => {
        e.preventDefault();
        if (!loading) {
            setLoading(true)
            login({ email, password }, history);
        }
    }

    useEffect(() => {
        let timer = setTimeout(() => setLoading(false), 2000);
        return () =>  clearTimeout(timer) 
    }, [loading]);
    
    return (
        <>
            {!loading ?
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
                                    {auth.errors &&
                                        <div className="bg-red-200 py-2 flex items-center justify-center rounded border border-red-300 text-red-500 text-center mb-3 font-bold">
                                            <small>{auth.errors}</small>
                                        </div>
                                    }
                                    <form onSubmit={onSubmit}>
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="email"
                                            >
                                                Email
                                        </label>
                                            <input
                                                autoFocus
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
                                                autoComplete="true"
                                                type="password"
                                                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                                placeholder="Password"
                                                {...bindPassword}
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
                                                handleClick={onSubmit}
                                                color="flex items-center justify-center btn-dark duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black w-full py-3"
                                                types="submit"
                                                label="sign in"
                                                icon={loading ? <FaSpinner className="animate-spin mr-2" /> : null}
                                            />
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
        login: (loginState, history) => {
            dispatch(LoginAuthActions(loginState, history));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
