import React from 'react'
import BreweryCard from '../components/BreweryCard'
import {Item} from 'semantic-ui-react'


export default class BreweriesListContainer extends React.Component {

	// decideDisplay = () => {
	// 	if (this.props.breweries.length) {
	// 		return this.props.breweries.map((brewery,index) => <BreweryCard brewery={brewery} key={index}/>)
	// 	} else if (this.props.page > 1) {
	// 		return <div>No breweries to display</div>
	// 	}
	// }

	render() {
		console.log(this.props.breweries.length)
		return (
			<Item.Group>
				{this.props.breweries.map((brewery,index) => <BreweryCard brewery={brewery} key={index}/>)}
			</Item.Group>

			)
	}
}

