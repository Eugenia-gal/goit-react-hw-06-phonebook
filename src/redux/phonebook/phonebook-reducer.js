import { combineReducers } from 'redux';
import * as actionTypes from 'redux/phonebook/phonebook-types';
import initialContacts from 'Data/contacts.json';

const itemsReducer = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_CONTACT: {
      const contactNames = state.map(contact => contact.name);
      const isRepeat = contactNames.indexOf(payload.name) !== -1;

      if (isRepeat) {
        alert(`${payload.name} is already in Contacts`);
        return state;
      }
      return [payload, ...state];
    }
    case actionTypes.DELETE_CONTACT: {
      return state.filter(contact => contact.id !== payload);
    }
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER_CONTACT: {
      return payload;
    }
    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
