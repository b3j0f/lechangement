import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_REASON = 'ADD_REASON';
export const GET_REASONS = 'GET_REASONS';

// Export Actions
function addReason(reason) {
  return {
    type: ADD_REASON,
    payload: reason,
    success: true
  };
}

export function addReasonRequest(reason) {
  return (dispatch) => {
    return callApi('reasons', 'post', {
      reason: {
        message: reason.message,
        author: reason.author
      },
  }).then(res => dispatch(addReason(res.reason)));
  };
}

export function getReasons(reasons) {
  return {
    type: GET_REASONS,
    payload: reasons,
    success: true
  };
}

export function getReasonsRequest(filter) {
  return (dispatch) => {
    return callApi('reasons', 'get', filter).then(res => {
      dispatch(getReasons(res.reasons));
    });
  };
}
