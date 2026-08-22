import Header from "../components/Header";


import MonthView from "../components/MonthView";

function Calendar() {
    return(
        <div>
            <Header />
            <MonthView />
        </div>
    )
}

export default Calendar;








// import React from "react";
// import "./Calendar.css";

// import { useCalendar } from "../../context/CalendarContext";

// import Header from "../../components/Header";
// import Toolbar from "../../components/Toolbar";
// import Sidebar from "../../components/Sidebar";
// import SearchBar from "../../components/SearchBar";

// import MonthView from "../../components/MonthView";
// import WeekView from "../../components/WeekView";
// import DayView from "../../components/DayView";

// import MiniCalendar from "../../components/MiniCalendar";
// import EventModal from "../../components/EventModal";

// const Calendar = () => {
//   const {
//     view,
//     showModal,
//     darkMode,
//   } = useCalendar();

//   return (
//     <div className={`calendar-page ${darkMode ? "dark" : ""}`}>

//       {/* Header */}
//       <Header />

//       {/* Toolbar */}
//       <Toolbar />

//       {/* Main Layout */}
//       <div className="calendar-layout">

//         {/* Left Sidebar */}
//         <aside className="left-panel">
//           <MiniCalendar />
//           <Sidebar />
//         </aside>

//         {/* Calendar */}
//         <main className="calendar-content">

//           <SearchBar />

//           <div className="calendar-view">

//             {view === "month" && <MonthView />}

//             {view === "week" && <WeekView />}

//             {view === "day" && <DayView />}

//           </div>

//         </main>

//       </div>

//       {/* Modal */}
//       {showModal && <EventModal />}

//     </div>
//   );
// };

// export default Calendar;