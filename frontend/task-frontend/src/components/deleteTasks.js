import React from 'react'
import {useState} from 'react'

const DeleteTask = () => {
    const [_name, setName] = useState('')
    const [error, setError] = useState(null)

    const handleDelete = async (e) => {
        e.preventDefault()

        const task = {_name}
        console.log(task._name)

        const response = await fetch(`/api/tasks/delete?name=${encodeURIComponent(_name)}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const json = await response.json()
        if(!response.ok)
                setError(json.error)
        else{
            setName('')
            setError(null)
            console.log(`Task deleted: ${json}`)
        }
    }
    return (
        <form className="delete" onSubmit={handleDelete}>
            <h3>Delete Task</h3>
            <label>Name: </label>
            <input
                type="text"
                onChange = {(e) => setName(e.target.value)}
                value = {_name}
            />

            <button className="delete">DELETE</button>
            {error && <div className = "error">{error}</div>}
        </form>
    )
}

export default DeleteTask