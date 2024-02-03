const router = require('express').Router();
const authController = require('../controllers/authenticationController');
const userController = require('../controllers/userController');

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;