import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid, GridCell } from '../../ui/grid'
import { primary, secondary } from '../../ui/common/gradients'
import { white } from '../../ui/common/colors'


class Question extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      choice: 0
    }
  }


  handleClick = async (e) => {
    let choice = e.target.id
    await this.setState({ choice: parseInt(choice)})
    this.props.saveSelection(`q${this.props.id}`, this.state.choice)
  }

  showSelected = (choiceNum) => {
    const start = { display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '25px', padding: '0.5em', width: '50%'}
    const selected = { display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '25px', padding: '0.5em', width: '50%', background: secondary }

    if (!this.state) {
      return start
    } else {
      return this.state.choice === choiceNum ? selected : start
    }
  }

  choices = () => this.props.choices.map(choice => {
    return (
      <div
      onClick={ this.handleClick }
      key={ choice.value }
      style={ this.showSelected(choice.value) }
      id={ choice.value }
      >
        <img
          id={ choice.value }
          src={ choice.image }
          alt={ choice.label }
          style={{ width: '13em', height: '13em', objectFit: 'contain' }}>
        </img>
        <p id={ choice.value }>{ choice.label }
        </p>
      </div>
    )
  })


  render() {
    const { title, choices, id } = this.props;

    return (
      <div style={{ margin: '1em 0em' }}>
        <Grid>
          <GridCell style={{ padding: '1em', background: primary, color: white }}>
            <h3>{ title }</h3>
          </GridCell>
        </Grid>
        <Grid>
          <GridCell style={{ display: 'flex' }}>
          { this.choices() }
          </GridCell>
        </Grid>
      </div>
    )
  }
}

export default Question;
