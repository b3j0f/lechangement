import { Router } from 'express';
import * as SolutionController from '../controllers/solution';
const router = new Router();

// Get all Solutions
router.route('/solutions').get(SolutionController.getSolutions);

// Get one solution by cuid
router.route('/solutions/:cuid').get(SolutionController.getSolution);

// Add a new Solution
router.route('/solutions').post(SolutionController.addSolution);

// Update a Solution
router.route('/solutions/:cuid').put(SolutionController.updateSolution);

// Delete a solution by cuid
router.route('/solutions/:cuid').delete(SolutionController.deleteSolution);

export default router;
