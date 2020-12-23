import React from 'react';
import PropTypes from 'prop-types';

import { Event, formatMoney } from '../../../variables/Event';

import TableDropdown from '../../Dropdown/TableDropdown';

const History = ({ color, action }) => {
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
                                    >Action</th>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {Event.map((item) => (
                                <tr key={item.id}>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                        <span
                                            className={
                                                "font-bold " +
                                                +(color === "light" ? "text-gray-700" : "text-white")
                                            }
                                        >
                                            {item.title}
                                        </span>
                                    </th>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                        IDR {formatMoney(item.extendedProps.cost)}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                        {item.extendedProps.repeat}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                        <div className="flex items-center">
                                            <span className="mr-2">{item.rrule.dtstart}</span>
                                        </div>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                        <div className="flex items-center">
                                            <span className="mr-2">{item.rrule.until}</span>
                                        </div>
                                    </td>
                                    {action &&
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right">
                                            <TableDropdown color={color} id={item.id}/>
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

export default History;

History.defaultProps = {
    color: "light",
};

History.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};