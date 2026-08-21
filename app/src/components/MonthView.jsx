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
        currentDate
    } = useCalendar();


    const calendar = getMonthGrid(currentDate);


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
                {calendar.flat().map((Date, index) => {
                    // const dayEvent = getEvent(date);

                    const isCurrentMonth = 
                        Date.getMonth() === currentDate.getMonth();

                    return (
                        <div
                            key={index}

                        >
                            <div className="day-number">
                                {Date.getDate()}
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default MonthView;