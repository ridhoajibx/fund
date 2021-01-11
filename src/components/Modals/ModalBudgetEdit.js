import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaEdit, FaSpinner, FaTimes, FaTrashAlt } from "react-icons/fa";
import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import { getBudgetActions, updateBudgetActions } from "../../redux/actions/budgetActions";

const ModalBudgetEdit = (props) => {
    const { modalHandler, data, updateBudget, getBudget } = props;
    const [loading, setLoading] = useState(false);

    const {
        register,
        control,
        setValue,
        handleSubmit,
        errors,
        formState,
        reset
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            set_budget: data.set_budget,
            limit_date: data.limit_date,
        },
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        await later(1000);
        setLoading(true);
        updateBudget(data);
    }

    function later(delay) {
        return new Promise(function (resolve) {
            setTimeout(resolve, delay);
        });
    }

    useEffect(() => {
        if (data) {
            setValue("set_budget", data.set_budget);
            setValue("limit_date", data.limit_date);
        }
    }, [data, setValue]);

    useEffect(() => {
        let timer = setTimeout(() => {
            getBudget();
            setLoading(false)
        }, 3000);
        return () => {
            clearTimeout(timer)
        }
    }, [loading, getBudget]);
    return (
        <>
            <div
                className="transform transition flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="bg-gray-200 border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                        {/*body*/}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="rounded-t bg-white mb-0 px-6 py-6">
                                <div className="text-center flex justify-between items-center">
                                    <h6 className="text-gray-800 text-md font-bold uppercase">Edit Budget</h6>
                                    <div className="flex">
                                        <button
                                            className="text-black px-2 focus:outline-none"
                                            type="button"
                                            onClick={() => modalHandler()}
                                        >
                                            <FaTimes className="text-lg" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-auto px-4 py-10 pt-0">
                                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                                    User Budget
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="set_budget"
                                            >
                                                Budget
                                            </label>
                                            <Controller
                                                render={(props) => (
                                                    <NumberFormat
                                                        className="px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                                        thousandSeparator={true}
                                                        prefix={'Rp. '}
                                                        placeholder="input your budget"
                                                        value={props.value}
                                                        onValueChange={values => {
                                                            const { value } = values;
                                                            props.onChange(value)
                                                        }}
                                                    />
                                                )}
                                                name="set_budget"
                                                control={control}
                                                rules={{ required: true }}
                                            />
                                            {errors.set_budget && <p className="text-red-500 text-xs mt-1">budget is required.</p>}
                                        </div>
                                    </div>

                                    <div className="w-full px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="limit_date"
                                            >
                                                Expired date
                                            </label>
                                            <input
                                                className="px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition duration-150"
                                                name="limit_date"
                                                type="date"
                                                ref={register({ required: true })}
                                            />
                                            {errors.limit_date?.type === "required" && <p className="text-red-500 text-xs mt-1">expired is required.</p>}
                                        </div>
                                    </div>
                                    <div className="w-full px-4 text-center flex items-center justify-end mt-5">
                                        <button
                                            className="mx-1 flex items-center justify-center btn-primary duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black"
                                            type="submit"
                                            disabled={formState.isSubmitting}
                                        >
                                            {loading ? <FaSpinner className="animate-spin mr-2" /> : <FaEdit className="mr-1" />} Update
                                        </button>
                                        <button
                                            className="mx-1 flex items-center btn-danger duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black"
                                            type="button"
                                            onClick={() => {
                                                reset({
                                                    set_budget: "",
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
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBudget: () => dispatch(getBudgetActions()),
        updateBudget: (state) => dispatch(updateBudgetActions(state)),
    }
}

export default connect(null, mapDispatchToProps)(ModalBudgetEdit);