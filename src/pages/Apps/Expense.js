import React from 'react';
import CardCalendar from '../../components/Cards/Expense/CardCalendar';
import AddExpense from '../../components/Cards/Expense/AddExpense';
import History from '../../components/Cards/Expense/History';

const Expense = () => {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full md:w-8/12 px-4">
                    <CardCalendar />
                </div>
                <div className="w-full md:w-4/12 px-4">
                    <AddExpense />
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full px-4">
                    <History color="light" action/>
                </div>
            </div>
        </>
    );
}

export default Expense;
