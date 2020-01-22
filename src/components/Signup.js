import React, { Component } from 'react'
import {Modal, Header, Form, Button, Icon, Image} from 'semantic-ui-react'

class Signup extends Component{
    render(){
        return (
            <Modal 
                basic size='mini'
                open = {this.props.signupModalOpen}
                onClose = {this.props.closeModal}
            >
                <Image centered size = 'medium' src="http://static.showit.co/800/KtnOrZ53RuOmaWr0IInTEg/73125/just_hop.png" circular />
                <Header as='h2' icon textAlign='center'>
                    <Header.Content>Sign Up</Header.Content>
                </Header>

                <Modal.Content>
                    <Form style={{textAlign: 'center'}} inverted onSubmit={this.props.createUser}>
                        <Form.Input  name='firstname' label='First Name' placeholder='First Name'/>
                        <Form.Input  name='lastname' label='Last Name' placeholder='Last Name'/>
                        <Form.Input  name='username' label='Username' placeholder='Username'/>
                        <Form.Input  name='password'label='Password' placeholder='Password' type='password' />
                        <h4>Tell us about yourself!</h4>
                        <Form.Input  name='bio' placeholder='Bio'/>
                        
                        <Button circular
                            color='green' inverted 
                            type='submit'
                            onClick={this.props.closeModal}
                           
                        > 
                            <Icon name = 'checkmark' /> Sign Up
                        </Button>
                        
                    </Form>
    
                </Modal.Content>
        </Modal>
        )
    }
}

export default Signup