import React from 'react'
import StateDropdown from '../components/StateDropdown'
import BreweriesListContainer from './BreweriesListContainer'
import SimpleMap from '../components/SimpleMap'
import {Button} from 'semantic-ui-react'

export default class BrowseBreweryPage extends React.Component {
	render() {
		console.log(this.props)
		return (
			<div>
				<StateDropdown handleSelect={this.props.pickState}/>
				<BreweriesListContainer breweries={this.props.breweries} getMoreBrews={this.props.getMoreBrews} page={this.props.page}/>
				<Button onClick={this.props.getPreviousBrews}>Previous Page</Button>
				<Button onClick={this.props.getMoreBrews}>Next Page</Button>
				<SimpleMap breweries={this.props.breweries} />
			</div>

			)
		
	}
}