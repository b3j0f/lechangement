import ResourceType from '../models/resourceType';
import { getMany, saveOrUpdate, getOne, removeOne } from './utils';
import '../hooks/resourceType';

/**
 * Get resourceTypes
 * @param req
 * @param res
 * @returns void
 */
export function getResourceTypes(req, res) {
  getMany(ResourceType, req, res);
}

/**
 * Save a resourceType
 * @param req
 * @param res
 * @returns void
 */
export function addResourceType(req, res) {
    saveOrUpdate(ResourceType, req, res);
}

/**
 * Get a single resourceType
 * @param req
 * @param res
 * @returns void
 */
export function getResourceType(req, res) {
    getOne(ResourceType, req, res);
}

/**
 * Delete a resourceType
 * @param req
 * @param res
 * @returns void
 */
export function deleteResourceType(req, res) {
    removeOne(ResourceType, req, res);
}
