import React, { Fragment } from 'react'
import {Button, Menu} from 'semantic-ui-react'
import  Login from './Login'
import Signup from './Signup'
import { Link } from 'react-router-dom'
import hoppy from '../images/hoppy.png'

class Navbar extends React.Component {

  constructor(){
    super()
    this.state = {
      loginModalOpen: false,
      signupModalOpen: false,
      activeItem: 'home'
    }
  }


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  openLoginModal = () => {
    this.setState({loginModalOpen: true})
  }

  openSignupModal = () => {
    this.setState({signupModalOpen: true})
  }

  render() {
  
    return (
      <Menu size='large' secondary>
          <Menu.Item as={Link} to='/'
            name='Main Home'
            active={this.state.activeItem === 'Main Home'}
            onClick={this.handleItemClick}
          >
            <img src = {"http://static.showit.co/800/KtnOrZ53RuOmaWr0IInTEg/73125/just_hop.png"} />
          </Menu.Item>

          <Menu.Item as={Link} to='/'
            name='Home'
            active={this.state.activeItem === 'Home'}
            onClick={this.handleItemClick}
            color='green'
          />
        
          
          <Menu.Item as={Link} to='/breweries'
            name='Breweries'
            active={this.state.activeItem === 'Breweries'}
            onClick={this.handleItemClick}
            color='green'
          />

          <Menu.Item as={Link} to='/community'
            name='Community'
            active={this.state.activeItem === 'Community'}
            onClick={this.handleItemClick}
            color='green'
          />

          <Menu.Menu position='right'>
            
            {this.props.loggedInUser ? <Menu.Item as={Link} to='/profile' name='Profile' ><img src='https://react.semantic-ui.com/logo.png' /></Menu.Item>
              :
              <Fragment>
              <Menu.Item name='Sign Up' onClick={this.openSignupModal} >
                
                  <Signup
                    createUser={this.props.createUser} 
                    signupModalOpen = {this.state.signupModalOpen}
                    closeModal = {() => this.setState({signupModalOpen: !this.state.signupModalOpen})} 
                  /> Sign Up
              
              </Menu.Item>
              
              <Menu.Item name='Login' onClick={this.openLoginModal}>
                  <Login 
                  handleLogin={this.props.handleLogin}
                  loginModalOpen = {this.state.loginModalOpen}
                  closeModal = {() => this.setState({loginModalOpen: !this.state.loginModalOpen})} /> Login
          
              </Menu.Item> 
              </Fragment>  
          } 
          
            

          </Menu.Menu> 

        </Menu>

      )
    }
}


export default Navbar