import FAQ from '../models/faq';
import { getMany, saveOrUpdate, getOne, removeOne } from './utils';
import '../hooks/faq';

/**
 * Get faqs
 * @param req
 * @param res
 * @returns void
 */
export function getFAQs(req, res) {
    getMany(FAQ, req, res);
}

/**
 * Save a faq
 * @param req
 * @param res
 * @returns void
 */
export function addFAQ(req, res) {
    saveOrUpdate(FAQ, req, res);
}

/**
 * Update a faq
 * @param req
 * @param res
 * @returns void
 */
export function updateFAQ(req, res) {
    addFAQ(req, res);
}

/**
 * Get a single faq
 * @param req
 * @param res
 * @returns void
 */
export function getFAQ(req, res) {
    getOne(FAQ, req, res);
}

/**
 * Delete a faq
 * @param req
 * @param res
 * @returns void
 */
export function deleteFAQ(req, res) {
    removeOne(FAQ, req, res);
}
