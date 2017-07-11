import GET_NOTIFICATIONS, ADD_NOTIFICATION, ADD_NOTIFIED from './actions';

function notificationsById(state, action) {
    switch(action.type) {
        case GET_NOTIFICATIONS:
        const result = {};
        action.payload.forEach(
            notification => {result[notification.cuid] = notification;}
        );
        return result;
        case ADD_NOTIFICATION:
        return {
            action.payload.cuid: action.payload,
            ...state,
        };
        case ADD_NOTIFIED:
        const result = {...state};
        result[action.payload][notified] = true;
        return result;
        default:
        return state;
    }
}

function notifications(state, action) {
    switch(action.type) {
        case GET_NOTIFICATIONS:
        return action.payload;
        case ADD_NOTIFICATION:
        return [
            ...state, state.notificationsById[action.payload.cuid]
        ];
        default:
        return state;
    }
}

export default reducer = combinereducers({notificationsById, notifications});
