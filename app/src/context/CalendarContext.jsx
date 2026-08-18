import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CalendarContext = createContext();

export const CalendarProvider = ({children}) => {

    // current date

    const [currentDate, setCurrentDate] = useState(new Date());

    // current view

    const [view, setView] = useState("month");

    // search filter

    const [search, setSearch] = useState("");

    // category filter

    const [category, setCategory] = useState("All");

    // seleted date

    const [selectedDate, setSelectDate] = useState(new Date());
    
    // modal 
    const [showModal, setShowModal] = useState(false);

    // Dark Mode

    const [darkMode, setDarkMode] = useLocalStorage(
        "calendar-dark",
        false
    );

    // open Modal

    const openModal = () => {
        setShowModal(true);
    };

    // close Modal

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

