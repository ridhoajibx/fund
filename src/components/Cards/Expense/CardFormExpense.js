import NumberFormat from 'react-number-format';
import { FaPlus } from "react-icons/fa";
import { useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import Button from '../../Button/Button';

const repeats = [
    { id: 1, name: 'Select...', unavailable: true },
    { id: 2, name: 'Daily', unavailable: false },
    { id: 3, name: 'Weekly', unavailable: false },
    { id: 4, name: 'Montly', unavailable: false },
]

const CardFormExpense = () => {
    const [selectedRepeat, setSelectedRepeat] = useState(repeats[0])
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between items-center">
                        <h6 className="text-gray-800 text-md font-bold uppercase">Add Expense</h6>
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
                            User Expense
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="expense"
                                    >
                                        Expense
                                    </label>
                                    <input
                                        id="expense"
                                        type="text"
                                        className="px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition duration-150"
                                        placeholder="Expense name"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="cost"
                                    >
                                        Cost
                                    </label>
                                    <NumberFormat
                                        className="px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                        thousandSeparator={true}
                                        prefix={'Rp. '}
                                        placeholder="input your currency"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-4">
                                <div className="relative w-full mb-3">
                                    <label htmlFor="freq" className="uppercase block text-xs font-bold text-gray-700">Frequence</label>
                                    <Listbox value={selectedRepeat} onChange={setSelectedRepeat}>
                                        {({ open }) => (
                                            <>
                                                <Listbox.Button className={
                                                    `${selectedRepeat.unavailable && 'text-gray-400'} mt-1 flex items-center justify-between w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none text-sm`
                                                }>
                                                    {selectedRepeat.name}
                                                    <svg
                                                        className={
                                                            `w-5 h-5 duration-300 
                                                        ${open ? 'transform -rotate-180' : ''}`
                                                        }
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                    </svg>
                                                </Listbox.Button>
                                                <Transition
                                                    show={open}
                                                    enter="transition ease-in-out duration-100"
                                                    enterFrom="transform scale-75"
                                                    enterTo="transform scale-100"
                                                    leave="transition ease-in-out duration-75"
                                                    leaveFrom="transform scale-100"
                                                    leaveTo="transform scale-75"
                                                >
                                                    <Listbox.Options className="absolute right-0 w-full z-40 text-sm bg-white border-1 border-gray-300 shadow-lg rounded-b-lg focus:outline-none overflow-hidden">
                                                        {repeats.map(repeat => (
                                                            <Listbox.Option
                                                                className={
                                                                    `py-2 px-3 
                                                                    ${!repeat.unavailable ? 'text-gray-800 hover:text-white hover:bg-purple-600' : 'text-gray-400 hover:text-gray-400 hover:bg-gray-200'} 
                                                                    focus:outline-none cursor-pointer`
                                                                }
                                                                disabled={repeat.unavailable}
                                                                key={repeat.id}
                                                                value={repeat}>
                                                                {repeat.name}
                                                            </Listbox.Option>
                                                        ))}
                                                    </Listbox.Options>
                                                </Transition>
                                            </>
                                        )}
                                    </Listbox>
                                </div>
                            </div>

                            <div className="w-1/2 md:w-full px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="dtstart"
                                    >
                                        Start
                                    </label>
                                    <input
                                        id="dtstart"
                                        type="date"
                                        className="px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition duration-150"
                                    />
                                </div>
                            </div>

                            <div className="w-1/2 md:w-full px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="dtend"
                                    >
                                        Until
                                    </label>
                                    <input
                                        id="dtend"
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

export default CardFormExpense;
