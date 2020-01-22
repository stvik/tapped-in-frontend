import React, {Component} from 'react'
import {Form, Button, Select} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const SearchBar = (props) =>{
   const options = [

  { key: 'name', text: 'Name', value: 'name' },
  { key: 'city', text: 'City', value: 'city' },
]
    
        return (
			
			
			<Form style={{textAlign: 'center'}}> 
		

				<Form.Field >
		        	<Select compact options={options} defaultValue='name' onChange={props.updateSearchType}/>

		        </Form.Field>
		        <Form.Field>
		            <input  icon='search' onChange={props.updateSearchText}
		            		value={props.searchText}
							placeholder='Search breweries...'
							/>

		        </Form.Field>
		      
		        <Button  circular color='green' inverted as={Link} to='/breweries' className="ui button" type='submit' onClick={props.searchBrew}>Search</Button>

				
	        </Form>
            
        )
    
}

export default SearchBar