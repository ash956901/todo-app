import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="App mt-4" >
      <h1 className='text-2xl font-bold text-center'>To-Do Application</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default App;