import { ADD_USER, DELETE_USER, UPDATE_USER } from '../constants/action-types';

export const addUser = user => dispatch => dispatch(addUserAsync(user))

export const addUserAsync = user => {
    return {
      type: ADD_USER,
      payload: user
    };
}

export const updateUser = user => dispatch => dispatch(updateUserAsync(user))

export const updateUserAsync = user => {
    return {
      type: UPDATE_USER,
      payload: user
    };
}

export const deleteUser = id => dispatch => dispatch(deleteUserAsync(id))

export const deleteUserAsync = id => {
    return {
      type: DELETE_USER,
      payload: id
    };
}
