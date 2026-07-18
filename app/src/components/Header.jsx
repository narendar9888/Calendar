import React from "react";
import { formatMonth } from "./CalendarUtils";



function Header() {
    return (
        <div>
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
                
            </div>
        </div>
    )
};

export default Header;