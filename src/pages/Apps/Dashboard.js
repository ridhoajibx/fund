import React from 'react';
import CardBarChart from '../../components/Cards/CardBarChart';
import History from '../../components/Cards/Expense/History';

const Dashboard = () => {
    return (
        <>
            <div className="flex flex-wrap">
                {/* <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                <CardLineChart />
                </div> */}
                <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
                    <CardBarChart />
                </div>
            </div>
            <div className="flex flex-wrap mt-4">
                <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
                    <History color="light" />
                </div>
                {/* <div className="w-full xl:w-4/12 px-4">
                <CardSocialTraffic />
                </div> */}
            </div>
        </>
    );
}

export default Dashboard;
