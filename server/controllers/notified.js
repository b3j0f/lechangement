import Notified from '../models/notified';
import { getMany, saveOrUpdate, getOne, removeOne } from './utils';
import '../hooks/notified';

/**
 * Get notifieds
 * @param req
 * @param res
 * @returns void
 */
export function getNotifieds(req, res) {
    getMany(Notified, req, res);
}

/**
 * Save a notified
 * @param req
 * @param res
 * @returns void
 */
export function addNotified(req, res) {
    saveOrUpdate(Notified, req, res);
}

/**
 * Update a notified
 * @param req
 * @param res
 * @returns void
 */
export function updateNotified(req, res) {
    addNotified(req, res);
}

/**
 * Get a single notified
 * @param req
 * @param res
 * @returns void
 */
export function getNotified(req, res) {
    getOne(Notified, req, res);
}

/**
 * Delete a notified
 * @param req
 * @param res
 * @returns void
 */
export function deleteNotified(req, res) {
    removeOne(Notified, req, res);
}
