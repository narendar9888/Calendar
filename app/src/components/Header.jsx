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
        darkMode,
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
                    onClick={previousMonth}
                >
                    <FaChevronLeft />
                </button>

                <h2>{formatMonth(currentDate)}</h2>

                <button
                    className="nav-btn"
                    onClick={nextMonth}
                >
                    <FaChevronRight/>
                </button>
            </div>

            <div className="header-right">
                <button 
                className="theme-btn"
                onClick={toggleDarkMode}
                >
                    {darkMode ? "Light" : "Dark"}
                </button>
            </div>
        </header>
    )
};

export default Header;
