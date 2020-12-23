const { FaPlus } = require("react-icons/fa")

const AddExpense = () => {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between items-center">
                        <h6 className="text-gray-800 text-md font-bold uppercase">Add Expense</h6>
                        <button
                            className="flex items-center text-xs uppercase px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded focus:ring-1 ring-purple-300 focus:outline-none"
                            type="button"
                        >
                            <FaPlus className="mr-1" />
                            Add
                        </button>
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
                                        className="px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
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
                                    <input
                                        id="cost"
                                        type="text"
                                        className="px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                        placeholder="Your expense cost"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="repeat"
                                    >
                                        Frequence
                                    </label>
                                    <input
                                        id="repeat"
                                        type="text"
                                        className="px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                        placeholder="Your payment frequence"
                                    />
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
                                        className="px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
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
                                        className="px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
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

export default AddExpense;
