import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { ControlBar } from './components/ControlBar/ControlBar';
import { Form } from './components/Form/Form';
import { useDeleteTaskByIdMutation, useGetTasksQuery, useUpdateTaskStatusMutation,  } from './store/slices/apiSlice'
import { counterActive } from './utils/counterActive';
import { TTask } from './types/types';

function App() {
  const [ status, setStatus ] = useState<'All' | 'Active' | 'Completed'>('All');
  const [ params, setParams ] = useState<'' | '?isDone=false' | '?isDone=true'>('');

  useEffect(() => { 
    if(status === 'All') {
      setParams('');
    } else if(status === 'Active') {
      setParams('?isDone=false');
    } else if (status === 'Completed') {
      setParams('?isDone=true');
    }
  }, [status])

  const { data, isLoading } = useGetTasksQuery(params);

  const memoActiveTasks = useMemo(() => {
    return data ? counterActive(data) : 0;
  }, [data])

  const [ deleteTask ] = useDeleteTaskByIdMutation({});
  const [ updateTask ] = useUpdateTaskStatusMutation({});

  const handleUpdateTask = (task: TTask):void => {
    updateTask(task);
  }

  const handleDeleteTask = (id: number):void => {
    deleteTask(id);
  }

  return (
    <main className='wrapper'>
      <h1>todos app</h1>
      <Form />
      <ControlBar 
        setStatus={setStatus}
        memoActiveTasks={memoActiveTasks} 
        status={status}
      />
      <ul className='list'>
        {isLoading && <h2>Loading...</h2>}
        {data?.map((task: TTask) => (
          <li 
            className='task'
            key={task.id}>
            <input 
              type='checkbox' 
              checked={task.isDone}
              onChange={() => handleUpdateTask(task)}
              className='checkbox'
            />
            <span className={`${task.isDone === true ? 'done' : ''}`}>{task.title}</span>
            <button 
              className='close'
              onClick={() => handleDeleteTask(task.id)}>X</button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App;
