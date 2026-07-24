import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CalendarContext = createContext();

export const CalendarProvider = ({children}) => {


    const [currentDate, setCurrentDate] = useState(new Date());

    const [view, setView] = useState("month");

    const [darkMode, setDarkMode] = useLocalStorage(
        "calendar-dark",
        false
    );

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



        showModal,
        setShowModal,

        previousMonth,
        nextMonth,
        goToToday,

        darkMode,
        toggleDarkMode,
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