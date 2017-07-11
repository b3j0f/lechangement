import { Router } from 'express';
import * as NotificationController from '../controllers/notification';
const router = new Router();

// Get all Notifications
router.route('/notifications').get(NotificationController.getNotifications);

// Get one notification by cuid
router.route('/notifications/:cuid').get(NotificationController.getNotification);

// Add a new Notification
router.route('/notifications').post(NotificationController.addNotification);

// Delete a notification by cuid
router.route('/notifications/:cuid').delete(NotificationController.deleteNotification);

export default router;
