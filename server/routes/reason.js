import { Router } from 'express';
import * as ReasonController from '../controllers/reason';
const router = new Router();

// Get all Reasons
router.route('/reasons').get(ReasonController.getReasons);

// Get one reason by cuid
router.route('/reasons/:cuid').get(ReasonController.getReason);

// Add a new Reason
router.route('/reasons').post(ReasonController.addReason);

// Delete a reason by cuid
router.route('/reasons/:cuid').delete(ReasonController.deleteReason);

export default router;
