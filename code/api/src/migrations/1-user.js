// Table creation happens here
// Database additions are created here

module.exports = {
  // up == this will happen when the migration is successful
  // queryInterface == The interface that Sequelize uses to talk to all databases
  // Sequelize == is a promise-based ORM for Node.js and io.js.
  // It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite and MSSQL
  // and features solid transaction support, relations, read replication and more.
  up: (queryInterface, Sequelize) => {
    // returns a Table of users with [id, name, email, password, role, createdAt, updatedAt,]
    return queryInterface.createTable('users', {
      id: {
        // cannot be nil
        allowNull: false,
        // will increment
        autoIncrement: true,
        // is primaryKey
        primaryKey: true,
        // data type is Integer
        type: Sequelize.INTEGER
      },
      name: {
        // data type is String
        type: Sequelize.STRING
      },
      email: {
        // data type is Text
        // Both a string and text field will hold information that you can freely write in.
        // The major difference between the two fields is how many characters you can put in these fields.
        // A string field has a limit of 255 characters, whereas a text field has a character limit of 30,000 characters.
        type: Sequelize.TEXT
      },
      password: {
        // data type is Text
        type: Sequelize.TEXT
      },
      role: {
          // data type is Text
        type: Sequelize.TEXT
      },
      createdAt: {
        // can't be nil
        allowNull: false,
          // data type is Date
          // It's important to keep in mind that while the time value at the heart of a Date object is UTC,
          // the basic methods to fetch the date and time or its components
          // all work in the local (i.e. host system) time zone and offset.
        type: Sequelize.DATE
      },
      updatedAt: {
        // can't be nil
        allowNull: false,
        // data type is Date
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    // will drop the table of users
    return queryInterface.dropTable('users');
  }
}
