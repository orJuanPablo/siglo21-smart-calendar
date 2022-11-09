import React, { useState } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { FormNewEvent } from './FormNewEvent/FormNewEvent';

const locales = {
  "es": require("date-fns/locale/es")
}
const localizer = dateFnsLocalizer({
  format, parse, startOfWeek, getDay, locales
})
const events = [
  {
    title: "Big Meeting",
    allDay: "true",
    start: new Date(2022, 10, 3),
    end: new Date(2022, 10, 5),
  },
  {
    title: "Big Zoom meeting",
    allDay: "true",
    start: new Date(2022, 10, 1),
    end: new Date(2022, 10, 1),
  },
  {
    title: "Big Capo",
    allDay: "true",
    start: new Date(2022, 10, 15),
    end: new Date(2022, 10, 17),
  },
];
export const Calendario = () => {
  const [newEvent, setNewEvent] = useState({});
  const [allEvents, setAllEvents] = useState(events);
  const addNewEvent = () => {
    setAllEvents([...allEvents, newEvent])
  }
  return (
    <>
      <FormNewEvent dataUp={(event) => {
        setNewEvent(event)
        addNewEvent()
        console.log(newEvent)
      }} />
      <Calendar localizer={localizer} events={allEvents} style={{ height: 500, margin: "50px" }} />
    </>
  )
}
