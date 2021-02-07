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
//Navigates user to their profile page when "profile" is clicked in the navbar
  profile: {
    path: '/user/profile',
    component: Profile,
    auth: true
  },
//Navigates user to their subscriptions page when "subscriptions" is clicked in the navbar
  subscriptions: {
    path: '/user/subscriptions',
    component: Subscriptions,
    auth: true
  }
}
