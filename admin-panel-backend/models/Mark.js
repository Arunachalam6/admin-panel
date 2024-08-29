import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Student from './Student.js';

const Mark = sequelize.define('Mark', {
    reactjs: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nodejs: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    react_native: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    figma: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

Mark.belongsTo(Student, { foreignKey: 'student_id' });

export default Mark;
