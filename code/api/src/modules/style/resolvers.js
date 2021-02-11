// App Imports
import models from '../../setup/models'

// Get all styles
export async function getAll() {
  return await models.Style.findAll({ order: [['id', 'DESC']] })
}

// Get style by ID
export async function getById(parentValue, { styleId }) {
  const style = await models.Style.findOne({ where: { id: styleId } })

  if (!style) {
    // Style does not exists
    throw new Error('The style you are looking for does not exists or has been discontinued.')
  } else {
    return style
  }
}

// Create style
export async function create(parentValue, { description, image_url }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Style.create({
      description,
      image_url
    })
  } else {
    throw new Error('Operation denied.')
  }
}

// Update style
export async function update(parentValue, { id, description, image_url }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Style.update(
      {
        description,
        image_url
      },
      { where: { id } }
    )
  } else {
    throw new Error('Operation denied.')
  }
}

// Delete style
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    const style = await models.Style.findOne({where: {id}})

    if (!style) {
      // Style does not exist
      throw new Error('The style does not exists.')
    } else {
      return await models.Style.destroy({where: {id}})
    }
  } else {
    throw new Error('Operation denied.')
  }
}
