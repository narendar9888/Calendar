import React from "react";
import "./SearchBar.css";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useCalendar } from "../context/CalendarContext";

function SearchBar() {
    const {search, setSearch} = useCalendar();

    const clear = () => {
        setSearch("");
    };
    return (
        <div className="top">
            <div className="second">
                <FaSearch className="icon"/>

                <input 
                    placeholder="search events...."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input"
                    type="text" 
                />

                {search && (
                    <button
                        className="clear-btn"
                        onClick={clear}
                        title="Clear Search"
                    >
                        <FaTimes/>
                    </button>
                )}

            </div>
        </div>
    );

};


export default SearchBar;