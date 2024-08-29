import Mark from '../models/Mark.js';

export const addMarks = async (req, res) => {
    const mark = await Mark.create(req.body);
    res.json(mark);
};

export const getMarksByStudent = async (req, res) => {
    const marks = await Mark.findAll({ where: { student_id: req.params.studentId } });
    res.json(marks);
};
