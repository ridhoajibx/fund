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
                                    statTitle="10000000"
                                    statIconName={<FaWallet />}
                                    statIconColor="bg-purple-500"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                                <CardStats
                                    statSubtitle="BUDGET"
                                    statTitle="10000000"
                                    statIconName={<FaDonate/>}
                                    statIconColor="bg-red-500"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                                <CardStats
                                    statSubtitle="EXPENSE"
                                    statTitle="1000000"
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
