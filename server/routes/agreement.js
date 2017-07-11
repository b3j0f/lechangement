import { Router } from 'express';
import * as AgreementController from '../controllers/agreement';
const router = new Router();

// Get all Agreements
router.route('/agreements').get(AgreementController.getAgreements);

// Get one agreement by cuid
router.route('/agreements/:cuid').get(AgreementController.getAgreement);

// Add a new Agreement
router.route('/agreements').post(AgreementController.addAgreement);

// Delete a agreement by cuid
router.route('/agreements/:cuid').delete(AgreementController.deleteAgreement);

export default router;
