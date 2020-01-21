import React from 'react'
import StateDropdown from '../components/StateDropdown'
import BreweriesListContainer from './BreweriesListContainer'
import SimpleMap from '../components/SimpleMap'
import {Button, Grid} from 'semantic-ui-react'

export default class BrowseBreweryPage extends React.Component {
	render() {
		// console.log(this.props)
		
		return (
			<div>
				<Grid>
					<Grid.Column width={8}>
						<StateDropdown handleSelect={this.props.pickState}/>
						<Button onClick={this.props.getPreviousBrews}>Previous Page</Button>
						<Button onClick={this.props.getMoreBrews}>Next Page</Button>
						<BreweriesListContainer breweries={this.props.breweries} getMoreBrews={this.props.getMoreBrews} page={this.props.page}/>
					</Grid.Column>
					<Grid.Column width={8}>
					<SimpleMap breweries={this.props.breweries} />
					</Grid.Column>
				</Grid>
			</div>

			)
		
	}
}