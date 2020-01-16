import React from 'react'
import {Item, Label} from 'semantic-ui-react'

const BreweryCard = (props) => {

	const {name, street, city, state, postal_code, website_url, rating, image, description} = props.brewery
	return (
	 <Item>
      <Item.Image size='small' src={image} />

      <Item.Content>
        <Item.Header as='a'>{name}</Item.Header>
        <Item.Meta>
          <span className='cinema'>{street}, {city}, {state} {postal_code}</span>
        </Item.Meta>
        <Item.Description>{description}</Item.Description>
        <Item.Extra>
          <Label icon='star'/>
        </Item.Extra>
      </Item.Content>
    </Item>

		)
}

export default BreweryCard