import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_SOLUTION = 'ADD_SOLUTION';
export const GET_SOLUTIONS = 'GET_SOLUTIONS';
export const UPDATE_SOLUTION = 'UPDATE_SOLUTION';
export const DELETE_SOLUTION = 'DELETE_SOLUTION';

// Export Actions
export function addSolution(solution) {
  return {
    type: ADD_SOLUTION,
    payload: solution,
    success: true
  };
}

export function addSolutionRequest(solution) {
  return (dispatch) => {
    return callApi('solutions', 'post', {
      solution: {
        name: solution.name,
        description: solution.description,
        themes: solution.themes,
        resources: solution.resources
      },
  }).then(res => dispatch(addSolution(res.solution)));
  };
}

export function updateSolution(solution) {
  return {
    type: UPDATE_SOLUTION,
    payload: solution,
    success: true
  };
}

export function updateSolutionRequest(solution) {
  return (dispatch) => {
    return callApi(`solutions/${solution.cuid}`, 'put', {
      solution: {
          name: solution.name,
          description: solution.description,
          themes: solution.themes,
          resources: solution.resources
      },
  }).then(res => dispatch(updateSolution(res.solution)));
  };
}

export function getSolutions(solutions) {
  return {
    type: GET_SOLUTIONS,
    payload: solutions,
    success: true
  };
}

export function getSolutionsRequest(filter) {
  return (dispatch) => {
    return callApi('solutions', 'get', filter).then(res => {
      dispatch(getSolutions(res.solutions));
    });
  };
}

export function deleteSolution(cuid) {
  return {
    type: DELETE_SOLUTION,
    cuid,
  };
}

export function deleteSolutionRequest(cuid) {
  return (dispatch) => {
    return callApi(`solutions/${cuid}`, 'delete').then(() => dispatch(deleteSolution(cuid)));
  };
}
