import { useState } from "react";
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import {startOfWeek} from "date-fns/startOfWeek";
import {getDay} from "date-fns/getDay";
import {enUS} from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Define the locales
const locales = {
  "en-US": enUS,
};

// Initialize the localizer with date-fns
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Define event interface
interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
}

// Sample events
const initialEvents: CalendarEvent[] = [
  {
    title: "Meeting with Client",
    start: new Date(2024, 11, 14, 10, 0), // Dec 14, 2024, 10:00 AM
    end: new Date(2024, 11, 14, 12, 0), // Dec 14, 2024, 12:00 PM
  },
  {
    title: "Team Stand-up",
    start: new Date(2024, 11, 15, 9, 0), // Dec 15, 2024, 9:00 AM
    end: new Date(2024, 11, 15, 9, 30), // Dec 15, 2024, 9:30 AM
  },
  {
    title: "Holiday Party",
    start: new Date(2024, 11, 20), // Dec 20, 2024 (All-day event)
    end: new Date(2024, 11, 20),
    allDay: true,
  },
];

const Calendar = () => {
  const [events, setEvents] = useState<CalendarEvent[]>(initialEvents);
  const [newEvent, setNewEvent] = useState<{
    title: string;
    start: string;
    end: string;
  }>({ title: "", start: "", end: "" });

  const handleAddEvent = () => {
    const start = new Date(newEvent.start);
    const end = new Date(newEvent.end);

    if (!newEvent.title || isNaN(start.getTime()) || isNaN(end.getTime())) {
      alert("Please fill out all fields with valid data.");
      return;
    }

    if (start >= end) {
      alert("The start date must be earlier than the end date.");
      return;
    }

    const newCalendarEvent: CalendarEvent = {
      title: newEvent.title,
      start,
      end,
    };

    setEvents([...events, newCalendarEvent]);
    setNewEvent({ title: "", start: "", end: "" });
  };

  return (
    <div className="p-2">
      <h2 className="text-center text-lg font-bold mb-5">My Calendar</h2>

      {/* Form to Add New Event */}
      <div className="mb-5">
        <h3 className="text-md font-semibold mb-3">Add New Event</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="datetime-local"
            placeholder="Start Date and Time"
            value={newEvent.start}
            onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="datetime-local"
            placeholder="End Date and Time"
            value={newEvent.end}
            onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleAddEvent}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Event
        </button>
      </div>

      {/* Calendar Component */}
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        popup
      />
    </div>
  );
};

export default Calendar;
