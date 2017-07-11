import Agreement from '../models/agreement';
import { getMany, saveOrUpdate, getOne, removeOne } from './utils';
import '../hooks/agreement';

/**
* Get agreements
* @param req
* @param res
* @returns void
*/
export function getAgreements(req, res) {
    getMany(Agreement, req, res);
}

/**
* Save an agreement
* @param req
* @param res
* @returns void
*/
export function addAgreement(req, res) {
    saveOrUpdate(Agreement, req, res);
}

/**
* Get a single agreement
* @param req
* @param res
* @returns void
*/
export function getAgreement(req, res) {
    getOne(Agreement, req, res);
}

/**
* Delete a agreement
* @param req
* @param res
* @returns void
*/
export function deleteAgreement(req, res) {
    removeOne(Agreement, req, res);
}
