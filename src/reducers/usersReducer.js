import { ADD_USER, UPDATE_USER, DELETE_USER } from '../constants/action-types';

export default (state=[], action) => {

  switch (action.type) {

    case ADD_USER:
      console.log('adding');
      return [...state, action.payload]

    case UPDATE_USER:
      console.log('updating');
      return state.map(person => {
        if(person.id === action.payload.id) {
          return action.payload;
        }
        return person;
      });

    case DELETE_USER:
      console.log('deleting');
      return state.filter( person => person.id !== action.payload )

    default:
      return state;
  };
};
