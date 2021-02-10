'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('style', [
      {
        description: 'A space cowboy outfit',
        image_url: 'https://i.pinimg.com/originals/0d/75/36/0d75363db5808bd972a3b66caa453636.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('style', null, {});
  }
}
