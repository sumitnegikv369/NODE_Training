const User = require("../models/user");

const adminUserData = {
    username: 'admin',
    email: 'admin@example.com',
    password: 'adminpassword', 
    role: 'admin'
};

const seedAdmin = async () => {
    try {
        const existingAdmin = await User.findOne({ role: 'admin' });
        if (existingAdmin) {
            return;
        }

        const hashedPassword = await bcrypt.hash(adminUserData.password, 10);
        adminUserData.password = hashedPassword;

        const adminUser = new User(adminUserData);
        await adminUser.save();

        console.log('Admin user seeded successfully.');
    } catch (error) {
        console.error('Error seeding admin user:', error);
    } 
}


module.exports = seedAdmin;