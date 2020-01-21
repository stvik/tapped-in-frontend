import React, { Component } from 'react'
import {Modal, Header, Form, Button, Icon, Grid} from 'semantic-ui-react'

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
                    <Form style={{textAlign: 'center'}}>
                        <Form.Input placeholder='Email'/>
                        <Form.Input placeholder='Confirm Email'/>
                        <Form.Input placeholder='Password'/>
                        <Form.Input placeholder='Confirm Password'/>
                        <Form.Input placeholder='What should we call you?' />
                    
                        
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