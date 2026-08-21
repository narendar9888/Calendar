// // import Calendar from "./pages/Calendar";
// import Header from "./components/Header";

// function App() {
//   return (
//     <div className="app">
//       {/* <Calendar /> */}
//       < Header/>
//     </div>
//   );
// }

// export default App;


import Header from "./components/Header";
import MonthView from "./components/MonthView";
import { CalendarProvider } from "./context/CalendarContext";

function App() {
  return (
    <CalendarProvider>
      <div className="app">
        <Header/>
        <MonthView/>
      </div>
    </CalendarProvider>
  )
};

export default App;