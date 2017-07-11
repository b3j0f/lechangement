import { Router } from 'express';
import * as VoteController from '../controllers/vote';
const router = new Router();

// Get all Votes
router.route('/votes').get(VoteController.getVotes);

// Get one vote by cuid
router.route('/votes/:cuid').get(VoteController.getVote);

// Add a new Vote
router.route('/votes').post(VoteController.addVote);

// Update a Vote
router.route('/votes/:cuid').put(VoteController.updateVote);

// Delete a vote by cuid
router.route('/votes/:cuid').delete(VoteController.deleteVote);

export default router;
