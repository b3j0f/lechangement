import { Router } from 'express';
import * as ThemeController from '../controllers/theme';
const router = new Router();

// Get all Themes
router.route('/themes').get(ThemeController.getThemes);

// Get one theme by cuid
router.route('/themes/:cuid').get(ThemeController.getTheme);

// Add a new Theme
router.route('/themes').post(ThemeController.addTheme);

// Delete a theme by cuid
router.route('/themes/:cuid').delete(ThemeController.deleteTheme);

export default router;
