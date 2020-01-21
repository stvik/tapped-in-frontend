import React from 'react'
import BreweryCard from '../components/BreweryCard'
import {Item} from 'semantic-ui-react'


export default class BreweriesListContainer extends React.Component {
	render() {
		return (
			<Item.Group>
			
				{this.props.breweries.map((brewery,index) => <BreweryCard brewery={brewery} key={index}/>)}  
			</Item.Group>

			)
	}
}