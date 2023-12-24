import { useState, useContext, useEffect } from "react";
import "./App.css";
import { getMonth } from "./util";
import React from "react";
import { Sidebar } from "./components/Sidebar";
import Month from "./components/Month";
import { CalenderHeader } from "./components/CalenderHeader";
import GlobalContext from "../context/GlobalContext";
import EventModel from "./components/EventModel";
function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModel } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModel && <EventModel></EventModel>}
      <div className="h-screen flex flex-col">
        <CalenderHeader></CalenderHeader>
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
