import actionTypes from './contacts-types';
import { v4 as uuidv4 } from 'uuid';

export const addContact = (name, number) => ({
  type: actionTypes.ADD,
  payload: { id: uuidv4(), name, number },
});

export const deleteContact = id => ({
  type: actionTypes.DELETE,
  payload: id,
});

export const filterContacts = value => ({
  type: actionTypes.FILTER,
  payload: value,
});
