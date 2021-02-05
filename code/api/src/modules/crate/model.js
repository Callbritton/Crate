'use strict'

module.exports = function(sequelize, DataTypes) {
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })

  // Sets up the relationship for a One-To-Many Relationship
  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
  }

  return Crate
}
