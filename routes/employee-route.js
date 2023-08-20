const router = require('express').Router();
const asyncMiddleware = require('../middlewares/async-middleware');
const userController = require('../controllers/user-controller');
const upload = require('../services/file-upload-service');

router.patch('/user',upload.single('profile'),asyncMiddleware(userController.updateUser));  // Update Self Account
router.post('/mark-employee-attendance',asyncMiddleware(userController.markEmployeeAttendance));


module.exports = router;