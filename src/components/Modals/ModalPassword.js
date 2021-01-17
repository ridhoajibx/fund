import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaSpinner, FaTimes } from "react-icons/fa";
import PasswordPopover from "../../variables/PasswordPopover";
import { swalWithTWButton } from "../Button/swalWithTWButton";

export default function ModalPassword(props) {
    const {
        register,
        handleSubmit,
        errors,
        getValues,
        setError,
        clearErrors,
        formState,
        reset
    } = useForm();

    const { modalHandler } = props;
    const [showPass, setShowPass] = useState(false);
    const [showPass2, setShowPass2] = useState(false);
    const handlePass = () => setShowPass(!showPass)
    const handlePass2 = () => setShowPass2(!showPass2)

    const onSubmit = async (data, e) => {
        e.preventDefault();
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
        const authObj = JSON.parse(localStorage.getItem('auth'));
        const { token } = authObj;
        if (token) {
            const header = {
                headers: {
                    'access_token': token
                }
            }
            try {
                const res = await axios.put("/users/changepassword", data, header);
                if (res.status === 200) {
                    swalWithTWButton.fire({
                        icon: 'success',
                        title: 'Great!',
                        text: res.data.msg
                    });
                } else {
                    throw res
                }
            } catch (error) {
                swalWithTWButton.fire({
                    icon: 'error',
                    title: 'Ops!',
                    text: error.data.msg
                });
            }
        }
        reset();
    }

    function later(delay) {
        return new Promise(function (resolve) {
            setTimeout(resolve, delay);
        });
    }

    return (
        <>
            <div
                className="transform transition flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                onDoubleClick={() => modalHandler()}
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="bg-gray-200 border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-center justify-between rounded-t bg-white mb-0 px-6 py-6">
                            <h3 className="text-xl font-semibold uppercase">
                                Change password
                            </h3>
                            <button
                                className="text-black px-2 focus:outline-none"
                                onClick={() => modalHandler()}
                            >
                                <FaTimes className="text-lg" />
                            </button>
                        </div>
                        {/*body*/}
                        <form>
                            <div className="flex-auto px-4 lg:px-10 pb-5">
                                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                                    User Information
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold -mb-4"
                                            htmlFor="password"
                                        >
                                            New password
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
                                                        placeholder="New password"
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
                                            Confirm password
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
                                </div>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end px-4 lg:px-10 pb-10 border-t border-solid border-gray-200 rounded-b">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center btn-primary duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black disabled:opacity-40 mr-2"
                                    onClick={handleSubmit(onSubmit)}
                                    disabled={formState.isSubmitting}
                                >
                                    {formState.isSubmitting && <FaSpinner className="animate-spin mr-2" />} change
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}