import { ChangeEvent, FC, FormEvent, useState } from 'react';
import styles from './Form.module.scss'
import { usePostTaskMutation } from '../../store/slices/apiSlice';
import { TTask } from '../../types/types';

type TNewTask = Omit<TTask, 'id'>

export const Form:FC = () => {
  const [ inputValue, setInputValue ] = useState<string>('');
  const [ postTask ] = usePostTaskMutation({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!inputValue) {
      return;
    }

    const newTask: TNewTask = {
      title: inputValue,
      isDone: false
    }

    postTask(newTask);
    setInputValue('');
  }

  return (
    <form 
      className={styles.form}
      onSubmit={handleSubmit}
      >
      <input 
        type="text" 
        value={inputValue}
        onChange={handleInputChange}
        placeholder="What needs to be done?"
        className={styles.input}
        />
    </form>
  )
}
