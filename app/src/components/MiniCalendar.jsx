import React from "react";
import "./MiniCalendar.css";
import { useCalendar } from "../context/CalendarContext";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import {
    formatMonth,
    getMonthGrid,
    isSameDay,
    isToday,
    WEEK_DAYS,

} from "./CalendarUtils";

function MiniCalendar() {
    const {
        currentDate,
        setCurrentDate,
        selectedDate,
        setSelectedDate,
        prevMonth,
        nextMonth
    } =useCalendar();

    const grid = getMonthGrid(currentDate);

    return (
        <div className="mini-cal">
            <div className="mini-header">
                <button onClick={prevMonth}><FaArrowLeft/></button>
                <h3>{formatMonth(currentDate)}</h3>
                <button onClick={nextMonth}><FaArrowRight/></button>
            </div>

            <div className="mini-weekdays">
                {WEEK_DAYS.map((day) => (
                    <div key={day} className="weekday">
                        {day[0]}
                    </div>
                ))}
            </div>

            <div className="mini-grid">
                {grid.flat().map((date, index) => {
                    const current =
                    date.getMonth() === currentDate.getMonth();


                    return (
                        <div
                            key={index}
                            className={`mini-day 
                                ${current ? "" : "other"}
                                ${isToday(date) ? "today" : ""}
                                ${
                                    isSameDay(date, selectedDate)
                                        ? "selected"
                                        : ""
                            }`}
                            onClick={() => setSelectedDate(date)}
                        >
                            {date.getDate()}
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
};

export default MiniCalendar;






















// import React from "react";
// import "./MiniCalendar.css";

// import { useCalendar } from "../context/CalendarContext.jsx";
// import {
//   WEEK_DAYS,
//   getMonthGrid,
//   isSameDay,
//   isToday,
//   formatMonth,
// } from "./CalendarUtils";

// const MiniCalendar = () => {
//   const {
//     currentDate,
//     setCurrentDate,
//     selectedDate,
//     setSelectedDate,
//   } = useCalendar();

//   const grid = getMonthGrid(currentDate);

//   const prevMonth = () => {
//     setCurrentDate(
//       new Date(
//         currentDate.getFullYear(),
//         currentDate.getMonth() - 1,
//         1
//       )
//     );
//   };

//   const nextMonth = () => {
//     setCurrentDate(
//       new Date(
//         currentDate.getFullYear(),
//         currentDate.getMonth() + 1,
//         1
//       )
//     );
//   };

//   return (
//     <div className="mini-calendar">

//       <div className="mini-header">
//         <button onClick={prevMonth}>◀</button>

//         <h3>{formatMonth(currentDate)}</h3>

//         <button onClick={nextMonth}>▶</button>
//       </div>

//       <div className="mini-weekdays">
//         {WEEK_DAYS.map((day) => (
//           <div key={day} className="weekday">
//             {day[0]}
//           </div>
//         ))}
//       </div>

//       <div className="mini-grid">
//         {grid.flat().map((date, index) => {
//           const current =
//             date.getMonth() === currentDate.getMonth();

//           return (
//             <div
//               key={index}
//               className={`mini-day
//                 ${current ? "" : "other"}
//                 ${isToday(date) ? "today" : ""}
//                 ${
//                   isSameDay(date, selectedDate)
//                     ? "selected"
//                     : ""
//                 }`}
//               onClick={() => setSelectedDate(date)}
//             >
//               {date.getDate()}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default MiniCalendar;