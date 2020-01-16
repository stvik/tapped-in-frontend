import React from 'react'
import {Button, Menu} from 'semantic-ui-react'

class Navbar extends React.Component {


render() {
	return (
		<Menu size='large'>
        <Menu.Item
          name='Home'   
        />
        <Menu.Item
          name='Breweries'
        />

        <Menu.Menu position='right'>
   

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
          <Menu.Item>
             <Button primary>Login</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

		)
	}
}


export default Navbar