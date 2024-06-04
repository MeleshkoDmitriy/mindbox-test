import { FC, MouseEvent } from 'react';
import styles from './ControlBar.module.scss'

interface ControlBarProps {
  setStatus: (status: 'All' | 'Active' | 'Completed') => void;
  memoActiveTasks: number;
  status: 'All' | 'Active' | 'Completed';
}

export const ControlBar:FC<ControlBarProps> = ({ setStatus, memoActiveTasks, status }) => {

  const handleStatusChange = (e: MouseEvent<HTMLButtonElement>) => {
    const newStatus = e.currentTarget.textContent;
    if (newStatus === 'All' || newStatus === 'Active' || newStatus === 'Completed') {
      setStatus(newStatus);
    }
  };

  return (
    <section className={styles.container}>
      <span>{status !== 'Completed' ? `${memoActiveTasks} tasks left` : 'completed tasks'}</span>
      <div className={styles.buttons}>
        <button 
          onClick={handleStatusChange}
          className={`${styles.controlButton} ${status === 'All' ? `${styles.chosen}` : ''}`}
          >
          All</button>
        <button 
          onClick={handleStatusChange}
          className={`${styles.controlButton} ${status === 'Active' ? `${styles.chosen}` : ''}`}
          >
          Active</button>
        <button 
          onClick={handleStatusChange}
          className={`${styles.controlButton} ${status === 'Completed' ? `${styles.chosen}` : ''}`}
          >
          Completed</button>
      </div>
    </section>
  )
}