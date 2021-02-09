import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid, GridCell } from '../../ui/grid'

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

  choices = this.props.choices.map(choice => {
    return (
      <div 
      onClick={ this.handleClick } 
      style={{border: 'solid black 1px'}} 
      key={ choice.value }
      id={ choice.value }
      >
        <img id={ choice.value } src={ choice.image } alt={ choice.label }></img>
        <p id={ choice.value }>{ choice.label }</p>
      </div>
    )
  })


  render() {

    const { title, choices, id } = this.props;

    return (
      <div style={{border: 'solid black 1px'}}>
        <Grid>
          <GridCell>
            <h3>{ title }</h3>
          </GridCell>
        </Grid>
        <Grid>
          <GridCell>
          { this.choices }
          </GridCell>
        </Grid>
      </div>
    )
  }
}

export default Question;
