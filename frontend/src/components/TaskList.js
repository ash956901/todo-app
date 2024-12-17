import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="border-b border-gray-200 py-2 hover:bg-gray-100 transition duration-200">
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;