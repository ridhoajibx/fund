import FullCalendar from '@fullcalendar/react';
import rrulePlugin from '@fullcalendar/rrule';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { Event } from '../../../variables/Event';

import '../../../assets/css/calendar.css'

const CardCalendar = () => {
    return (
        <>
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
                            events={Event}
                        // eventClick={handleEventClick}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardCalendar;
