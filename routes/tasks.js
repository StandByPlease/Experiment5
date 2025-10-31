const express = require('express');
const { body, validationResult } = require('express-validator');
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

const router = express.Router();

const validateTask = [
  body('title').notEmpty().withMessage('Title is required').trim().escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
const { getWeather } = require('../controllers/taskController');
router.get('/weather', getWeather);
router.route('/').get(getTasks).post(validateTask, createTask);
router.route('/:id').put(updateTask).delete(deleteTask);

module.exports = router;