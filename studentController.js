const Student = require('../models/studentModel');

exports.getAllStudents = async (req, res) => {
  const students = await Student.find();
  res.render('index', { students });
};

exports.getAddStudentForm = (req, res) => {
  res.render('addStudent');
};

exports.addStudent = async (req, res) => {
  const { name, studentId, enrollmentDate, department } = req.body;
  const newStudent = new Student({ name, studentId, enrollmentDate, department });
  await newStudent.save();
  res.redirect('/');
};

exports.getEditStudentForm = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.render('editStudent', { student });
};

exports.editStudent = async (req, res) => {
  const { name, studentId, enrollmentDate, department } = req.body;
  await Student.findByIdAndUpdate(req.params.id, { name, studentId, enrollmentDate, department });
  res.redirect('/');
};

exports.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect('/');
};
