import React from "react";
import { formatMonth } from "./CalendarUtils";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


function Header() {
    return (
        <div>
            <div className="header-left">
                <h1 className="logo">Calendar App</h1>

                <button 
                    className="today-btn"
                   
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
        </div>
    )
};

export default Header;