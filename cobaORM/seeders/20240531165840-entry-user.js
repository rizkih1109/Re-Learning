'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
      name: 'Oki',
      email: 'oki@gmail.com',
      password: '12345',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Ogi',
      email: 'ogi@gmail.com',
      password: '123',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
