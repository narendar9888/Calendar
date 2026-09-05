import React from "react";
import "./Calendar.css";

import { useCalendar } from "../context/CalendarContext";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Toolbar from "../components/Toolbar";
import Sidebar from "../components/Sidebar";


import MonthView from "../components/MonthView";
import WeekView from "../components/WeekView";

import MiniCalendar from "../components/MiniCalendar";

function Calendar() {
    const {
        view,
        showModal,
        darkMode
    } = useCalendar();
    return(
        <div className={`cal-page ${darkMode ? "dark" : ""}`}>
            <Header />

            <Toolbar/>

            <div className="cal-layout">
                <aside className="left-panel">
                    <MiniCalendar/>
                    <Sidebar/>
                </aside>


                <main className="cal-content">

                    <SearchBar/>

                    <div className="cal-view">

                        {view === "month" && <MonthView/>}
                        
                        {view === "week" && <WeekView/>}

                    </div>



                </main>
            </div>

        </div>
    );
};

export default Calendar;

