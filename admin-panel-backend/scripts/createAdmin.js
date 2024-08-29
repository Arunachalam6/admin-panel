import bcrypt from 'bcryptjs';
import Admin from '../models/admin.js';
import sequelize from '../config/db.js';

const createAdmin = async () => {
    await sequelize.sync();
    const hashedPassword = await bcrypt.hash('adminPassword', 10);
    await Admin.create({ username: 'admin', password: hashedPassword });
    console.log('Admin created');
};

createAdmin();
