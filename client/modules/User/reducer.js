import { ADD_USER, ADD_USERS, UPDATE_USER, DELETE_USER } from './actions';

// Initial State
const initialState = { data: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER :
      return {
        data: [action.user, ...state.data],
      };

    case ADD_USERS :
      return {
        data: action.users,
      };

      case UPDATE_USER :
        return {
          data: action.user,
        };

    case DELETE_USER :
      return {
        data: state.data.filter(user => user.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all users
export const getUsers = state => state.users.data;

// Get user by cuid
export const getUser = (state, cuid) => state.users.data.filter(user => user.cuid === cuid)[0];

// Export Reducer
export default reducer;
