import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid, GridCell } from '../../ui/grid'
import { primary } from '../../ui/common/gradients'
import { white, secondary } from '../../ui/common/colors'


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
    const start = { padding: '0.5em', border: 'solid black 1px', width: '50%'}
    const selected = { padding: '0.5em', border: 'solid black 1px', width: '50%', background: secondary }
    console.log(this.state, choiceNum)

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
          style={{ width: '100px', height: '100px', objectFit: 'contain' }}>
        </img>
        <p id={ choice.value }>{ choice.label }
        </p>
      </div>
    )
  })


  render() {
    const { title, choices, id } = this.props;

    return (
      <div style={{ margin: '1em 0em', border: 'solid black 1px'}}>
        <Grid>
          <GridCell style={{ background: primary, color: white }}>
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
