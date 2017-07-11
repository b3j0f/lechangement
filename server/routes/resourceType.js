import { Router } from 'express';
import * as ResourceTypeController from '../controllers/resourceType';
const router = new Router();

// Get all ResourceTypes
router.route('/resourceTypes').get(ResourceTypeController.getResourceTypes);

// Get one resourceType by cuid
router.route('/resourceTypes/:cuid').get(ResourceTypeController.getResourceType);

// Add a new ResourceType
router.route('/resourceTypes').post(ResourceTypeController.addResourceType);

// Delete a resourceType by cuid
router.route('/resourceTypes/:cuid').delete(ResourceTypeController.deleteResourceType);

export default router;
