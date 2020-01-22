import React from 'react'
import {Item, Button, Icon} from 'semantic-ui-react'

const BreweryCard = (props) => {

	const {name, street, city, state, postal_code, website_url, rating, image, description} = props.brewery
	return (
	 <Item onClick={() => props.selectedBrewery(props.brewery)}>
      <Item.Image size='small' src={image} />

      <Item.Content>
        <Item.Header as='a'>{name}</Item.Header>
        <Item.Meta>
          <span className='cinema'>{street}, {city}, {state} {postal_code}</span>
        </Item.Meta>
        <Item.Extra>  
          {props.loggedInUser ? <Button circular basic color='red'  size='mini' onClick={() => props.addToFavorites(props.brewery)}>  
             Favorite
             <Icon name='favorite right' />  
          </Button> : null}
          <Button onClick={() => props.handleClick(props.brewery)} circular size='mini' basic  color='blue'>
              Details
              <Icon name='chevron right' />
            </Button>
        </Item.Extra>
      </Item.Content>

    </Item>

		)
}

export default BreweryCard
          // <Button circular size='mini' basic color='red' floated='center'>
          //     Favorite
          //     <Icon name='right favorite' />
          // </Button>