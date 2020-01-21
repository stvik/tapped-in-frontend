import React from 'react'
import StateDropdown from '../components/StateDropdown'
import BreweriesListContainer from './BreweriesListContainer'
import {Button} from 'semantic-ui-react'

export default class BrowseBreweryPage extends React.Component {
	render() {
		return (
			<div>
				<StateDropdown handleSelect={this.props.pickState}/>
				<BreweriesListContainer breweries={this.props.breweries} getMoreBrews={this.props.getMoreBrews} page={this.props.page}/>
				<Button onClick={this.props.getPreviousBrews}>Previous Page</Button>
				<Button onClick={this.props.getMoreBrews}>Next Page</Button>
			</div>

			)
		
	}
}