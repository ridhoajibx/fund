import React from 'react';
import CardCalendar from '../../components/Cards/Expense/CardCalendar';
import CardFormExpense from '../../components/Cards/Expense/CardFormExpense';
// import CardHistory from '../../components/Cards/Expense/CardHistory';

const Expense = () => {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full md:w-8/12 px-4">
                    <CardCalendar />
                </div>
                <div className="w-full md:w-4/12 px-4">
                    <CardFormExpense />
                </div>
            </div>
            {/* <div className="flex flex-wrap">
                <div className="w-full px-4">
                    <CardHistory color="light" action/>
                </div>
            </div> */}
        </>
    );
}

export default Expense;
