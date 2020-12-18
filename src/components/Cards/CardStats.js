import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function CardStats({
    statSubtitle,
    statTitle,
    statArrow,
    statPercent,
    statPercentColor,
    statDescripiron,
    statIconName,
    statIconColor,
}) {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-gray-500 uppercase font-bold text-xs">
                                {statSubtitle}
                            </h5>
                            <span className="font-semibold text-xl text-gray-800">
                                {statTitle}
                            </span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                            <div
                                className={
                                    "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                                    statIconColor
                                }
                            >
                                {statIconName}
                            </div>
                        </div>
                    </div>
                    <p className="flex text-sm text-gray-500 mt-4">
                        <span className={statPercentColor + " mr-2 flex items-center"}>
                            {
                                statArrow === "up"
                                ? <FaArrowUp className="mr-2" />
                                : statArrow === "down"
                                    ? <FaArrowDown className="mr-2" />
                                    : null
                            }
                            {statPercent}%
                        </span>
                        <span className="whitespace-no-wrap">{statDescripiron}</span>
                    </p>
                </div>
            </div>
        </>
    );
}
