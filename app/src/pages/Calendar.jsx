import React from "react";
import "./Calendar.css";

import { useCalendar } from "../context/CalendarContext";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";


import MonthView from "../components/MonthView";


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


            <div className="cal-layout">
                <aside className="left-panel">
                    <MiniCalendar/>
                </aside>


                <main className="cal-content">

                    <SearchBar/>

                    <div className="cal-view">

                        {view === "month" && <MonthView/>}

                    </div>



                </main>
            </div>

        </div>
    );
};

export default Calendar;

