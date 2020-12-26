import React from 'react';
import { FaPlus } from "react-icons/fa";
import Button from '../../Button/Button';
import NumberFormat from 'react-number-format';

const CardFormBudgets = () => {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between items-center">
                        <h6 className="text-gray-800 text-md font-bold uppercase">Add Budget</h6>
                        <Button
                            color="flex items-center btn-primary duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black"
                            types="button"
                            handleClick={(e) => e.preventDefault()}
                            icon={<FaPlus className="mr-1" />}
                            label="add"
                        />
                    </div>
                </div>
                <div className="flex-auto px-4 py-10 pt-0">
                    <form>
                        <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                            User Budget
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="cost"
                                    >
                                        Budget
                                    </label>
                                    <NumberFormat
                                        className="px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                        thousandSeparator={true}
                                        prefix={'Rp. '}
                                        placeholder="input your budget"
                                    />
                                </div>
                            </div>

                            <div className="w-full px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="expdate"
                                    >
                                        Expired date
                                    </label>
                                    <input
                                        id="expdate"
                                        type="date"
                                        className="px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition duration-150"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CardFormBudgets;
