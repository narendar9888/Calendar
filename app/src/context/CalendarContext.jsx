import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CalendarContext = createContext();

export const CalendarProvider = ({children}) => {


    const [currentDate, setCurrentDate] = useState(new Date());


    const [view, setView] = useState("week");


    const [search, setSearch] = useState("");


    const [category, setCategory] = useState("All");


    const [selectedDate, setSelectDate] = useState(new Date());

    const [selectedEvent, setSelectedEvent] = useState(null);
    
    const [showModal, setShowModal] = useState(false);


    const [darkMode, setDarkMode] = useLocalStorage(
        "calendar-dark",
        false
    );

    const [events, setEvents] = useLocalStorage(
        "cal-events",
        [
            {
                id: 1,
                title: "React Class",
                description: "Frontend Development",
                date: "2026-09-01",
                time: "10:00",
                category: "Study",
                color: "#4F46E5"
            },
            {
                id: 2,
                title: "Gym",
                description: "Workout",
                date: "2026-09-22",
                time: "07:00",
                category: "Health",
                color: "#10B981",
            },
        ]
    );

    const addevent = (event) => {
        const newEvent = {
            id: Date.now(),
            color: "#4f46e5",
            ...event,
        };
        setEvents((prev) => [...prev, newEvent]);
    };

    const updateEvent = (updateEvent) => {
        setEvents((prev) =>
            prev.map((event)=>
                event.id === updateEvent.id ? updateEvent : event
            )
        );
    };

    const deleteEvent = (id) => {
        setEvents((prev) =>
            prev.filter((event) => event.id !== id)
        );
    };


    const openModal = () => {
        setShowModal(true);
    };


    const closeModal = () => {
        setShowModal(false);
    };


    
    const previousMonth = () => {
        setCurrentDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() - 1,
                1
            )
        );
    };



    const nextMonth = () => {
        setCurrentDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() + 1,
                1
            )
        );
    };

    const goToToday = () => {
        setCurrentDate(new Date());
        setSelectDate(new Date());
    };

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    const value = {
        currentDate,
        setCurrentDate,

        selectedDate,
        setSelectDate,

        selectedEvent,
        setSelectedEvent,

        events,
        setEvents,

        addevent,
        updateEvent,
        deleteEvent,

        showModal,
        setShowModal,

        openModal,
        closeModal,

        previousMonth,
        nextMonth,
        goToToday,

        view,
        setView,

        search,
        setSearch,

        category,
        setCategory,

        darkMode,
        toggleDarkMode

    };

    return (
        <CalendarContext.Provider value={value} >
            {children}
        </CalendarContext.Provider>
    );

};

export const useCalendar = () => {
    const context = useContext(CalendarContext);

    if(!context) {
        throw new Error(
            "useCalendar must be used inside CalendarProvider"
        );
    }

    return context;
};

export default CalendarContext;

