import React from "react";
import "./WeekView.css";

import { useCalendar } from "../context/CalendarContext";
import{
    WEEK_DAYS,
    getWeekDates,
    isToday,
    isSameDay
} from "./CalendarUtils";

function WeekView(){
    const {
        currentDate,
        selectedDate,
        setSelectedDate,
        events,
        search,
        category,
        openModal

    } = useCalendar()

    const weekDates = getWeekDates(currentDate);

    const filteredEvents = events.filter((event) => {
        const matchSearch = event.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchsCategory = 
        category === "All" || event.category === category;
        return matchSearch && matchsCategory;
    });
    const getEvents = (date) => 
        filteredEvents.filter((event) => 
        isSameDay(new Date(event.date), date)
    );
    return (
        
        <div className="w-view">
            {weekDates.map((date, index) => (
                <div
                    key={index}
                    className={`wd-col 
                        ${isToday(date)? "today" : ""}
                        ${isSameDay(date, selectedDate)
                            ? "selected" 
                            : ""
                        }`}
                        onClick={() => setSelectedDate(date)}
                >
                    <div className="wd-header">
                        <h4>{WEEK_DAYS[date.getDay()]}</h4>
                        
                        <span>{date.getDate()}</span>
                    </div>

                    <div className="w-events">
                        {getEvents(date).length === 0 ? (
                            <p className="empty">
                                No Events
                            </p>
                        ) : (
                            getEvents(date).map((event) => (
                                <div 
                                    key={event.id}
                                    className="w-event"
                                    style={{background: event.color}}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        openModal(event);
                                    }}
                                    >
                                    <strong>{event.title}</strong>

                                    {event.description && (
                                        <p>{event.description}</p>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default WeekView;

