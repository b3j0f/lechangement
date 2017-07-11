import User from '../models/user';
import { getMany, saveOrUpdate, getOne, removeOne } from './utils';
import '../hooks/user';

/**
 * Get all users
 * @param req
 * @param res
 * @returns void
 */
export function getUsers(req, res) {
    getMany(User, req, res);
}

/**
 * Save a user
 * @param req
 * @param res
 * @returns void
 */
export function addUser(req, res) {
    saveOrUpdate(User, req, res);
}

/**
 * Update a user
 * @param req
 * @param res
 * @returns void
 */
export function updateUser(req, res) {
    addUser(req, res);
}

/**
 * Get a single user
 * @param req
 * @param res
 * @returns void
 */
export function getUser(req, res) {
    getOne(User, req, res);
}

/**
 * Delete a user
 * @param req
 * @param res
 * @returns void
 */
export function deleteUser(req, res) {
    removeOne(User, req, res);
}
