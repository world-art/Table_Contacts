import React from 'react';
import { MainWrapper } from './style';
import { FormContact } from '../../components/FormContacts';
import { TableContacts } from '../../components/TableContacts';

export const Main = () => {
  return (
    <MainWrapper>
      <div className="_container">
      <FormContact/>
      </div>
      <TableContacts/>
    </MainWrapper>
  );
};
