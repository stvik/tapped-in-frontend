import React from 'react'
import BreweryCard from '../components/BreweryCard'
import {Item, Segment} from 'semantic-ui-react'


export default class BreweriesListContainer extends React.Component {

	// decideDisplay = () => {
	// 	if (this.props.breweries.length) {
	// 		return this.props.breweries.map((brewery,index) => <BreweryCard brewery={brewery} key={index}/>)
	// 	} else if (this.props.page > 1) {
	// 		return <div>No breweries to display</div>
	// 	}
	// }

	render() {
		// console.log(this.props.breweries.length)
		
		return (
			<Segment style={{overflow: 'auto', maxHeight: 900}}>
			<Item.Group divided>
				{this.props.breweries.map((brewery,index) => <BreweryCard selectedBrewery ={this.props.selectedBrewery} brewery={brewery} key={index}/>)}
			</Item.Group>
			</Segment>

			)
	}
}

