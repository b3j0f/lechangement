import Job from '../models/job';
import { getMany, saveOrUpdate, getOne, removeOne } from './utils';
import '../hooks/job';

/**
 * Get jobs
 * @param req
 * @param res
 * @returns void
 */
export function getJobs(req, res) {
    getMany(Job, req, res);
}

/**
 * Save a job
 * @param req
 * @param res
 * @returns void
 */
export function addJob(req, res) {
    saveOrUpdate(Job, req, res);
}

/**
 * Update a job
 * @param req
 * @param res
 * @returns void
 */
export function updateJob(req, res) {
    addJob(req, res);
}

/**
 * Get a single job
 * @param req
 * @param res
 * @returns void
 */
export function getJob(req, res) {
    getOne(Job, req, res);
}

/**
 * Delete a job
 * @param req
 * @param res
 * @returns void
 */
export function deleteJob(req, res) {
    removeOne(Job, req, res);
}
