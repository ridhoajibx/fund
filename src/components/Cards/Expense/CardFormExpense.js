import NumberFormat from 'react-number-format';
import { FaPlus, FaSpinner, FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { Listbox } from '@headlessui/react';
import { Controller, useForm } from 'react-hook-form';

const repeats = [
    { id: 1, name: 'Select ...', value: '', unavailable: true },
    { id: 2, name: 'One time', value: '', unavailable: false },
    { id: 3, name: 'Daily', value: 'Daily', unavailable: false },
    { id: 4, name: 'Weekly', value: 'Weekly', unavailable: false },
    { id: 5, name: 'Montly', value: 'Monthly', unavailable: false },
]

const CardFormExpense = () => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        control,
        handleSubmit,
        errors,
        formState,
        reset
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            title: '',
            cost: '',
            repeat: '',
            start_date: '',
            limit_date: '',
        },
    });

    const onSubmit = async (data, e) => {
        e.preventDefault();
        await later(1000);
        setLoading(true);
        console.log(data, 'cek data');
    }

    function later(delay) {
        return new Promise(function (resolve) {
            setTimeout(resolve, delay);
        });
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            setLoading(false)
        }, 3000);
        return () => {
            clearTimeout(timer)
        }
    }, [loading]);

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between items-center">
                            <h6 className="text-gray-800 text-md font-bold uppercase">Add Expense</h6>
                            <button
                                className="flex items-center btn-danger duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black"
                                type="button"
                                onClick={() => {
                                    reset({
                                        title: "",
                                        cost: "",
                                        repeat: "",
                                        start_date: "",
                                        limit_date: ""
                                    }, {
                                        errors: false, // errors will be reset 
                                        dirtyFields: true, // dirtyFields will not be reset
                                        isDirty: true, // dirty will not be reset
                                        isSubmitted: false,
                                        touched: false,
                                        isValid: false,
                                        submitCount: false,
                                    });
                                }}
                            >
                                <FaTrashAlt className="mr-1" /> Reset
                            </button>
                        </div>
                    </div>
                    <div className="flex-auto px-4 py-10 pt-0">
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
                                        name="title"
                                        className="px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition duration-150"
                                        placeholder="Expense title"
                                        ref={register({ required: true })}
                                    />
                                    {errors.title && <p className="text-red-500 text-xs mt-1">Expense title is required.</p>}
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
                                    <Controller
                                        render={(props) => (
                                            <NumberFormat
                                                className="px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                                thousandSeparator={true}
                                                prefix={'Rp. '}
                                                placeholder="input your currency"
                                                value={props.value}
                                                onValueChange={values => {
                                                    const { value } = values;
                                                    props.onChange(value)
                                                }}
                                            />
                                        )}
                                        name="cost"
                                        control={control}
                                        rules={{ required: true }}
                                    />
                                    {errors.cost && <p className="text-red-500 text-xs mt-1">Expense cost is required.</p>}
                                </div>
                            </div>

                            <div className="w-full px-4">
                                <div className="relative w-full mb-3">
                                    <label htmlFor="freq" className="uppercase block text-xs font-bold text-gray-700">Frequence</label>
                                    <Controller
                                        render={(props) => (
                                            
                                            <Listbox value={props.value} onChange={props.onChange}>
                                                {({ open }) => (
                                                    <>
                                                        <Listbox.Button className={
                                                            `${props.value === '' && 'text-gray-400'} mt-1 flex items-center justify-between w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none text-sm`
                                                        }>
                                                            {props.value ? props.value : 'One time'}
                                                            <svg
                                                                className={`w-5 h-5 duration-300 ${open && 'transform -rotate-180'}`}
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                            </svg>
                                                        </Listbox.Button>
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
                                                                    value={repeat.value}>
                                                                    {repeat.name}
                                                                </Listbox.Option>
                                                            ))}
                                                        </Listbox.Options>
                                                    </>
                                                )}
                                            </Listbox>
                                        )}
                                        name="repeat"
                                        control={control}
                                        rules={{ required: false }}
                                    />
                                </div>
                            </div>

                            <div className="w-1/2 md:w-full px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="start_date"
                                    >
                                        Start
                                    </label>
                                    <input
                                        id="start_date"
                                        type="date"
                                        name="start_date"
                                        className="px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition duration-150"
                                        ref={register()}
                                    />
                                </div>
                            </div>

                            <div className="w-1/2 md:w-full px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="limit_date"
                                    >
                                        Until
                                    </label>
                                    <input
                                        id="limit_date"
                                        name="limit_date"
                                        type="date"
                                        className="px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition duration-150"
                                        ref={register()}
                                    />
                                </div>
                            </div>
                            <div className="w-full px-4 text-center flex items-center mt-5">
                                <button
                                    className="w-full flex items-center justify-center btn-primary duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black"
                                    type="submit"
                                    disabled={formState.isSubmitting}
                                >
                                    {loading ? <FaSpinner className="animate-spin mr-2" /> : <FaPlus className="mr-1" />} Add
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CardFormExpense;
