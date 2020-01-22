import React from 'react'
import BreweryCard from '../components/BreweryCard'
import {Item, Segment, Modal, Image, Header, Button, Popup} from 'semantic-ui-react'


export default class BreweriesListContainer extends React.Component {
	constructor(){
		super()
		this.state ={
			activeItem: {},
			modalOpen: false
		}
	}

	handleClick = (brewery) => {
		this.setState({activeItem: brewery, modalOpen: !this.state.modalOpen})
	}
	
	render() {
		const {name, description, website_url, image, street, city, state, postal_code} = this.state.activeItem
		return (
			
			<Segment style={{overflow: 'auto', maxHeight: 900}}>
			<Item.Group divided>
				{this.props.breweries.map((brewery,index) => <BreweryCard handleClick={this.handleClick} brewery={brewery} selectedBrewery ={this.props.selectedBrewery} key={index} loggedInUser={this.props.loggedInUser} addToFavorites={this.props.addToFavorites}/>)}
			</Item.Group>
			
			<Modal 
				open={this.state.modalOpen}
				onClose = {() => {this.setState({modalOpen: false})}}
				>
				<Modal.Header>{name}</Modal.Header>
				<Modal.Content image>
				<Image wrapped size='medium' src= {image}/>
				<Modal.Description>
					<Header>{name}</Header>
					<p>{street}</p>
					<p>{city}, {state}, {postal_code} </p>
					<p>{description}</p>
					{website_url ? 
                    	<Button circular basic color='blue'><a href={website_url} target='_blank'> Visit Website </a></Button>
                		:
                    	<Popup content='This brewery does not have a website yet!' on='click' pinned trigger = {<Button content='Visit Website' circular basic color='blue'/>} />
                	}
				</Modal.Description>
				</Modal.Content>
			</Modal>
			</Segment>

)
}
}


// decideDisplay = () => {
// 	if (this.props.breweries.length) {
// 		return this.props.breweries.map((brewery,index) => <BreweryCard brewery={brewery} key={index}/>)
// 	} else if (this.props.page > 1) {
// 		return <div>No breweries to display</div>
// 	}
// }