const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.getAllStudents);
router.get('/add', studentController.getAddStudentForm);
router.post('/add', studentController.addStudent);
router.get('/edit/:id', studentController.getEditStudentForm);
router.post('/edit/:id', studentController.editStudent);
router.post('/delete/:id', studentController.deleteStudent);

module.exports = router;
