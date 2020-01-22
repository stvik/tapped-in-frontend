import React from 'react'
import BreweryCard from '../components/BreweryCard'
import {Item, Segment} from 'semantic-ui-react'


export default class BreweriesListContainer extends React.Component {



	render() {
		
		return (

			<Segment style={{overflow: 'auto', maxHeight: 900}}>
			<Item.Group divided>
				{this.props.breweries.map((brewery,index) => <BreweryCard brewery={brewery} selectedBrewery ={this.props.selectedBrewery} key={index} loggedInUser={this.props.loggedInUser} addToFavorites={this.props.addToFavorites}/>)}
			</Item.Group>
			</Segment>

			)
	}
}

