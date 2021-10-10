import React, {useCallback, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TableWrapper } from './style';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Portal } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteContact } from '../../redux/contacts/action';
import { Modal } from '../Modal';
const stateModal = {isOpen: false, changeField: "", changeText: "", id: ""}

export const TableContacts = () => {
  const { contacts } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(stateModal);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const closeModal = useCallback(() => setModal(stateModal),[])

  const handleChangeItem = (changeField, changeText, id) => {
    setModal({
      isOpen: true,
      changeField: changeField,
      changeText: changeText,
      id: id,
    })
  }

  return (
    <TableWrapper>
      {!contacts.length ? (
        <></>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Имя</TableCell>
                <TableCell>Фамилия</TableCell>
                <TableCell>Номер</TableCell>
                <TableCell>Удалить</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map((item, index) => (
                <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell>№{index + 1}</TableCell>
                  <TableCell style={{ cursor: "pointer" }} onClick={() => handleChangeItem("name",item.name,item.id)}>{item.name}</TableCell>
                  <TableCell style={{ cursor: "pointer" }} onClick={() => handleChangeItem("surname",item.surname,item.id)}>{item.surname}</TableCell>
                  <TableCell style={{ cursor: "pointer" }} onClick={() => handleChangeItem("number",item.number,item.id)}>{item.number}</TableCell>
                  <TableCell style={{ cursor: "pointer" }} onClick={() => handleDeleteContact(item.id)}>
                    <DeleteIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {modal.isOpen ? (
          <Portal>
            <Modal item={modal} changeIsOpen={closeModal}/>
          </Portal>
        ) : null}
    </TableWrapper>
  );
};
