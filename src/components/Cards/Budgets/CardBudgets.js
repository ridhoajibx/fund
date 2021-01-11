import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { formatMoney } from '../../../variables/Event';
import ModalBudgetEdit from '../../Modals/ModalBudgetEdit';
import { deleteBudgetActions } from '../../../redux/actions/budgetActions';

const CardBudgets = (props) => {
    const { color, action, budget, deleteBudget } = props;
    const [modal, setModal] = useState(false);
    const [data, setdata] = useState({});

    const modalHandler = (item) => {
        setdata(item)
        setModal(!modal)
    };
    return (
        <>
            { modal && <ModalBudgetEdit modalHandler={modalHandler} data={data} />}

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
                                    "font-semibold text-lg uppercase " +
                                    (color === "light" ? "text-gray-800" : "text-white")
                                }
                            >
                                Budget
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
                                    Budget Summary
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-gray-100 text-gray-600 border-gray-200"
                                            : "bg-purple-800 text-purple-300 border-purple-700")
                                    }
                                >
                                    Created
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-gray-100 text-gray-600 border-gray-200"
                                            : "bg-purple-800 text-purple-300 border-purple-700")
                                    }
                                >
                                    Expired date
                                </th>
                                {action &&
                                    <th
                                        className={
                                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                                            (color === "light"
                                                ? "bg-gray-100 text-gray-600 border-gray-200"
                                                : "bg-purple-800 text-purple-300 border-purple-700")
                                        }
                                    >Action</th>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {budget.budgets.length ?
                                budget.budgets.map((budget) => (
                                    <tr key={budget.id}>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                            <span
                                                className={
                                                    "font-bold " +
                                                    +(color === "light" ? "text-gray-700" : "text-white")
                                                }
                                            >
                                                Rp. {formatMoney(budget.set_budget)}
                                            </span>
                                        </th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                            {budget.createdAt}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                            {budget.limit_date}
                                        </td>
                                        {action &&
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right">
                                                <button
                                                    className="btn-primary m-1"
                                                    type="button"
                                                    onClick={() => modalHandler(budget)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn-danger m-1"
                                                    type="button"
                                                    onClick={() => deleteBudget()}
                                                >
                                                    Delete
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
                                            You don't have any budgets yet!
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
        budget: state.budget,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBudget: () => dispatch(deleteBudgetActions())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardBudgets);

CardBudgets.defaultProps = {
    color: "light",
};

CardBudgets.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
