import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import Button from "../Button/Button";

export default function ModalPassword({ modalHandler }) {
    const [hidden, setHidden] = useState(true);
    const showPass = (e) => {
        e.preventDefault()
        setHidden(!hidden)
    }
    return (
        <>
            <div
                className="transform transition -rotate-6 hover:rotate-0 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
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
                        <div className="flex-auto px-4 lg:px-10 pb-5">
                            <form>
                                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                                    User Information
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="password"
                                            >
                                                New password
                                            </label>
                                            <input
                                                id="password"
                                                type={hidden ? 'password' : 'text'}
                                                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition duration-150"
                                                defaultValue="password"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="password2"
                                            >
                                                Confirm password
                                            </label>
                                            <input
                                                id="password2"
                                                type={hidden ? 'password' : 'text'}
                                                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition duration-150"
                                                defaultValue="password"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <Button 
                                            color="btn-round p-2 duration-300 transform hover:scale-105"
                                            types="button"
                                            handleClick={showPass}
                                            icon={hidden ? <FaEye /> : <FaEyeSlash />}
                                            label=""
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end px-4 lg:px-10 pb-10 border-t border-solid border-gray-200 rounded-b">
                            <Button 
                                color="mr-2 btn-danger duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black"
                                label="close"
                                handleClick={() => modalHandler()}
                                types="button"
                            />
                            <Button
                                color="btn-primary duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black"
                                label="save"
                                handleClick={() => modalHandler()}
                                types="button"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}