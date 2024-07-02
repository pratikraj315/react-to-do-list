import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/actions';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const EditTaskPopup = ({ task, closePopup }) => {
    const [editedTask, setEditedTask] = useState(task.text);
    const dispatch = useDispatch();

    const handleEditTask = () => {
        if (editedTask.trim()) {
            dispatch(editTask({ ...task, text: editedTask }));
            closePopup();
        }
    };

    return (
        <Dialog open onClose={closePopup}>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogContent>
                <TextField
                    fullWidth
                    variant="outlined"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={closePopup}>Cancel</Button>
                <Button variant="contained" color="primary" onClick={handleEditTask}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditTaskPopup;
