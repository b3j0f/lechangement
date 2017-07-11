import { ADD_SOLUTION, ADD_SOLUTIONS, UPDATE_SOLUTION, DELETE_SOLUTION } from './actions';

// Initial State
const initialState = { data: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SOLUTION :
      return {
        data: [action.solution, ...state.data],
      };

    case ADD_SOLUTIONS :
      return {
        data: action.solutions,
      };

      case UPDATE_SOLUTION :
        return {
          data: action.solution,
        };

    case DELETE_SOLUTION :
      return {
        data: state.data.filter(solution => solution.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all solutions
export const getSolutions = state => state.solutions.data;

// Get solution by cuid
export const getSolution = (state, cuid) => state.solutions.data.filter(solution => solution.cuid === cuid)[0];

// Export Reducer
export default reducer;
