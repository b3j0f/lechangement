import { Router } from 'express';
import * as UserController from '../controllers/user';
const router = new Router();

// Get all Users
router.route('/users').get(UserController.getUsers);

// Get one user by cuid
router.route('/users/:cuid').get(UserController.getUser);

// Add a new User
router.route('/users').post(UserController.addUser);

// Update a User
router.route('/users/:cuid').put(UserController.updateUser);

// Delete a user by cuid
router.route('/users/:cuid').delete(UserController.deleteUser);

export default router;
