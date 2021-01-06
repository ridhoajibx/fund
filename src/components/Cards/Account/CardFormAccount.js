import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { connect } from "react-redux";
import { updateUserActions, userActions } from "../../../redux/actions/authActions";

const CardFormAccount = (props) => {
    const { update, auth, getUser } = props;
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, setValue, errors, formState } = useForm({
        defaultValues: {
            name: auth.user.name,
            dateOfBirth: auth.user.dateOfBirth ? auth.user.dateOfBirth : '',
        }
    });

    const onSubmit = async (userState) => {
        await later(1000);
        setLoading(true);
        update(userState);
        getUser();
    };

    function later(delay) {
        return new Promise(function (resolve) {
            setTimeout(resolve, delay);
        });
    }

    useEffect(() => {
        if (auth) {
            setValue("name", auth.user.name);
            setValue("dateOfBirth", auth.user.dateOfBirth);
        }
    }, [auth, setValue]);

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
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-gray-800 text-lg font-bold uppercase">My account</h6>
                        <button
                            onClick={handleSubmit(onSubmit)}
                            type="button"
                            className="flex items-center justify-center btn-primary duration-300 transition transform hover:scale-105 hover:shadow-offset-black focus:scale-105 focus:shadow-offset-black disabled:opacity-40"
                            disabled={formState.isSubmitting}
                        >
                            {loading && <FaSpinner className="animate-spin mr-2" />} Setting
                        </button>
                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form>
                        <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                            User Information
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                        placeholder="Name"
                                        name="name"
                                        ref={register({ required: true, minLength: 5 })}
                                    />
                                    {errors.name?.type === "required" && <p className="text-red-500 text-xs mt-1">Name is required</p>}
                                    {errors.name?.type === "minLength" && <p className="text-red-500 text-xs mt-1">Name must be at least 8 or more characters long</p>}
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="dateOfBirth"
                                    >
                                        Date of birth
                                    </label>
                                    <input
                                        id="dateOfBirth"
                                        type="date"
                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                        placeholder="Name"
                                        name="dateOfBirth"
                                        ref={register({ required: true })}
                                    />
                                    {errors.dateOfBirth?.type === "required" && <p className="text-red-500 text-xs mt-1">Date is required</p>}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        update: (state) => dispatch(updateUserActions(state)),
        getUser: () => dispatch(userActions())
    }
}

export default connect(null, mapDispatchToProps) (CardFormAccount);
