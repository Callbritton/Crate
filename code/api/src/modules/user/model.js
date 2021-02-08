// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.
// Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode):
'use strict'

// User
// exports a function that uses Sequelize and DataTypes
// DataTypes == a place holder for data types
// Sequelize == postgres and SQL connection to database

// Lets add another attribute to store the outcome of the survey
module.exports = function(sequelize, DataTypes) {
  // let == is an updated version of var
  let User = sequelize.define('users', {
    // creates an attribute of 'name'
    name: {
      // data type is String
      type: DataTypes.STRING
    },
    // creates an attribute of 'email'
    email: {
      // data type is Text
      type: DataTypes.TEXT
    },
    // creates an attribute of 'password'
    password: {
      // data type is Text
      type: DataTypes.TEXT
    },
    // creates an attribute of 'role'
    role: {
      // data type is Text
      type: DataTypes.TEXT
    }

    // Potentially this is the additional field added to User
    // survey: {
    //   type: DataTypes.STRING
    // }
  })

  // makes relationships for User
  User.associate = function(models) {
    // a User has many Subscriptions
    User.hasMany(models.Subscription)
  }
  // returns the object User
  return User
}
