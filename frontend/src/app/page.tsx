'use client';

import { useState } from 'react';

export default function HomePage() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [newTitle, setNewTitle] = useState('');

  // TODO: implement fetching tasks from the API

  const handleAdd = async () => {
    // TODO: implement adding a new task
  };

  return (
    <main>
      <h1>Task Manager</h1>

      <div>
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="New task"
        />
        <button onClick={handleAdd}>
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((t) => (
          <li key={t.id}>
            <span>{t.title}</span>
            <span>{t.status}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}