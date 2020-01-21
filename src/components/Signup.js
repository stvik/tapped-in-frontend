import React, { Component } from 'react'
import {Modal, Header, Form, Button, Icon} from 'semantic-ui-react'

class Signup extends Component{
    render(){
        return (
            <Modal 
                basic size='mini'
                open = {this.props.signupModalOpen}
                onClose = {this.props.closeModal}
            >
                <Header as='h2' icon textAlign='center'>
                    <Icon name='user' circular />
                    <Header.Content>Sign Up</Header.Content>
                </Header>

                <Modal.Content>
                    <Form style={{textAlign: 'center'}} inverted onSubmit={this.props.createUser}>
                        <Form.Input  name='firstname' label='First name' placeholder='First name'/>
                        <Form.Input  name='lastname' label='Last name' placeholder='Last name'/>
                        <Form.Input  name='username' label='Username' placeholder='Username'/>
                        <Form.Input  name='password'label='Password' placeholder='Password'/>
                        <h4>Tell us about yourself</h4>
                        <Form.Input  name='bio' placeholder='Bio'/>
                        
                        <Button circular
                            color='green' inverted 
                            type='submit'
                           
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