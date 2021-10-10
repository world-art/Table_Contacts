import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeContact } from '../../redux/contacts/action';

export const Modal = ({ item, changeIsOpen }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(item?.changeText);
  const [open, setOpen] = useState(item.isOpen || false);
  const handleSubmit = () => {
    dispatch(changeContact({ id: item.id, field: item.changeField, newInfoField: input }));
    changeIsOpen();
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <Dialog open={open} onClose={() => changeIsOpen()}>
      <DialogTitle>Поменять на</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          type="text"
          fullWidth
          value={input}
          onChange={handleChange}
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => changeIsOpen()}>Отмена</Button>
        <Button onClick={() => handleSubmit()}>Принять</Button>
      </DialogActions>
    </Dialog>
  );
};
