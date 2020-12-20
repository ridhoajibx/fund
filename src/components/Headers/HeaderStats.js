import React from 'react';
import CardStats from '../Cards/CardStats';

import { FaDonate, FaShoppingBag, FaWallet } from 'react-icons/fa';

const HeaderStats = () => {
    return (
        <>
            {/* Header */}
            <div className="relative bg-purple-500 md:pt-32 pb-32 pt-12">
                <div className="px-4 md:px-10 mx-auto w-full">
                    <div>
                        {/* Card stats */}
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                                <CardStats
                                    statSubtitle="E-WALLET"
                                    statTitle="IDR 10,000,000.00"
                                    statArrow="up"
                                    statPercent="3.48"
                                    statPercentColor="text-green-500"
                                    statDescripiron="Since last month"
                                    statIconName={<FaWallet />}
                                    statIconColor="bg-purple-500"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                                <CardStats
                                    statSubtitle="BUDGET"
                                    statTitle="IDR 10,000,000.00"
                                    statArrow="down"
                                    statPercent="3.48"
                                    statPercentColor="text-red-500"
                                    statDescripiron="Since last week"
                                    statIconName={<FaDonate/>}
                                    statIconColor="bg-red-500"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                                <CardStats
                                    statSubtitle="EXPENSE"
                                    statTitle="IDR 1,000,000.00"
                                    statArrow="down"
                                    statPercent="1.10"
                                    statPercentColor="text-orange-500"
                                    statDescripiron="Since yesterday"
                                    statIconName={<FaShoppingBag />}
                                    statIconColor="bg-pink-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderStats;
