import { Router } from 'express';
import * as FAQController from '../controllers/faq';
const router = new Router();

// Get all FAQs
router.route('/faqs').get(FAQController.getFAQs);

// Get one faq by cuid
router.route('/faqs/:cuid').get(FAQController.getFAQ);

// Add a new FAQ
router.route('/faqs').post(FAQController.addFAQ);

// Update a FAQ
router.route('/faqs/:cuid').put(FAQController.updateFAQ);

// Delete a faq by cuid
router.route('/faqs/:cuid').delete(FAQController.deleteFAQ);

export default router;
