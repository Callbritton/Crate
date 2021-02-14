// Imports
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import userRoutes from '../../setup/routes/user'
import { logout, getStyle } from './api/actions'
// import SurveyItem from '../survey/Item'
// we need to add a Item.js to the '/survey' folder to export


// Component
const Profile = (props) => {

  // useEffect(() => {
  //   getStyle(props.user.details)
  // }, [])

  console.log('user', props.user.style)

  const getStyleName = () => {
    switch (props.user.details.style_survey) {
      case 1:
        return 'Space Cowboy'

      case 2:
        return 'Edgy'

      case 3:
        return 'Casual'

      case 4:
        return 'Hipster'

      default:
        return 'Please take our Style Survey'
    }
  }

  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>My Profile - Crate</title>
      </Helmet>

      {/* Top title bar */}
      <Grid style={{ backgroundColor: grey }}>
        <GridCell style={{ padding: '2em', textAlign: 'center' }}>
          <H3 font="secondary">My profile</H3>
        </GridCell>
      </Grid>

      <Grid>
        <GridCell style={{ padding: '2em', textAlign: 'center' }}>
          <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>

          <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>

          <Link to={userRoutes.subscriptions.path}>
            <Button theme="primary">Subscriptions</Button>
          </Link>

          <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
        </GridCell>
      </Grid>
      <div style={{background: grey, border: '1px solid black', textAlign: 'center', padding: '2em'}}>
        <H4 style={{ marginBottom: '0.5em'}}>Your style is:</H4>
        <H3 style={{ fontWeight: 'bold' }}>{ props.user.style.description }</H3>
        <img src={ props.user.style.image_url } alt={ props.user.style.description } style={{ marginTop: "1em", width: '20em', height: '20em', objectFit: 'contain' }}/>
      </div>
    </div>
  )
}

// Component Properties
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  getStyle: PropTypes.func.isRequired
}

// Component State
function profileState(state) {
  return {
    user: state.user,
    survey: state.survey
  }
}

export default connect(profileState, { logout, getStyle })(Profile)
