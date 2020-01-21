import React from 'react'
import {Button, Menu} from 'semantic-ui-react'
import  Login from './Login'
import Signup from './Signup'

class Navbar extends React.Component {

  constructor(){
    super()
    this.state = {
      loginModalOpen: false,
      signupModalOpen: false
    }
  }

  openLoginModal = () => {
    this.setState({loginModalOpen: true})
  }

  openSignupModal = () => {
    this.setState({signupModalOpen: true})
  }

  render() {
    return (
      <Menu size='large' secondary>
          <Menu.Item
            name='Home'   
          />
          <Menu.Item
            name='Breweries'
          />

          <Menu.Menu position='right'>
    

            <Menu.Item name='Sign Up' onClick={this.openSignupModal} >
              
                <Signup 
                  signupModalOpen = {this.state.signupModalOpen}
                  closeModal = {() => this.setState({signupModalOpen: !this.state.signupModalOpen})} 
                /> Sign Up
             
            </Menu.Item>
            
            <Menu.Item name='Login' onClick={this.openLoginModal}>
                <Login loginModalOpen = {this.state.loginModalOpen}
                closeModal = {() => this.setState({loginModalOpen: !this.state.loginModalOpen})} /> Login
        
            </Menu.Item>
          </Menu.Menu>
        </Menu>

      )
    }
}


export default Navbar