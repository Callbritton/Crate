// This file is building the user table with attributes (keys with data types for values)
// Sequelize is an ORM (object relational mapper) - it's like the JS version of ActiveRecord

// Up dictates how to perform the defined migration and down dictates how to
// undo it. See sequelize.org docs for detailed steps on generating tables
// and manipulating data

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        // id can't be false
        allowNull: false,
        // I believe this means that the ids automatically increment ??
        autoIncrement: true,
        // Has a PK (I assume that's the ID)
        primaryKey: true,
        // The id will be an integer
        type: Sequelize.INTEGER
      },
      name: {
        // The name will be a string, etc...
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      role: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
}
