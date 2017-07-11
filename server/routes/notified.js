import { Router } from 'express';
import * as NotifiedController from '../controllers/notified';
const router = new Router();

// Get all Notifieds
router.route('/notifieds').get(NotifiedController.getNotifieds);

// Get one notified by cuid
router.route('/notifieds/:cuid').get(NotifiedController.getNotified);

// Add a new Notified
router.route('/notifieds').post(NotifiedController.addNotified);

// Delete a notified by cuid
router.route('/notifieds/:cuid').delete(NotifiedController.deleteNotified);

export default router;
