import React from 'react';
import CardBudgets from '../../components/Cards/Budgets/CardBudgets';
import CardFormBudgets from '../../components/Cards/Budgets/CardFormBudgets';

const Budgets = () => {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full md:w-8/12 px-4">
                    <CardBudgets color="light" action/>
                </div>
                <div className="w-full md:w-4/12 px-4">
                    <CardFormBudgets />
                </div>
            </div>
        </>
    );
}

export default Budgets;
