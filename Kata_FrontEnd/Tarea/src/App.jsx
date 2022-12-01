import Header from "./components/Header"
import Tareas from "./components/Tareas"
import AddTarea from "./components/AddTarea"

import {useState} from 'react'


function App() {
  
  const [mostrarForm, setMostrarForm] = useState(false)

  const [tareas, setTareas] = useState([
    {
        id: 1,
        texto: 'Ir al cine',
        fecha: '29 de noviembre del 2022',
        terminada: true
    },
    {
        id: 2,
        texto: 'Ir por taquitos al pastor',
        fecha: '31 de noviembre del 2022',
        terminada: false
    },
    {
        id: 3,
        texto: 'Ir al super',
        fecha: '01 de diciembre del 2022',
        terminada: false
    },
])

  // Borrar Tareas
  const borrarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id))
  }

  // Cambiar status tarea
  const marcarTarea = (id) => {
    setTareas(tareas.map((tarea)=> tarea.id === id ? {...tarea, terminada: !tarea.terminada}: tarea))
  }

  // Agregar Tarea
  const agregarTarea = (tarea) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const nuevaTarea = {id, ...tarea}

    setTareas([...tareas, nuevaTarea])
  }

  return (
    <div className="container">
      <Header titulo='Tareas' mostrarForm={mostrarForm} onAdd={()=> setMostrarForm(!mostrarForm)} />
      {mostrarForm && <AddTarea onAdd={agregarTarea} />}
      {tareas.length > 0 ? <Tareas tareas={tareas} onDelete={borrarTarea} onToggle={marcarTarea} />: 'No hay tareas que mostrar' }
    </div>
  )
}

export default App