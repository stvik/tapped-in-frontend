import React from 'react'
import StateDropdown from '../components/StateDropdown'
import BreweriesListContainer from './BreweriesListContainer'
import SimpleMap from '../components/SimpleMap'
import {Button, Grid, Icon} from 'semantic-ui-react'

export default class BrowseBreweryPage extends React.Component {
	
	constructor(){
		super()
		this.state = {
			selectedBrewery: {}
		}
	}

	selectedBrewery = (brewery) => {
		this.setState({selectedBrewery: brewery})
	}

	render() {
		
		return (
			<div>
				<Grid>
					<Grid.Column width={6}>
						
						<StateDropdown handleSelect={this.props.pickState}/>
					
						<Button basic color='green' circular onClick={this.props.getPreviousBrews}>
							<Icon name='arrow left'/>
							Previous
						</Button>

						<Button basic color='green' floated='right'circular onClick={this.props.getMoreBrews}>
							Next
							<Icon name='arrow right'/>
						</Button>
				
						
						<BreweriesListContainer 
							selectedBrewery = {this.selectedBrewery} 
							breweries={this.props.breweries} 
							getMoreBrews={this.props.getMoreBrews} 
							page={this.props.page} 
							loggedInUser={this.props.loggedInUser} 
							addToFavorites={this.props.addToFavorites}
						/>

					</Grid.Column>
					<Grid.Column width={10}>
					<SimpleMap  selectedBrewery = {this.state.selectedBrewery} breweries={this.props.breweries} />
					</Grid.Column>
				</Grid>
			</div>

			)
		
	}
}