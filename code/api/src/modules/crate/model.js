'use strict'

// Strict mode makes it easier to write "secure" JavaScript.

// Strict mode changes previously accepted "bad syntax" into real errors.

// As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

module.exports = function(sequelize, DataTypes) {
  // This appears to be defining the object and it's attributes like we would
  // in a Rails model 
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })

  // I believe this is setting the has_many association like in a Rails model
  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
  }

  return Crate
}
