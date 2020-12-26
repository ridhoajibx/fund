import React from 'react';
import PropTypes from 'prop-types';

import { formatMoney } from '../../../variables/Event';

import TableDropdown from '../../Dropdown/TableDropdown';

const budgets = [
    {
        id: 1,
        set_budget: '1000000',
        limit_date: '2020-12-31',
        createdAt: '2020-12-01'
    },
    {
        id: 2,
        set_budget: '2000000',
        limit_date: '2021-01-31',
        createdAt: '2021-01-01'
    }
]

const CardBudgets = ({color, action}) => {
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
                            {budgets.map((budget) => (
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
                                            <TableDropdown color={color} id={budget.id}/>
                                        </td>
                                    }
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default CardBudgets;

CardBudgets.defaultProps = {
    color: "light",
};

CardBudgets.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
