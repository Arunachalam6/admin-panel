import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Admin = sequelize.define('admins', {
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active',
    },
    createddt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    createdby: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    updateddt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
        onUpdate: DataTypes.NOW,
    },
    updatedby: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: false, // Disable automatic timestamps
});

export default Admin;
