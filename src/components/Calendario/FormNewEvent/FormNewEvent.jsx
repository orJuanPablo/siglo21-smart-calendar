import React, { useState } from 'react'
import ReactDatePicker, { registerLocale } from 'react-datepicker'
import es from "date-fns/locale/es"
import "react-datepicker/dist/react-datepicker.css"
registerLocale("es", es)
export const FormNewEvent = ({ dataUp }) => {
    const [title, setTitle] = useState("")
    const [start, setStart] = useState(new Date())
    const [end, setEnd] = useState(new Date())
    return (
        <form style={{ height: "40vh", width: "90vw" }}>
            <h1>Nuevo Evento</h1>
            <input placeholder="Título" onChange={(e) => setTitle(e.target.value)} />
            <ReactDatePicker onChange={(start) => setStart(start)} selected={start} locale="es" />
            <ReactDatePicker onChange={(end) => setEnd(end)} selected={end} Locale="es" />
            <button onClick={() => dataUp({ title, start, end, allDay: "true" })}>Agregar Evento</button>
        </form >
    )
}
