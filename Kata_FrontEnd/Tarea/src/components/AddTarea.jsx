import {useState} from 'react'

const AddTarea = ({onAdd}) => {

    const [texto, setTexto] = useState('')
    const [fecha, setFecha] = useState('')
    const [terminada, setTerminada] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!texto) {
            alert('Debes escribir una descripcion')
            return
        }

        if(!fecha) {
            alert('Debes escribir una fecha')
            return
        }

        onAdd({texto, fecha, terminada})

        setTexto('')
        setFecha('')
        setTerminada(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Tarea</label>
                <input 
                    type='text'
                    placeholder='Escribe una descripcion'
                    value={texto}
                    onChange={(e)=> setTexto (e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Fecha</label>
                <input 
                    type='text'
                    placeholder='Escribe una fecha'
                    value={fecha}
                    onChange={(e)=> setFecha (e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Terminada</label>
                <input 
                    type='checkbox'
                    checked={terminada}
                    value={terminada}
                    onChange={(e)=> setTerminada(e.currentTarget.checked)}
                />
            </div>
            <input className='btn btn-block' type="submit" value='Guardar' />
        </form>
    )
}

export default AddTarea