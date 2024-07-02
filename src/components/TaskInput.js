import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { TextField, Button, Box } from '@mui/material';

const TaskInput = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (task.trim()) {
            dispatch(addTask({ id: Date.now(), text: task, completed: false }));
            setTask('');
        }
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
            <TextField
                label="New Task"
                variant="outlined"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
                fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleAddTask}>
                Add Task
            </Button>
        </Box>
    );
};

export default TaskInput;
