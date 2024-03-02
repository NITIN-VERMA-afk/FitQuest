import React from 'react';
import { Button } from '@mui/material';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoItemProps {
    task: Task;
    deleteTask: (id: number) => void;
    toggleComplete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, deleteTask, toggleComplete }) => {
    const handleChange = (): void => {
        toggleComplete(task.id);
    };

    return (
        <>
            <div>
                <input type="checkbox" checked={task.completed} onChange={handleChange} />
                <p>{task.text}</p>
                <Button onClick={() => deleteTask(task.id)}>x</Button>
            </div>
        </>
    );
};

export default TodoItem;

