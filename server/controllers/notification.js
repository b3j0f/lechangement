import Notification from '../models/notification';
import { getMany, saveOrUpdate, getOne, removeOne } from './utils';
import '../hooks/notification';

/**
 * Get notifications
 * @param req
 * @param res
 * @returns void
 */
export function getNotifications(req, res) {
    getMany(Notification, req, res);
}

/**
 * Save a notification
 * @param req
 * @param res
 * @returns void
 */
export function addNotification(req, res) {
    saveOrUpdate(Notification, req, res);
}

/**
 * Update a notification
 * @param req
 * @param res
 * @returns void
 */
export function updateNotification(req, res) {
    addNotification(req, res);
}

/**
 * Get a single notification
 * @param req
 * @param res
 * @returns void
 */
export function getNotification(req, res) {
    getOne(Notification, req, res);
}

/**
 * Delete a notification
 * @param req
 * @param res
 * @returns void
 */
export function deleteNotification(req, res) {
    removeOne(Notification, req, res);
}
