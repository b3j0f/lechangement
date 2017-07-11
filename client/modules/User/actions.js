import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_USER = 'ADD_USER';
export const ADD_USERS = 'ADD_USERS';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

// Export Actions
export function addUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}

export function addUserRequest(user) {
  return (dispatch) => {
    return callApi('users', 'post', {
      user: {
        name: user.name,
        description: user.description,
        themes: user.themes,
        resources: user.resources
      },
  }).then(res => dispatch(addUser(res.user)));
  };
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    user,
  };
}

export function updateUserRequest(user) {
  return (dispatch) => {
    return callApi('users', 'put', {
      user: {
          name: user.name,
          description: user.description,
          themes: user.themes,
          resources: user.resources
      },
  }).then(res => dispatch(updateUser(res.user)));
  };
}

export function addUsers(users) {
  return {
    type: ADD_USERS,
    users,
  };
}

export function fetchUsers() {
  return (dispatch) => {
    return callApi('users').then(res => {
      dispatch(addUsers(res.users));
    });
  };
}

export function fetchUser(cuid) {
  return (dispatch) => {
    return callApi(`users/${cuid}`).then(res => dispatch(addUser(res.user)));
  };
}

export function deleteUser(cuid) {
  return {
    type: DELETE_USER,
    cuid,
  };
}

export function deleteUserRequest(cuid) {
  return (dispatch) => {
    return callApi(`users/${cuid}`, 'delete').then(() => dispatch(deleteUser(cuid)));
  };
}
