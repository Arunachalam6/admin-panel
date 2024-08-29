import Student from '../models/Student.js';

export const createStudent = async (req, res) => {
    const student = await Student.create(req.body);
    res.json(student);
};

export const getStudents = async (req, res) => {
    const students = await Student.findAll();
    res.json(students);
};

export const updateStudent = async (req, res) => {
    const student = await Student.update(req.body, { where: { id: req.params.id } });
    res.json(student);
};

export const deleteStudent = async (req, res) => {
    await Student.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
};
