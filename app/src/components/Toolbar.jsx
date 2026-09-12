import React from "react";
import "./Toolbar.css";
import { useCalendar } from "../context/CalendarContext";
import {
    FaCalendarAlt,
    FaCalendarWeek,
    FaCalendarDay,
    FaPlus,
    FaSun,
    FaMoon

} from "react-icons/fa";

function Toolbar() {
    const {
        darkMode,
        view,
        setView,
        openModal,
        toggleDarkMode,
        goToToday
    } = useCalendar();

    return(
        <div className={`tool ${darkMode ? "dark" : ""}`}>
            <div className="tool-left">
                <button 
                    onClick={goToToday}
                    className="today-btn">
                    Today
                </button>

                <div className="view-btn">

                    <button
                        className={view === "month" ? "active" : ""}
                        onClick={() => setView("month")}
                    >
                        <FaCalendarAlt/>
                        <span>Month</span>
                    </button>

                    <button
                        className={view === "week" ? "active" : ""}
                        onClick={() => setView("week")}
                    >
                        <FaCalendarWeek/>
                        <span>Week</span>
                    </button>

                    <button
                        className={view === "day" ? "active" : ""}
                        onClick={() => setView("day")}
                    >
                        <FaCalendarDay/>
                        <span>Day</span>
                    </button>
                </div>
            </div>

            <div className="tool-right">

                <button
                    className="add-btn"
                    onClick={() => openModal()}
                >
                    <FaPlus/>
                    <span>New Event</span>
                </button>

                {/* <button
                    className="theme-btn"
                    onClick={toggleDarkMode}
                >
                    {darkMode ? (
                        <>
                            <FaSun/>
                            <span>Light</span>
                        </>
                    ) : (
                        <>
                            <FaMoon/>
                            <span>Dark</span>
                        </>
                    )}
                </button> */}
            </div>
        </div>
    );
};

export default Toolbar;