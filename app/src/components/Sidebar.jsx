import "./Sidebar.css";
import {
    FaPlus,
    FaCalendarAlt,
    FaCalendarWeek,
    FaCalendarDay,
    FaSearch,
    FaTag,
} from "react-icons/fa";

import { useCalendar } from "../context/CalendarContext";



function Sidebar() {
    const {
        openModal,
        view,
        setView,
        search,
        setSearch,
        category,
        setCategory,
        events,
    } = useCalendar();

    const upcomingEvents = [...events]
        .sort(
            (a,b) => 
                new Date(`${a.date} ${a.time || "00:00"}`) -
                new Date(`${b.date} ${b.time || "00:00"}`)
        )
    return (
        <aside className="cal-sidebar">
            <button
                className="add-e-btn"
                onClick={() => openModal}
            >
                <FaPlus/>
                <span>New Event</span>
            </button>

            <div className="side-sec">
                <h3>Views</h3>

                <button
                    className={view === "month" ? "active" : ""}
                    onClick={() => setView("month")}
                >
                    <FaCalendarAlt/>
                    Month
                </button>

                
                <button
                    className={view === "week" ? "active" : ""}
                    onClick={() => setView("week")}
                >
                    <FaCalendarWeek/>
                    Week
                </button>

                <button
                    className={view === "day" ? "active" : ""}
                    onClick={() => setView("day")}
                >
                    <FaCalendarDay/>
                    Day
                </button>

            </div>

            <div className="side-sec">
                <h3>
                    <FaSearch/>
                    Search
                </h3>

                <input
                    type="text"
                    placeholder="Search ..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="side-sec">
                <h3>
                    <FaTag/>
                    Category
                </h3>

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option>All</option>
                    <option>Study</option>
                    <option>Personal</option>
                    <option>Health</option>
                    <option>Meeting</option>
                    <option>Travel</option>
                    <option>Birthday</option>
                </select>
            </div>

            <div className="side-sec">
                <h3>Upcoming Events</h3>

                {upcomingEvents.length === 0 ? (
                    <p className="empty-text">
                        No upcoming events
                    </p>
                ) : (
                    upcomingEvents.map((event) => (
                        <div
                            key={event.id}
                            className="event-item"
                            onClick={() => openModal(event)}
                        >
                            <div 
                                className="event-color"
                                style={{
                                    background: event.color || "#4f46e5"
                                }}></div>


                            <div className="event-info">
                                <h4>{event.title}</h4>

                                <p>{event.date}</p>

                                <small>{event.time}</small>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </aside>
    );
}

export default Sidebar;