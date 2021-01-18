import FullCalendar from '@fullcalendar/react';
import rrulePlugin from '@fullcalendar/rrule';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

import './style/Calendar.css';
import { connect } from 'react-redux';
import { getExpensesActions, getExpenseTotalActions } from '../../../redux/actions/expenseActions';
import { useEffect, useState } from 'react';
import ModalExpense from '../../Modals/ModalExpense';

const CardCalendar = (props) => {
    const { expenses, getExpenses, getExpensesTotal } = props;
    const [events, setEvents] = useState();
    const [showExpense, setShowExpense] = useState(false);
    const [dataModal, setDataModal] = useState({});

    const handleEventClick = (data) => {
        setDataModal(data);
        setShowExpense(!showExpense);
    }

    useEffect(() => {
        getExpenses();
        getExpensesTotal();
    }, [getExpenses, getExpensesTotal]);

    useEffect(() => {
        if (expenses.length) {
            let events = []
            expenses.forEach(e => {
                events.push({
                    id: e.id,
                    title: e.title,
                    rrule: {
                        freq: e.repeat ? e.repeat.toLowerCase() : 'daily',
                        dtstart: e.start_date ? e.start_date : e.createdAt, // will also accept '20120201T103000'
                        until: e.limit_date ? e.limit_date : e.createdAt, // will also accept '20120201'
                    },
                    extendedProps: {
                        cost: e.cost,
                        repeat: e.repeat ? e.repeat.toLowerCase() : 'One time',
                        start_date: e.start_date ? e.start_date : "", // will also accept '20120201T103000'
                        limit_date: e.limit_date ? e.limit_date : "", // will also accept '20120201'
                    }
                })
            })
            setEvents(events)
        }
    }, [expenses]);

    return (
        <>
            { showExpense && <ModalExpense handleEventClick={handleEventClick} dataModal={dataModal} />}
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between items-center">
                        <h6 className="text-gray-800 text-md font-bold uppercase">Expense schedule</h6>
                    </div>
                </div>
                <div className="px-4 lg:px-10 py-10 pt-0">
                    <div className="pt-4">
                        <FullCalendar
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin, rrulePlugin]}
                            headerToolbar={{
                                left: 'prev,next today',
                                center: 'title',
                                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                            }}
                            initialView="dayGridMonth"
                            weekends={true}
                            events={events}
                            eventClick={handleEventClick}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expense.expensesUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getExpenses: () => dispatch(getExpensesActions()),
        getExpensesTotal: () => dispatch(getExpenseTotalActions()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardCalendar);
