import React from 'react'
import StateDropdown from '../components/StateDropdown'
import BreweriesListContainer from './BreweriesListContainer'

export default class BrowseBreweryPage extends React.Component {
	render() {
		return (
			<div>
				<StateDropdown handleSelect={this.props.pickState}/>
				<BreweriesListContainer breweries={this.props.breweries}/>
			</div>

			)
		
	}
}