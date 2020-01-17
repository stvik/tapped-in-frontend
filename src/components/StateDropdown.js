
import faker from 'faker'
import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'



export default class StateDropdown extends React.Component {



	render() {
		const addressDefinitions = faker.definitions.address
		const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
		  key: addressDefinitions.state_abbr[index],
		  text: state,
		  value: addressDefinitions.state_abbr[index],
		}))

		return(
			<Dropdown placeholder='State' search selection options={stateOptions} onChange={this.props.handleSelect}/>
			)
	}


}


