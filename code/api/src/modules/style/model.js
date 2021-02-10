'use strict'

// STYLE
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('style', {
    description: {
      type: DataTypes.STRING
    },
    image_url: {
      type: DataTypes.STRING
    }
  })
}
