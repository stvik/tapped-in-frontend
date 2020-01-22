import React, {Component} from 'react'
import {Form, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const SearchBar = (props) =>{
   
    	console.log(props)
        return (
			
			
			<Form style={{textAlign: 'center'}}> 
		

				<Form.Field >
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