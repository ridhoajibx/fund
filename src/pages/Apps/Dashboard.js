import React from 'react';
import CardBarChart from '../../components/Cards/CardBarChart';
import CardHistory from '../../components/Cards/Expense/CardHistory';

const Dashboard = () => {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
                    <CardBarChart />
                </div>
            </div>
            <div className="flex flex-wrap mt-4">
                <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
                    <CardHistory color="light" />
                </div>
            </div>
        </>
    );
}

export default Dashboard;
