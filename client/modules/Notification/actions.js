export const GET_NOTIFICATIONS = 'GET_NOTIFICATIONS';
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const ADD_NOTIFIED = 'ADD_NOTIFIED';

export function getNotifications(notifications) {
    return {
        type: GET_NOTIFICATIONS,
        payload: notifications,
        success: true
    }
}

export function getNotificationsRequest(filter) {
  return (dispatch) => {
    return callApi('notifications', 'get', filter).then(res => dispatch(getNotifications(res.notifications)));
  };
}

export function addNotification(notification) {
    return {
        type: ADD_NOTIFICATION,
        payload: notification,
        success: true
    }
}

export function addNotificationRequest(notification) {
  return (dispatch) => {
    return callApi('notifications', 'post', {
      notification: {
        target: notification.author
        action: notification.action,
        message: notification.message,
        author: notification.author
      },
  }).then(res => dispatch(addNotification(res.notification)));
  };
}

export function addNotified(cuid) {
    return {
        type: ADD_NOTIFIED,
        payload: cuid,
        success: true
    }
}
