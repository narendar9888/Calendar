import React from "react";
import { formatMonth } from "./CalendarUtils";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useCalendar } from "../context/CalendarContext";
function Header() {
    const {
        currentDate,
        previousMonth,
        nextMonth,
        goToToday,
        toggleDarkMode
    } = useCalendar();

    return (
        <header className={`calender-header ${darkMode ? "dark" : ""}`}>
            <div className="header-left">
                <h1 className="logo">Calendar App</h1>

                <button 
                    className="today-btn"
                   onClick={goToToday}
                >
                    Today
                </button>
            </div>

            <div className="header-center">
                <button
                    className="nav-btn"
                >
                    <FaChevronLeft />
                </button>

                <h2>{formatMonth(currentDate)}</h2>
            </div>
        </header>
    )
};

export default Header;