import React, { useCallback, useEffect } from 'react';
import CardStats from '../Cards/CardStats';

import { FaDonate, FaShoppingBag, FaWallet } from 'react-icons/fa';

import { connect } from 'react-redux';
import { getBudgetActions } from '../../redux/actions/budgetActions';
import { getExpenseTotalActions } from '../../redux/actions/expenseActions';
import { swalWithTWButton } from '../Button/swalWithTWButton';
import { useHistory } from 'react-router-dom';

const HeaderStats = (props) => {
    const history = useHistory();
    const { budget, getBudget, getExpenseTotal, expenseTotal } = props;

    const alert = useCallback(() => {
        let { total, budgetAmount } = expenseTotal;
        const result = total / budgetAmount * (100);
        if ( result >= 90) {
            swalWithTWButton.fire({
                icon: 'warning',
                title: 'expense',
                text: expenseTotal.msg
            })
        }
    }, [expenseTotal])
    
    useEffect(() => {
        getBudget();
        getExpenseTotal(history);
    }, [getBudget, getExpenseTotal, history]);
    
    useEffect(() => {
        if (expenseTotal) {
            return () => alert();
        }
    }, [expenseTotal, alert]);


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
                                {budget.budgets.length ?
                                    budget.budgets.map((data, index) => (
                                        <CardStats key={index}
                                            statSubtitle="BUDGET"
                                            statTitle={data.set_budget}
                                            statIconName={<FaDonate />}
                                            statIconColor="bg-red-500"
                                        />
                                    ))
                                    :
                                    <CardStats
                                        statSubtitle="BUDGET"
                                        statTitle="0"
                                        statIconName={<FaDonate />}
                                        statIconColor="bg-red-500"
                                    />
                                }
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                                <CardStats
                                    statSubtitle="EXPENSE"
                                    statTitle={expenseTotal.total ? expenseTotal.total : '0'}
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

const mapStateToProps = (state) => {
    return {
        budget: state.budget,
        expenseTotal: state.expense.total,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBudget: () => dispatch(getBudgetActions()),
        getExpenseTotal: (history) => dispatch(getExpenseTotalActions(history)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderStats);
