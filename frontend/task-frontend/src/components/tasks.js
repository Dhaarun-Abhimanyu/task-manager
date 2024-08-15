import React from 'react'

const TaskDetails = ({task}) => {

    return (
            <div className="taskDetails">
                <h4>{task.name}</h4>
                <p>{task.description}</p>
                <p>{task.priority}</p>
                <p>{task.status}</p>
                <p>{task.createdAt.substring(0,10)} - {task.createdAt.substring(11,16)}</p>
                <hr />
            </div>
    )
}

export default TaskDetails;