import React, {Component} from 'react'
import {Form, Button} from 'semantic-ui-react'

export default class SearchBar extends Component{
    render(){
        return (
            <Form> 
	            <Form.Field>
		            <input onChange={this.props.updateSearchText}
		            		value={this.props.searchText}
		            		placeholder='Search breweries...' />
		        </Form.Field>
	        </Form>
            
        )
    }
}