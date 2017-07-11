import Vote from '../models/vote';
import { getMany, saveOrUpdate, getOne, removeOne } from './utils';
import '../hooks/vote';

/**
 * Get votes
 * @param req
 * @param res
 * @returns void
 */
export function getVotes(req, res) {
  getMany(Vote, req, res);
}

/**
 * Save a vote
 * @param req
 * @param res
 * @returns void
 */
export function addVote(req, res) {
  saveOrUpdate(Vote, req, res);
}

/**
 * Update a vote
 * @param req
 * @param res
 * @returns void
 */
export function updateVote(req, res) {
  addVote(Vote, req, res);
}

/**
 * Get a single vote
 * @param req
 * @param res
 * @returns void
 */
export function getVote(req, res) {
    getOne(Vote, req, res);
}

/**
 * Delete a vote
 * @param req
 * @param res
 * @returns void
 */
export function deleteVote(req, res) {
    removeOne(Vote, req, res);
}
