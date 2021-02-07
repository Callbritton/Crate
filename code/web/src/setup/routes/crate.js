// App Imports
import List from '../../modules/crate/List'

// Crate routes - navigates user to the /crates page when the "crates" navbar button is clicked
export default {
  list: {
    path: '/crates',
    component: List,
    auth: true
  }
}
