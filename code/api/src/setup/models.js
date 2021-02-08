// Imports
import Sequelize from 'sequelize'

// App Imports
import databaseConnection from './database'

// Survey model will need to be added to this file (../modules/survey/model)
const models = {
  User: databaseConnection.import('../modules/user/model'),
  Product: databaseConnection.import('../modules/product/model'),
  Crate: databaseConnection.import('../modules/crate/model'),
  Subscription: databaseConnection.import('../modules/subscription/model')
}

// Looks like for each model created above it sets associations (relationships)
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models)
  }
})

models.sequelize = databaseConnection
models.Sequelize = Sequelize

export default models
