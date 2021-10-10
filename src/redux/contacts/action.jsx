import * as types from './constants';

export const setContact = (data) => async (dispatch) => {
  try {
    dispatch({
      type: types.CREATE_CONTACT_START,
    });
    return dispatch({
      type: types.CREATE_CONTACT_SUCCESS,
      payload: data,
    });
  } catch (e) {
    return dispatch({
      type: types.CREATE_CONTACT_ERROR,
      payload: e,
    });
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    dispatch({
      type: types.DELETE_CONTACT_START,
    });
    return dispatch({
      type: types.DELETE_CONTACT_SUCCESS,
      payload: id,
    });
  } catch (e) {
    return dispatch({
      type: types.DELETE_CONTACT_ERROR,
      payload: e,
    });
  }
};

export const changeContact = (data) => async (dispatch) => {
  try {
    dispatch({
      type: types.CHANGE_CONTACT_START,
    });
    return dispatch({
      type: types.CHANGE_CONTACT_SUCCESS,
      payload: data,
    });
  } catch (e) {
    return dispatch({
      type: types.CHANGE_CONTACT_ERROR,
      payload: e,
    });
  }
};

