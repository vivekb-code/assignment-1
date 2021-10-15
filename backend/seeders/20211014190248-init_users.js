'use strict';
const { User } = require('./../models');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await User.sync();
    await User.bulkCreate(
      [
        {
          name: 'James',
          email: 'James@123.com',
          password: '1!23#4',
          role: 'EMPLOYEE'
        },
        {
          name: 'Peter',
          email: 'Peter@123.com',
          password: '8^23!3',
          role: 'EMPLOYEE'
        },
        {
          name: 'John',
          email: 'John@123.com',
          password: '98!891',
          role: 'ADMIN'
        },
        {
          name: 'Fred',
          email: 'Fred@123.com',
          password: '68651',
          role: 'ADMIN'
        },
      ],
      {});
  },

  down: async (queryInterface, Sequelize) => { }
};
