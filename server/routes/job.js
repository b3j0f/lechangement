import { Router } from 'express';
import * as JobController from '../controllers/job';
const router = new Router();

// Get all Jobs
router.route('/jobs').get(JobController.getJobs);

// Get one job by cuid
router.route('/jobs/:cuid').get(JobController.getJob);

// Add a new Job
router.route('/jobs').post(JobController.addJob);

// Update a Job
router.route('/jobs/:cuid').put(JobController.updateJob);

// Delete a job by cuid
router.route('/jobs/:cuid').delete(JobController.deleteJob);

export default router;
