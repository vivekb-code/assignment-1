const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            role: {
                type: DataTypes.ENUM,
                values: ['ADMIN', 'EMPLOYEE']
            },
        },
        {
            tableName: 'User',
            defaultScope: {
                attributes: { exclude: ['password'] },
            },
            scopes: {
                withSecret: {
                    attributes: {},
                },
            },
            timestamps: false
        },
    );

    User.beforeCreate(async (user, options) => {
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        user.password = hashedPassword;
    });

    User.beforeBulkCreate(async (users, options) => {
        for (const user of users) {
            const hashedPassword = await bcrypt.hash(user.password, saltRounds);
            user.password = hashedPassword;
        }
    });

    return User;
};
