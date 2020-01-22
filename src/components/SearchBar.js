import React from 'react'
import {Form, Button, Select} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const SearchBar = (props) =>{
   const options = [

  { key: 'name', text: 'Name', value: 'name' },
  { key: 'city', text: 'City', value: 'city' },
]
    
        return (
			
			
			<Form style={{textAlign: 'center'}}> 

				<Form.Group>
				<Form.Field width={4}>
		        	<Select compact options={options} defaultValue='name' onChange={props.updateSearchType}/>

		        </Form.Field >
		        <Form.Field width={12}>
		            <input  icon='search' onChange={props.updateSearchText}
		            		value={props.searchText}
							placeholder='Search breweries...'
							/>

		        </Form.Field>

				</Form.Group>

		      
		        <Button  circular color='green' as={Link} to='/breweries' className="ui button" type='submit' onClick={props.searchBrew}>Search</Button>

				
	        </Form>
            
        )
    
}

export default SearchBar