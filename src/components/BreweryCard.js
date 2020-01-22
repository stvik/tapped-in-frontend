import React from 'react'
import {Item, Label, Button, Icon} from 'semantic-ui-react'

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
          <Button 
            circular size='mini' 
            basic  color='blue' 
            floated='center'
          >
              Details
              <Icon name='right chevron' />
            </Button>
          <Button circular size='mini' basic color='red' floated='center'>
              Favorite
              <Icon name='right favorite' />
          </Button>
        </Item.Extra>
        <Item.Extra>
        </Item.Extra>
      </Item.Content>
    </Item>

		)
}

export default BreweryCard