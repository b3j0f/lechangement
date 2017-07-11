import Reason from '../models/reason';
import { getMany, saveOrUpdate, getOne, removeOne } from './utils';
import '../hooks/reason';

/**
 * Get reasons
 * @param req
 * @param res
 * @returns void
 */
export function getReasons(req, res) {
  getMany(Reason, req, res);
}

/**
 * Save a reason
 * @param req
 * @param res
 * @returns void
 */
export function addReason(req, res) {
    saveOrUpdate(Reason, req, res);
}

/**
 * Get a single reason
 * @param req
 * @param res
 * @returns void
 */
export function getReason(req, res) {
    getOne(Reason, req, res);
}

/**
 * Delete a reason
 * @param req
 * @param res
 * @returns void
 */
export function deleteReason(req, res) {
    removeOne(Reason, req, res);
}
