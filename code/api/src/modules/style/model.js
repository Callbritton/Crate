'use strict'

// STYLE
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('styles', {
    description: {
      type: DataTypes.STRING
    },
    image_url: {
      type: DataTypes.STRING
    }
  })

  Style.associate = function(models) {
    Style.hasMany(models.User, {
      foreignKey: 'style_survey',
      as: 'users',
    })
  }
  return Style
}
