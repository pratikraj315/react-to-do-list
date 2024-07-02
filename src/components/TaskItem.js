import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/actions';
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditTaskPopup from './EditTaskPopup';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    const handleToggle = () => {
        dispatch(toggleTask(task.id));
    };

    return (
        <ListItem
            sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
            secondaryAction={
                <>
                    <IconButton edge="end" aria-label="edit" onClick={() => setIsEditing(true)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </>
            }
        >
            <Checkbox checked={task.completed} onChange={handleToggle} />
            <ListItemText
                primary={task.text}
                sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            />
            {isEditing && <EditTaskPopup task={task} closePopup={() => setIsEditing(false)} />}
        </ListItem>
    );
};

export default TaskItem;
