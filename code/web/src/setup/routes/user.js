// App Imports
import Login from '../../modules/user/Login'
import Signup from '../../modules/user/Signup'
import Profile from '../../modules/user/Profile'
import Subscriptions from '../../modules/user/Subscriptions'

// User routes
export default {
  login: {
    path: '/user/login',
    component: Login
  },

  signup: {
    path: '/user/signup',
    component: Signup
  },

  This will add the route for the prof
  // survey: {
  //   path: '/user/style-preferences',
  //   component: Survey,
  //   auth: true
  // },

  profile: {
    path: '/user/style-preferences',
    component: Survey,
    auth: true
  }

  subscriptions: {
    path: '/user/subscriptions',
    component: Subscriptions,
    auth: true
  }
}
