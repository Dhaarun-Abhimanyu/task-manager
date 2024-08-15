import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('/api/tasks')
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the tasks!', error);
            });
    }, []);

    const addTask = (task) => {
        axios.post('/api/tasks/add', task)
            .then(response => {
                setTasks([...tasks, response.data]);
            })
            .catch(error => {
                console.error('There was an error adding the task!', error);
            });
    };

    const deleteTask = (id) => {
        axios.delete(`/api/tasks/delete/${id}`)
            .then(() => {
                setTasks(tasks.filter(task => task._id !== id));
            })
            .catch(error => {
                console.error('There was an error deleting the task!', error);
            });
    };

    return (
        <div className="app">
            <header className="app-header">
                <h1>Task Manager</h1>
            </header>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} />
        </div>
    );
}

export default App;
