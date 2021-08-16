import * as actionTypes from 'redux/phonebook/phonebook-types';
import shortid from 'shortid';

export const addContact = newContact => ({
  type: actionTypes.ADD_CONTACT,
  payload: { id: shortid.generate(), ...newContact },
});

export const deleteContact = id => ({
  type: actionTypes.DELETE_CONTACT,
  payload: id,
});

export const filterContacts = event => ({
  type: actionTypes.FILTER_CONTACT,
  payload: event.target.value,
});
