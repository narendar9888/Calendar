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
        setSelectedDate

    } = useCalendar()

    const weekDates = getWeekDates(currentDate);
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
                </div>
            ))}
        </div>
    )
}

export default WeekView;

