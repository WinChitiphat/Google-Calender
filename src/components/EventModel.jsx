import { useContext, useState, useEffect } from "react";
import GlobalContext from "../../context/GlobalContext";

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];
export default function EventModel() {
  const {
    setShowEventModel,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
    setSelectedEvent,
  } = useContext(GlobalContext);
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setselectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        setShowEventModel(false);
        setSelectedEvent(null);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }
    setSelectedEvent(null);
    setShowEventModel(false);
  }
  function handleEnter(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }
  function handleEsc(e) {
    if (e.key === "Escape") {
      setShowEventModel(false);
      setSelectedEvent(null);
    }
  }

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form
        onKeyDown={handleEsc}
        className="bg-white rounded-lg shadow-2xl w-1/4"
      >
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <div>
            {selectedEvent && (
              <button>
                <span
                  onClick={() => {
                    dispatchCalEvent({
                      type: "delete",
                      payload: selectedEvent,
                    });
                    setShowEventModel(false);
                    setSelectedEvent(null);
                  }}
                  className="material-icons-outlined text-gray-400"
                >
                  delete
                </span>
              </button>
            )}
            <button
              onClick={() => {
                setShowEventModel(false);
                setSelectedEvent(null);
              }}
            >
              <span className="material-icons-outlined text-gray-400">
                close
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              onKeyDown={handleEnter}
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
            <span className="material-icons-outlined text-gray-400">
              schedule
            </span>
            <p className="flex">{daySelected.format("dddd, MMMM DD")}</p>
            <span className="material-icons-outlined text-gray-400">
              segment
            </span>
            <input
              onKeyDown={handleEnter}
              type="text"
              name="description"
              placeholder="Add a description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
            <span className="material-icons-outlined text-gray-400">
              bookmark_border
            </span>
            <div className="flex gap-x-2">
              {labelsClasses.map((lblclass, i) => (
                <span
                  key={i}
                  onClick={() => setselectedLabel(lblclass)}
                  className={`bg-${lblclass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === lblclass && (
                    <span className="material-icons-outlined text-white text-sm">
                      check
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
