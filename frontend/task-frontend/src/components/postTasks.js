import { useState } from 'react';
import React from 'react';

const PostTask = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = { name, description, priority };

    const response = await fetch('/api/tasks/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setName('');
      setDescription('');
      setPriority('');
      setError(null);
      console.log(`New task added: ${json}`);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a Task +</h3>

      <label>Name: </label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <label>Description: </label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <label>Priority: </label>
      <input
        type="text"
        onChange={(e) => setPriority(e.target.value)}
        value={priority}
      />

      <button type="submit">Add Task</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default PostTask;