import React, { useRef, useState } from 'react';
import { FormWrapper } from './style';
import { Button, TextField } from '@mui/material';
import NumberFormat from 'react-number-format';
import { useDispatch } from 'react-redux';
import { setContact } from '../../redux/contacts/action';

const stateForm = {
  name: "",
  surname: "",
  number: "",
};

export const FormContact = () => {
  const form = useRef(null);
  const dispatch = useDispatch();

  const [valueForm, setValueForm] = useState(stateForm);
  const handleChange = (event) => {
    setValueForm({
      ...valueForm,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (valueForm.number[valueForm.number.length - 1] === "_") return alert("Введите полностью номер телефона");
    setValueForm((valueForm.id = Date.now()));
    dispatch(setContact(valueForm));
    setValueForm(stateForm);
  };
  return (
    <FormWrapper onSubmit={handleSubmit} ref={form}>
      <TextField
        required
        id="outlined-required"
        name="name"
        value={valueForm.name}
        onChange={handleChange}
        label="Имя"
      />
      <TextField
        required
        id="outlined-required"
        name="surname"
        value={valueForm.surname}
        onChange={handleChange}
        label="Фамилия"
      />
      <NumberFormat
        customInput={TextField}
        name="number"
        value={valueForm.number}
        onChange={handleChange}
        required
        label="Номер"
        format="+# (###) ###-####"
        mask="_"
      />
      <Button variant="contained" type="submit">
        Принять
      </Button>
    </FormWrapper>
  );
};
