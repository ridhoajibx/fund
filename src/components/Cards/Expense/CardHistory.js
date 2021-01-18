import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { formatMoney } from '../../../variables/Event';

import { FaTrashAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import { getExpensesActions, getExpenseTotalActions } from '../../../redux/actions/expenseActions';
import { swalWithTWButton } from '../../Button/swalWithTWButton';
import axios from 'axios';

const CardHistory = (props) => {
    const { color, action, expenses, getExpenses, getExpensesTotal } = props;

    const handleDelete = (id) => {
        const auth = localStorage.getItem("auth");
        const authObj = JSON.parse(auth);
        const { token } = authObj;
        if (token) {
            const header = {
                headers: {
                    'access_token': token
                }
            }
            swalWithTWButton.fire({
                title: 'Delete!',
                text: "Are you sure to delete your expense?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await later(1000);
                    axios.delete(`/expenses/delete/${id}`, header)
                        .then(response => {
                            getExpenses();
                            getExpensesTotal();
                            swalWithTWButton.fire({
                                title: 'Success',
                                icon: 'success',
                                text: 'Your expense has been deleted!'
                            })
                        })
                        .catch(error => {
                            const errorMsg = error.response.data.msg;
                            swalWithTWButton.fire({
                                icon: 'error',
                                title: 'Opps!',
                                text: `${errorMsg}`
                            });
                            console.log(errorMsg, 'cek error delete expense');
                        })
                }
            })
        }
    }

    function later(delay) {
        return new Promise(function (resolve) {
            setTimeout(resolve, delay);
        })
    }

    useEffect(() => {
        getExpenses();
        getExpensesTotal();
    }, [getExpenses, getExpensesTotal]);

    return (
        <>
            <div
                className={
                    "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                    (color === "light" ? "bg-white" : "bg-purple-800 text-white")
                }
            >
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className={
                                    "font-semibold text-lg " +
                                    (color === "light" ? "text-gray-800" : "text-white")
                                }
                            >
                                Expense History
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-gray-100 text-gray-600 border-gray-200"
                                            : "bg-purple-800 text-purple-300 border-purple-700")
                                    }
                                >
                                    Expense
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-gray-100 text-gray-600 border-gray-200"
                                            : "bg-purple-800 text-purple-300 border-purple-700")
                                    }
                                >
                                    Payment cost
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-gray-100 text-gray-600 border-gray-200"
                                            : "bg-purple-800 text-purple-300 border-purple-700")
                                    }
                                >
                                    Frequence
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-gray-100 text-gray-600 border-gray-200"
                                            : "bg-purple-800 text-purple-300 border-purple-700")
                                    }
                                >
                                    Start
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-gray-100 text-gray-600 border-gray-200"
                                            : "bg-purple-800 text-purple-300 border-purple-700")
                                    }
                                >
                                    Until
                                </th>
                                {action &&
                                    <th
                                        className={
                                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                                            (color === "light"
                                                ? "bg-gray-100 text-gray-600 border-gray-200"
                                                : "bg-purple-800 text-purple-300 border-purple-700")
                                        }
                                    >Action
                                    </th>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                expenses.length > 0 ?
                                    expenses.map((expense) => (
                                        <tr key={expense.id}>
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                                <span
                                                    className={
                                                        "font-bold " +
                                                        +(color === "light" ? "text-gray-700" : "text-white")
                                                    }
                                                >
                                                    {expense.title}
                                                </span>
                                            </th>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                                Rp. {formatMoney(expense.cost)}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                                {expense.repeat ? expense.repeat : "One time"}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                                <div className="flex items-center">
                                                    <span className="mr-2">{expense.start_date ? expense.start_date : expense.createdAt}</span>
                                                </div>
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                                <div className="flex items-center">
                                                    <span className="mr-2">{expense.limit_date ? expense.limit_date : expense.createdAt}</span>
                                                </div>
                                            </td>
                                            {action &&
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                                    <button
                                                        className="flex items-center p-3 btn-danger duration-300 transition transform hover:scale-105 focus:scale-105"
                                                        type="button"
                                                        onClick={() => handleDelete(expense.id)}
                                                    >
                                                        <FaTrashAlt />
                                                    </button>
                                                </td>
                                            }
                                        </tr>
                                    )) :
                                    <tr>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                            <span
                                                className={
                                                    "font-bold " +
                                                    +(color === "light" ? "text-gray-700" : "text-white")
                                                }
                                            >
                                                Yout don't have any expense!
                                        </span>
                                        </th>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expense.expensesUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getExpenses: () => dispatch(getExpensesActions()),
        getExpensesTotal: () => dispatch(getExpenseTotalActions()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardHistory);

CardHistory.defaultProps = {
    color: "light",
};

CardHistory.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};