import Solution from '../models/solution';
import { getMany, saveOrUpdate, getOne, removeOne } from './utils';
import '../hooks/solution';

/**
 * Get solutions
 * @param req
 * @param res
 * @returns void
 */
export function getSolutions(req, res) {
    getMany(Solution, req, res);
}

/**
 * Save a solution
 * @param req
 * @param res
 * @returns void
 */
export function addSolution(req, res) {
    saveOrUpdate(Solution, req, res);
}

/**
 * Update a solution
 * @param req
 * @param res
 * @returns void
 */
export function updateSolution(req, res) {
    addSolution(req, res);
}

/**
 * Get a single solution
 * @param req
 * @param res
 * @returns void
 */
export function getSolution(req, res) {
    getOne(Solution, req, res);
}

/**
 * Delete a solution
 * @param req
 * @param res
 * @returns void
 */
export function deleteSolution(req, res) {
    removeOne(Solution, req, res);
}
