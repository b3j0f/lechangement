import { ADD_REASON, ADD_REASONS, DELETE_REASON } from './actions';

// Initial State
const initialState = { data: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REASON :
      return {
        data: [action.reason, ...state.data],
      };

    case ADD_REASONS :
      return {
        data: action.reasons,
      };

    case DELETE_REASON :
      return {
        data: state.data.filter(reason => reason.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all reasons
export const getReasons = state => state.reasons.data;

// Get reason by cuid
export const getReason = (state, cuid) => state.reasons.data.filter(reason => reason.cuid === cuid)[0];

// Export Reducer
export default reducer;
