import React, { useEffect, useState } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { FormNewEvent } from './FormNewEvent/FormNewEvent';
import { Header } from '../Header/Header';
import { getEventList } from '../../fireBase/eventsCollection';
import { useAuth } from '../../context/AuthContext';

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
  const [allEvents, setAllEvents] = useState([]);
  const [formEnable, setFormEnable] = useState(false)
  const addNewEvent = () => {
    setAllEvents([...allEvents, newEvent])
    setNewEvent({})
  }
  const { user } = useAuth()
  useEffect(() => {
    const getAllEvents = async () => {
      const aux = await getEventList()
      const evs = aux.filter(item => item.users.includes(user.email))
      setAllEvents(evs)
    }
    getAllEvents()
  }, [])

  return (
    <div className='flex-column w-full'>
      <Header />
      <div className='px-4'>
        {formEnable ? <FormNewEvent dataUp={(event) => {
          setNewEvent(event)
          setFormEnable(false)
          addNewEvent()
        }} cancel={() => setFormEnable(false)} /> :
          <>
            <button onClick={() => setFormEnable(true)}
              className='mt-10 bg-blue-500 hover:bg-blue-300 text-white rounded font-bold py-2 px-4 focus:outline-none focus:shadow-outline'>
              Añadir Nuevo Evento</button>
            <Calendar localizer={localizer} events={allEvents} style={{ height: 450, margin: "50px" }} />
          </>}
      </div>
    </div >
  )
}
