import * as types from './constants';

const initialState = {
  contacts: [],
};
export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.concat([action.payload]),
      };
    case types.DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.filter((item) => item.id !== action.payload),
      };
    case types.CHANGE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.map((item) => {
          if (item.id === action.payload.id) item[action.payload.field] = action.payload.newInfoField;
          return item;
        }),
      };
    default:
      return state;
  }
};
