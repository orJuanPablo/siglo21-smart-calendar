import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export const FormNewEvent = ({ dataUp }) => {
    const [title, setTitle] = useState("")
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    return (
        <div>
            <h1>Nuevo Evento</h1>
            <input placeholder="Título" onChange={(e) => setTitle(e.target.value)} />
            <ReactDatePicker onChange={(start) => setStart(start)} />
            <ReactDatePicker onChange={(end) => setEnd(end)} />
            <button onClick={() => dataUp({ title, start, end, allDay: "true" })}>Agregar Evento</button>
        </div >
    )
}
