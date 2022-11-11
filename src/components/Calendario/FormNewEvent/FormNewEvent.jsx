import React, { useState } from 'react'
import ReactDatePicker, { registerLocale } from 'react-datepicker'
import es from "date-fns/locale/es"
import "react-datepicker/dist/react-datepicker.css"
import { SelectorUsuarios } from './SelectorUsuarios'
import { saveEvent } from '../../../fireBase/eventsCollection'
registerLocale("es", es)
export const FormNewEvent = ({ dataUp, cancel }) => {
    const [title, setTitle] = useState("")
    const [start, setStart] = useState(new Date())
    const [end, setEnd] = useState(new Date())
    const [users, setUsers] = useState([])
    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className='block text-gray-400 font-bold mb-2'>Nuevo Evento</h1>

            <input placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} className="mb-4 shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <ReactDatePicker onChange={(start) => setStart(start)} selected={start} locale="es" className="mb-4 shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <ReactDatePicker onChange={(end) => setEnd(end)} selected={end} Locale="es" className="mb-4 shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <SelectorUsuarios dataUp={(data) => {
                setUsers(data)
                console.log(users)
            }} />
            <div className="flex item-center justify-between w-full">
                <button onClick={async e => {
                    e.preventDefault()
                    await saveEvent({ title, start, end, allDay: true, users })
                    dataUp({ title, start, end, allDay: true, users })
                }} className='bg-blue-500 hover:bg-blue-300 text-white rounded font-bold py-2 px-4 focus:outline-none focus:shadow-outline'>Agregar Evento</button>
                <button onClick={e => {
                    e.preventDefault()
                    cancel()
                }} className='bg-red-500 hover:bg-red-300 text-white rounded font-bold py-2 px-4 focus:outline-none focus:shadow-outline'>Cancelar</button>
            </div>
        </form >
    )
}
