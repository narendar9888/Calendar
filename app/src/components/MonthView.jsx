import React from "react";
import "./MonthView.css";

import { useCalendar } from "../context/CalendarContext";

import {
    WEEK_DAYS,
    getMonthGrid,
    isSameDay,
    isToday
} from "./CalendarUtils"

const MonthView = () => {
    const {
        currentDate,
        events,
        search,
        category,
        selectedDate,
        setSelectDate,
        openModal,
    } = useCalendar();


    const calendar = getMonthGrid(currentDate);

    const filteredEvents = events.filter((event) =>{
        const matchSearch = event.title
        .toLowerCase()
        .includes(search.toLowerCase());

        const matchCategory = 
            category === "All" || event.category === category;

        return matchCategory && matchSearch;
    })

    const getEvent = (date) => {
        return filteredEvents.filter((event) => 
            isSameDay(new Date(event.date), date)
        );   
    };

    return (
        <div className="month-view">
            <div className="week-header">
                {WEEK_DAYS.map((day) => (
                    <div
                        className="week-day"
                        key={day}
                    >
                        {day}
                    </div>
                ))}
            </div>


            <div className="month-grid">
                {calendar.flat().map((date, index) => {
                    const dayEvents = getEvent(date);

                    const isCurrentMonth = 
                        date.getMonth() === currentDate.getMonth();

                    return (
                        <div
                            key={index}
                            className={`day-cell
                                ${!isCurrentMonth ? "other-month" : ""}
                                ${
                                    isToday(date)
                                        ? "today"
                                        : ""
                                }
                                ${
                                    isSameDay(
                                        date, 
                                        selectedDate
                                    )
                                        ? "selected"
                                        : ""
                                }`}
                            onClick={() => 
                                setSelectDate(date)
                            }
                        >
                            <div className="day-number">
                                {date.getDate()}
                            </div>

                            <div className="events">
                                {dayEvents
                                    .slice(0, 3)
                                    .map((event) => (
                                        <div
                                            key={event.id}
                                            className="event"
                                            style={{
                                                background:
                                                    event.color  
                                            }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                openModal(event);
                                            }}
                                        >
                                            {event.time && 
                                            `${event.title}`}
                                            {event.title}
                                        </div>
                                    ))}

                                {dayEvents.length > 3 && (
                                    <div className="more-event">
                                        +{dayEvents.length - 3} more
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>


        </div>
    )
};

export default MonthView;