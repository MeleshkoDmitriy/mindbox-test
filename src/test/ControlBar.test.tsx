import { render, screen, fireEvent } from '@testing-library/react';
import { ControlBar } from '../components/ControlBar/ControlBar';

describe('ControlBar', () => {
  const mockedSetStatus = jest.fn();

  beforeEach(() => {
    mockedSetStatus.mockClear();
  });

  test('renders the component correctly', () => {
    render(<ControlBar setStatus={mockedSetStatus} memoActiveTasks={5} status="All" />);

    expect(screen.getByText('5 tasks left')).toBeInTheDocument();
    expect(screen.getByText('All')).toHaveClass('chosen');
    expect(screen.getByText('Active')).not.toHaveClass('chosen');
    expect(screen.getByText('Completed')).not.toHaveClass('chosen');
  });

  test('updates the status when a button is clicked', () => {
    render(<ControlBar setStatus={mockedSetStatus} memoActiveTasks={5} status="All" />);

    fireEvent.click(screen.getByText('Active'));
    expect(mockedSetStatus).toHaveBeenCalledWith('Active');

    fireEvent.click(screen.getByText('Completed'));
    expect(mockedSetStatus).toHaveBeenCalledWith('Completed');
  });

  test('does not update the status for invalid button clicks', () => {
    render(<ControlBar setStatus={mockedSetStatus} memoActiveTasks={5} status="All" />);

    fireEvent.click(screen.getByText('Invalid'));
    expect(mockedSetStatus).not.toHaveBeenCalled();
  });

  test('renders the correct text based on the status', () => {
    render(<ControlBar setStatus={mockedSetStatus} memoActiveTasks={5} status="Completed" />);
    expect(screen.getByText('completed tasks')).toBeInTheDocument();

    render(<ControlBar setStatus={mockedSetStatus} memoActiveTasks={5} status="All" />);
    expect(screen.getByText('5 tasks left')).toBeInTheDocument();
  });
});
