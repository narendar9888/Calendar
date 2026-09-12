import React from "react";
import "./DayView.css";
import {
    formatDate, 
    isSameDay,
    formatTime,
} from "./CalendarUtils"
import { useCalendar } from "../context/CalendarContext";

import {FaClock, FaCalendarDay} from "react-icons/fa"

function DayView() {
    const {
        selectedDate,
        events,
        search,
        category,
        openModal
    } = useCalendar();

    const filteredEvents = events.filter((event) => {
        const matchDate = isSameDay(
            new Date(event.date),
            selectedDate
        );

        const matchSearch = event.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchCategory = 
            category === "All" || 
            event.category === category;
        
            return (
            matchDate &&
            matchSearch &&
            matchCategory
        );
    });

    filteredEvents.sort((a, b) => {
        retrun (
            new Date(`${a.date} ${a.time || "00:00"}`) - 
            new Date(`${b.date} ${b.time || "00:00"}`)
        );
    });
    return (
        <div className="day-view">
            <div className="day-header">
                <h2>{formatDate(selectedDate)}</h2>
                <span>
                    {filteredEvents.length} Event
                    {filteredEvents.length !== 1 && "s"}
                </span>
            </div>

            {filteredEvents.length === 0 && (
                <div className="no-events">
                    <h3>No Events</h3>
                    <p>
                        There are no scheduled evvents for 
                        this day.
                    </p>
                </div>
            )}

            {filteredEvents.map((event) => (
                <div
                  className="day-card"
                  key={event.id}
                  style={{
                    borderLeft: `6px solid ${event.color}`
                  }}
                  onClick={() => openModal(event)}
                >
                    <div className="event-header">
                        <h3>{event.title}</h3>

                        <span
                            className="category"
                            style={{
                                background: event.color
                            }}
                        >
                            {event.category}
                        </span>
                    </div>

                    <div className="event-time">
                        <FaClock/> {formatTime(event.time)}
                    </div>

                    {event.description && (
                        <div className="event-des">
                            {event.description}
                        </div>
                    )}

                    <div className="event-date">
                        <FaCalendarDay/> {event.date}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DayView;