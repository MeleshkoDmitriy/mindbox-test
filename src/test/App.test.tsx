// import { render, screen, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { setupStore } from '../store/store';
// import App from '../App';

// describe('App', () => {
//   test('правильно отрисовывает компонент', () => {
//     render(
//       <Provider store={setupStore()}>
//         <App />
//       </Provider>
//     );

//     expect(screen.getByText('todos app')).toBeInTheDocument();
//     expect(screen.getByText('Loading...')).toBeInTheDocument();
//   });

//   test('обновляет статус при нажатии на кнопку', () => {
//     render(
//       <Provider store={setupStore()}>
//         <App />
//       </Provider>
//     );

//     fireEvent.click(screen.getByText('Active'));
//     expect(screen.getByText('Active')).toHaveClass('chosen');

//     fireEvent.click(screen.getByText('Completed'));
//     expect(screen.getByText('Completed')).toHaveClass('chosen');
//   });

//   test('удаляет задачу', async () => {
//     render(
//       <Provider store={setupStore()}>
//         <App />
//       </Provider>
//     );

//     fireEvent.click(screen.getByText('+'));
//     fireEvent.change(screen.getByPlaceholderText('What needs to be done?'), {
//       target: { value: 'Тестовая задача' },
//     });
//     fireEvent.click(screen.getByText('Add'));

//     fireEvent.click(screen.getByText('X'));
//     expect(screen.queryByText('Тестовая задача')).not.toBeInTheDocument();
//   });

//   test('обновляет статус задачи', async () => {
//     render(
//       <Provider store={setupStore()}>
//         <App />
//       </Provider>
//     );

//     fireEvent.click(screen.getByText('+'));
//     fireEvent.change(screen.getByPlaceholderText('What needs to be done?'), {
//       target: { value: 'Тестовая задача' },
//     });
//     fireEvent.click(screen.getByText('Add'));

//     fireEvent.click(screen.getByRole('checkbox'));
//     expect(screen.getByText('Тестовая задача')).toHaveClass('done');
//   });
// });
