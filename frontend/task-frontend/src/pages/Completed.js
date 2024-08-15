import { useEffect, useState } from 'react';
import React from 'react'

import TaskDetails from '../components/tasks.js'
import PostTask from '../components/postTasks.js'
import DeleteTask from '../components/deleteTasks.js'

const Completed = () => {
    const [task, setTask] = useState(null)

    useEffect(() => {
        const fetchTasks = async () => {
            const res = await fetch('/api/tasks/completed')
            const json = await res.json()
            if(res.ok)
                setTask(json)
        }
        fetchTasks()
    }, [])

    return (
        <div className="home">
            <div className="tasks">
                {task && task.map((task) => (//only when task is not null, task.map() will be called
                    <TaskDetails key={task._id} task={task}/>
                ))}
            </div>
            <div className="postTask">
                <PostTask />
            </div>
            <div className="deleteTask">
                <DeleteTask />
            </div>
        </div>
    )
}

export default Completed