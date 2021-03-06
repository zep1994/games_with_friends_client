import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { updateGameFormData } from '../actions/gameForm'
import { createGame } from '../actions/games'

class GameForm extends Component {

    handleOnChange = event => {
        const {name, value} = event.target
        const currentGameFormData = Object.assign({}, this.props.gameFormData, {
            [name]: value
        })
        this.props.updateGameFormData(currentGameFormData)
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const { createGame, gameFormData, history} = this.props
        createGame(gameFormData, history)
    }

    render() {
        const { name, drinks, directions, image_url } = this.props.gameFormData
        return(
            <div> 
                <h3>Add Game:</h3>
                <hr />
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type='text'
                               onChange={this.handleOnChange}
                               name='name'
                               value={name} />
                    </div>
                    <div>
                        <label htmlFor="drinks">Drinks:</label>
                        <input type='text'
                               onChange={this.handleOnChange}
                               name='drinks'
                               value={drinks} />
                    </div>
                    <div>
                        <label htmlFor="directions">Directions:</label>
                        <textarea type='textarea'
                               onChange={this.handleOnChange}
                               name='directions'
                               value={directions} />
                    </div>
                    <div>
                    <label htmlFor="image_url">Image URL:</label>
                        <input type='text'
                               onChange={this.handleOnChange}
                               name='image_url'
                               value={image_url} />
                    </div>
                    <Button type="submit" bsStyle='primary'>Submit</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
     return{
        gameFormData: state.gameFormData
     }
}

export default connect(mapStateToProps, {updateGameFormData, createGame})(GameForm)